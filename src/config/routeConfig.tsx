import BlogPage from "../pages/BlogPage/BlogPage";
import { Outlet, RouteObject } from "react-router-dom";
import SubAboutMeComponent from "../pages/HomePage/components/subAboutMe/SubAboutMeComponent";
import SubBlogsComponent from "../pages/HomePage/components/subBlogs/SubBlogsPageComponent";
import SubHomeComponent from "../pages/HomePage/components/subHome/SubHomePageComponent";
import BlogAddPage from "../pages/BlogAddPage/BlogAddPage";
import BlogUpdatePage from "../pages/BlogUpdatePage/BlogUpdatePage";

export const routes: RouteObject[] = [
  {
    path: "/leoblogclient",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <SubHomeComponent />,
      },
      { path: "/leoblogclient/aboutMe", element: <SubAboutMeComponent /> },
      {
        path: "/leoblogclient/blogs",
        element: <Outlet />,
        children: [
          {
            path: ":typeId",
            element: <SubBlogsComponent />,
          },
        ],
      },
      { path: "", element: <SubHomeComponent /> },
    ],
  },
  {
    path: "/leoblogclient/blog",
    element: <Outlet />,
    children: [
      {
        path: ":id",
        element: <BlogPage />,
      },
    ],
  },
  {
    path: "/leoblogclient/addBlog",
    element: <BlogAddPage />,
  },
  {
    path: "/leoblogclient/updateBlog",
    element: <Outlet />,
    children: [
      {
        path: ":id",
        element: <BlogUpdatePage />,
      },
    ],
  },
];
