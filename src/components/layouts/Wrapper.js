import { useEffect } from "react";

const Wrapper = ({ children, title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return children;
};

export default Wrapper;
