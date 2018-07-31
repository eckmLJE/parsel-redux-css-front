import React, { Component } from "react";
import AnnoLabel from "../components/AnnoLabel";

class StatementView extends Component {
  statement =
    "Today’s press conference in Helsinki was one of the most disgraceful performances by an American president in memory. The damage inflicted by President Trump’s naiveté, egotism, false equivalence, and sympathy for autocrats is difficult to calculate. But it is clear that the summit in Helsinki was a tragic mistake. President Trump proved not only unable, but unwilling to stand up to Putin. He and Putin seemed to be speaking from the same script as the president made a conscious choice to defend a tyrant against the fair questions of a free press, and to grant Putin an uncontested platform to spew propaganda and lies to the world. It is tempting to describe the press conference as a pathetic rout – as an illustration of the perils of under-preparation and inexperience. But these were not the errant tweets of a novice politician. These were the deliberate choices of a president who seems determined to realize his delusions of a warm relationship with Putin’s regime without any regard for the true nature of his rule, his violent disregard for the sovereignty of his neighbors, his complicity in the slaughter of the Syrian people, his violation of international treaties, and his assault on democratic institutions throughout the world. Coming close on the heels of President Trump’s bombastic and erratic conduct towards our closest friends and allies in Brussels and Britain, today’s press conference marks a recent low point in the history of the American Presidency. That the president was attended in Helsinki by a team of competent and patriotic advisors makes his blunders and capitulations all the more painful and inexplicable. No prior president has ever abased himself more abjectly before a tyrant. Not only did President Trump fail to speak the truth about an adversary; but speaking for America to the world, our president failed to defend all that makes us who we are—a republic of free people dedicated to the cause of liberty at home and abroad. American presidents must be the champions of that cause if it is to succeed. Americans are waiting and hoping for President Trump to embrace that sacred responsibility. One can only hope they are not waiting totally in vain.";

  statementHeader = "John McCain on Trump Putin Meeting in Helsinki";

  state = { selectionPopup: false, popupX: null, popupY: null };

  renderSelectPopup = () => {
    return (
      <div
        className="anno anno-card"
        style={{
          position: "absolute",
          top: `${this.state.popupY}px`,
          left: `${this.state.popupX}px`
        }}
      />
    );
  };

  handleSelect = e => {
    console.log(window.getSelection(), e.target.getBoundingClientRect());
    const clientRect = e.target.getBoundingClientRect()
    const selection = window.getSelection();
    const x = e.clientX - clientRect.left;
    const y = e.clientY - clientRect.top;
    selection.type !== "Caret"
      ? this.setState({
          selectionPopup: true,
          popupX: x - 100,
          popupY: y + 25
        })
      : this.setState({ selectionPopup: false });
  };

  render() {
    return (
      <div className="statement-view">
        {this.state.selectionPopup ? this.renderSelectPopup() : null}
        <div className="statement-header">{this.statementHeader}</div>
        <div onMouseUp={this.handleSelect} className="statement">
          {this.statement}
        </div>
        <div className="statement-rail">
          <AnnoLabel yPos={40} />
          <AnnoLabel yPos={90} />
          <AnnoLabel yPos={200} />
          <AnnoLabel yPos={500} />
          <AnnoLabel yPos={600} />
        </div>
      </div>
    );
  }
}

export default StatementView;
