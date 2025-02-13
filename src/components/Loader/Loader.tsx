import { FallingLines } from "react-loader-spinner";
import css from "./Loader.module.css";
import React from "react";

const Loader = () => {
  return (
    <div className={css.loader}>
      <FallingLines
        width="100"
        color="#ce4514"
        // ariaLabel="falling-circles-loading"
        visible={true}
      />
    </div>
  );
};
export default Loader;
