import { RouterProvider } from "react-router-dom";
import router from "./Components/Routes/Routes";

const App = () => {
  return (
  <RouterProvider router={router} />
  );
};

export default App;
