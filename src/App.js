import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
const routerfg = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/contactus",
    element: <ContactPage/>
  },
]);
function App() {
  return (
    <>
     <RouterProvider router={routerfg} />
    </>
  );
}

export default App;
