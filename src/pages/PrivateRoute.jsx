import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, auth: { isAuthenticated } }) {
  if (!isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  return children;
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
