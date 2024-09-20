import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Landing/Home";
import Searching from "../pages/Landing/Searching";
import WhyUs from "../pages/Landing/WhyUs";
import Blog from "../pages/Landing/Blog";
import BlogArticle from "../pages/Landing/BlogArticle";
import Company from "../pages/Landing/CompanyDetail";
import AuthLayout from "../layouts/AuthLayout";
import Signin from "../pages/Landing/Signin";
import Signup from "../pages/Landing/Signup";
import GetSuggest from "../pages/GetSuggest";
import Belisted from "../pages/Landing/Belisted";
import Rating from "../pages/Landing/Rating";
import { TestComponent } from "../pages/TestComponent";
import UserLayout from "../layouts/UserLayout";
import { UserDashboard } from "../pages/User/UserDashboard";
import BlogPage from "../pages/Admin/BlogPage";
import { UserGetSuggest } from "../pages/User/UserGetSuggest";
import AdminLayout from "../layouts/AdminLayout";
import UserRating from "../pages/User/UserRating";
import UserBeListed from "../pages/User/UserBeListed";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import SuggestPage from "../pages/Admin/SuggestPage";
import RatingPage from "../pages/Admin/RatingPage";
import ContactPage from "../pages/Admin/ContactPage";
import NotFound from "../pages/NotFound";
import CreateBlogPage from "../pages/Admin/CreateBlogPage";
import UserPage from "../pages/Admin/UserPage";
import CompanyPage from "../pages/Admin/CompanyPage";
import UserVerifyEmail from "../pages/User/UserVerifyEmail";
import EditBlogPage from "../pages/Admin/EditBlogPage";
import UserCompanyProfile from "../pages/User/UserCompanyProfile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/search/",
        element: <Searching />,
      },
      {
        path: "/why-us",
        element: <WhyUs />,
      },

      {
        path: "/get-suggest",
        element: <GetSuggest />,
      },

      {
        path: "/be-listed",
        element: <Belisted />,
      },

      {
        path: "/rating",
        element: <Rating />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:slug",
        element: <BlogArticle />,
      },
      {
        path: "/company/:slug",
        element: <Company />,
      },
      {
        path: "/test",
        element: <TestComponent />,
      },
      {
        path: "/:id/verify/:token",
        element: <UserVerifyEmail />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "users",
        element: <UserPage />,
      },
      {
        path: "companies",
        element: <CompanyPage />,
      },
      {
        path: "suggest",
        element: <SuggestPage />,
      },
      {
        path: "rating",
        element: <RatingPage />,
      },

      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "blog/create",
        element: <CreateBlogPage />,
      },
      {
        path: "blog/update/:slug",
        element: <EditBlogPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        path: "dashboard",
        element: <UserDashboard />,
      },
      {
        path: "get-suggest",
        element: <UserGetSuggest />,
      },
      {
        path: "be-listed",
        element: <UserBeListed />,
      },
      {
        path: "rating",
        element: <UserRating />,
      },
      {
        path: "company/profile",
        element: <UserCompanyProfile />,
      },
    ],
  },
]);
