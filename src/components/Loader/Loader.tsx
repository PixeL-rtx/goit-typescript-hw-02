import { FallingLines } from "react-loader-spinner";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.loader}>
      <FallingLines
        width="100"
        color="#ce4514"
        ariaLabel="falling-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
export default Loader;
