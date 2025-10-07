import React from "react";

// HOC
function withLogger(WrappedComponent) {
  return function(props) {
    console.log("Props:", props);
    return <WrappedComponent {...props} />;
  };
}

function Button({ label }) {
  return <button>{label}</button>;
}

export default withLogger(Button);
