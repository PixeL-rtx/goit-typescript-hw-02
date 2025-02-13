import toast from "react-hot-toast";
import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";

interface values {
  query: string;
}
interface SearchBar {
  onSubmit: (query: string) => void;
}

const initialValues = { query: "" };

const SearchBar: React.FC<SearchBar> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        if (!values.query) {
          toast.error("Enter the word");
          return;
        }
        onSubmit(values.query);
        actions.resetForm();
      }}
    >
      <Form className={css.searchForm}>
        <Field
          className={css.searchInput}
          name="query"
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search for images"
        />
        <button className={css.btnSearch} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
