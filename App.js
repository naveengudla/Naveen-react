import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/Header";
import BodyComponent from "./src/components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./src/components/Contact";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Suspense } from "react";
import {lazy, Suspense} from "react";
const About = lazy(() => import("./src/components/About"));
import { useState, useEffect } from "react";
import UserNameContext from "./src/utils/userNameContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/store/appStore";
import Cart from "./src/components/Cart";


const AppComponent = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setUserName("Naveen");
  }, []);

  return (
    <Provider store={appStore}>
      <UserNameContext.Provider value={[userName, setUserName]}>
        <div className="appContainer">
          <UserNameContext.Provider value={['Naveen Gudla', setUserName]}>
            <HeaderComponent />
          </UserNameContext.Provider>
          <Outlet />
        </div>
      </UserNameContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "about/",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
      },
      {
        path: "contact/",
        element: <Contact />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "",
        element: <BodyComponent />,
      },
    ],
    errorElement: <h1>404 Not Found</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
