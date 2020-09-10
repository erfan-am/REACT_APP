import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { UserContextApi } from "../../../contextApi/data";
import TextField from "@material-ui/core/TextField";
import { Context } from "../../../contextApi/contextAPI";
import { withRouter } from "react-router-dom";
import Cart from "../../shared/cart/cart";
import GridCart from "../../shared/grid/grid";
const useStyles = makeStyles((theme) => ({
  container: {
    margin: "4px auto",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    height: "87vh"
  },
  wrapper: {
    width: "50%",
    overflowY: "scroll"
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "70%"
    },
    marginRight: "auto"
  },
  root: {
    marginTop: "10px",
    width: "350px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    width: "90px",
    height: "90px"
  }
}));
const RecipeReviewCard = (props) => {
  const users = useContext(UserContextApi);
  const usersAPI = useContext(Context);
  const classes = useStyles();
  const userClickHandler = (user) => {
    usersAPI.setUserPage(user);
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <form className={classes.form} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="current-email"
            variant="outlined"
          />
        </div>
      </form>
      <Container className={classes.container}>
        <div className={classes.wrapper}>
          {users.map((user) => (
            <Card className={classes.root} key={user.id}>
              <CardHeader
                avatar={
                  <Avatar
                    onClick={() => userClickHandler(user)}
                    aria-label="recipe"
                    src={user.img}
                    className={classes.avatar}
                  ></Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={user.name}
                subheader={user.bio}
              />
            </Card>
          ))}
        </div>
        {usersAPI.user ? (
          <GridCart>
            {usersAPI.user.images.map((image) => (
              <Cart item={usersAPI.user} image={image} />
            ))}
          </GridCart>
        ) : (
          <h2>there is nothing...</h2>
        )}
      </Container>
    </div>
  );
};

export default withRouter(RecipeReviewCard);
