import React, { useContext } from "react";
import { useStyles } from "./ImageCss";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import { Context } from "../../../contextApi/contextAPI";
import StarIcon from "@material-ui/icons/Star";
import Avatar from "@material-ui/core/Avatar";

export default function TitlebarGridList({ items, history }) {
  const placeContext = useContext(Context);
  const classes = useStyles();
  const date = new Date().getFullYear();
  const getPlaceHandler = (item) => {
    history.push(`./places/${item.id}`);
    placeContext.placeChos(item);
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">{date}</ListSubheader>
        </GridListTile>
        {items &&
          items.map((item) => (
            <GridListTile key={item.id}>
              <img
                onClick={() => getPlaceHandler(item)}
                src={item.image}
                alt={item.place}
              />
              <GridListTileBar
                title={item.place}
                subtitle={<span>by: @{item.creator}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${item.place}`}
                    className={classes.icon}
                  >
                    <Avatar aria-label="recipe" src={item.creatorImg} />

                    <h2>{item.likes}</h2>
                    <StarIcon style={{ color: "gold" }} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
}
