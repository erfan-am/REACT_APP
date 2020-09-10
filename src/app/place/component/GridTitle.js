import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import GridList from "@material-ui/core/GridList";

export default function RecipeReviewCard({ comments, classes }) {
  return (
    <GridList cols={2} style={{ overflow: "hidden" }}>
      {comments.map((comment) => (
        <CardHeader
          key={comment.id}
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.img}
              src={comment.img}
            ></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={comment.name}
          subheader={comment.comment}
        />
      ))}
    </GridList>
  );
}
