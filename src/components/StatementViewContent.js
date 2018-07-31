import React, { Component } from "react";
import SelectPopup from "../components/SelectPopup";
import HighlightSpan from "../components/HighlightSpan";
import TextFragment from "../components/TextFragment";

class StatementViewContent extends Component {
  state = { selectionPopup: false, popupX: null, popupY: null };

  handleSelect = e => {
    console.log(window.getSelection(), e.target.getBoundingClientRect());
    const clientRect = e.target.getBoundingClientRect();
    const selection = window.getSelection();
    const x = e.clientX - clientRect.left;
    const y = e.clientY - clientRect.top;
    selection.type !== "Caret"
      ? this.setState({
          selectionPopup: true,
          popupX: x - 100,
          popupY: y + 50
        })
      : this.setState({ selectionPopup: false });
  };

  convertId = id => {
    let numId = parseInt(id, 10) + 1000;
    return numId.toString();
  };

  mapConvertAnnotations = annotations => {
    return annotations.map(annotation => ({
      id: annotation.id,
      name: this.convertId(annotation.id),
      start: annotation.start,
      end: annotation.end,
      content: annotation.content,
      statementId: annotation["statement_id"].toString(),
      user: annotation["user_id"],
      points: annotation.points
    }));
  };

  processAnnotations = () => {
    let highlights = [];
    let lastEnd = 0;
    let currentAnnotations = this.mapConvertAnnotations(
      this.props.statement.attributes.annotations
    );
    currentAnnotations = currentAnnotations.sort((a, b) => a.start > b.start);
    currentAnnotations.forEach(annotation => {
      if (annotation.start > lastEnd) {
        highlights.push(
          this.createHighlight(
            annotation.id,
            annotation.name,
            annotation.start,
            annotation.end
          )
        );
        lastEnd = annotation.end;
      } else {
        let lastHighlight = highlights.pop();
        const prevEnd = lastHighlight.end;
        lastHighlight.end = annotation.start;
        highlights.push(lastHighlight);
        highlights.push(
          this.createHighlight(
            lastHighlight.id,
            `${lastHighlight.name} ${annotation.name}`,
            annotation.start,
            prevEnd
          )
        );

        highlights.push(
          this.createHighlight(
            annotation.id,
            annotation.name,
            prevEnd,
            annotation.end
          )
        );
        lastEnd = annotation.end;
      }
    });
    return highlights;
  };

  createHighlight = (id, name, start, end) => ({
    id,
    name,
    start,
    end
  });

  makeStatementArray = () => {
    const statement = this.props.statement.attributes.content;
    const highlights = this.processAnnotations();
    let newStatementArray = [];
    let charCounter = 0;
    let colorCounter = 0;
    highlights.forEach(highlight => {
      newStatementArray.push(
        <TextFragment
          key={newStatementArray.length}
          content={statement.slice(charCounter, highlight.start)}
        />
      );
      newStatementArray.push(
        <HighlightSpan
          content={statement.slice(highlight.start, highlight.end)}
          name={highlight.name}
          key={highlight.name}
          id={highlight.id}
          index={colorCounter}
        />
      );
      colorCounter++;
      charCounter = highlight.end;
    });
    if (statement.length >= charCounter) {
      newStatementArray.push(
        statement.slice(charCounter, statement.length + 1)
      );
    }
    return newStatementArray;
  };

  render() {
    return (
      <div>
        {this.state.selectionPopup ? <SelectPopup pos={this.state} /> : null}
        <div className="statement-header">{this.statementHeader}</div>
        <div onMouseUp={this.handleSelect} className="statement">
          {this.makeStatementArray()}
        </div>
      </div>
    );
  }
}

export default StatementViewContent;