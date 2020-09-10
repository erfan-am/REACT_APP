import React, { useContext } from "react";
import ImageList from "../component/ImageList";
import { withRouter } from "react-router-dom";
import { ContextAPI } from "../../../contextApi/data";

const Image = ({ history }) => {
  const allCarts = useContext(ContextAPI);
  return (
    <div>
      <ImageList items={allCarts} history={history} />
    </div>
  );
};
export default withRouter(Image);
