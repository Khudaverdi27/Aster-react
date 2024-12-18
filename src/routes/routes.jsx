import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { AppLayout } from "../layouts/AppLayout";
import { Search } from "../pages/Search/Search";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <Home />
      </AppLayout>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/search/:slug",
    element: (
      <AppLayout>
        <Search />,
      </AppLayout>
    ),
  },
]);
