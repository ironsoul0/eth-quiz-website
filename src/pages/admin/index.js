import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

function Admin() {
  const [authorized, setAuthorized] = useState(true);

  React.useEffect(() => {
    axios
      .get("/quiz/is-supervisor")
      .then((response) => {
        setAuthorized(response.data.is_supervisor);
      })
      .catch(() => setAuthorized(false));
  }, []);

  if (!authorized) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <p>Body</p>
    </div>
  );
}

export default Admin;
