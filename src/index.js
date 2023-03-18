import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/home/home.js';
import Project1 from './components/projects/project1';
import Project2 from './components/projects/project2';
import Project3 from './components/projects/project3';
import Projects from './components/projects/projects-page.js';
import ErrorPage from './components/error-page/error-page';
import Info from './components/info-page/info-page';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './style.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects/project1",
    element: <Project1 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects/project2",
    element: <Project2 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects/project3",
    element: <Project3 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/info",
    element: <Info />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
