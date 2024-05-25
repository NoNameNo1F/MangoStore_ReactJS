import React from "react";
import { withAuth } from "../hoc";

function Authentication() {
  return <div>This page can only be accessed if logged user</div>;
}

export default withAuth(Authentication);
