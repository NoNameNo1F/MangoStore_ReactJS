import React from "react";
import { withAdminAuth } from "../hoc";

function AuthenticationTestAdmin() {
    return <div>This page can only be accessed if role of logged user is admin.</div>

}
export default withAdminAuth(AuthenticationTestAdmin);
