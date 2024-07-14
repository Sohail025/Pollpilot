import NavBar from "../Components/NavBar";
import BeforeLogin from "../Components/BeforeLogin";
import AfterLogin from "../Components/AfterLogin";

import { useState } from "react";

export const Login = () => {
  const [loginStatus, SetLoginStatus] = useState(false);
  return (
    <div>
      <NavBar />
      {!loginStatus && <BeforeLogin />}
      {loginStatus && <AfterLogin />}
    </div>
  );
};
export default Login;
