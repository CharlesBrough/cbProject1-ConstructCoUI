import React from "react";
// would need for class components
// import { connect } from "react-redux";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import LogoutButton from "./LogoutButton";

const LoginPage = () => {
  const loggedInUser = useSelector(store => store);

  return (
    <div className="form-container first">
      {loggedInUser.name ? <LogoutButton name={loggedInUser.name} /> : <LoginForm />}
    </div>
  );
};

export default LoginPage;
// would have to define functions here as well
// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
