import Main from "./pages/Main";
import useAuthCheck from "./hooks/useAuthCheck";

const App = () => {
  const authCheck = useAuthCheck();
  return !authCheck ? <div>Loading....</div>: (
    <Main />
  );
};

export default App;
