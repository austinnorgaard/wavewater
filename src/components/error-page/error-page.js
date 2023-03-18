import React from 'react';
import { useRouteError } from "react-router-dom";
import '../../style.css';
import {Link} from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <i><Link to="/">Go Home</Link></i>
    </div>
  );
}