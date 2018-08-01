import React from "react";
import { Card, Comment } from "semantic-ui-react";

import CommentCard from "../components/CommentCard";

const CommentsList = (props) => {
  return (
    <Card.Content extra>
      <Comment.Group>
        {props.comments.map(comment => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </Comment.Group>
    </Card.Content>
  );
};

export default CommentsList;
