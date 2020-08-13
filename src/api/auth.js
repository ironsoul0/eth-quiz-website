import axios from "axios";

const loginCall = async (email, password) => {
  const result = await axios.post("/api/auth/login", {
    email,
    password,
  });

  const content = JSON.parse(result.data.tokens.replace(/'/g, '"'));

  if (content) {
    return {
      success: true,
      token: content.access,
      refresh: content.refresh,
    };
  }

  return {
    success: false,
  };
};

const registerCall = async (username, email, password) => {
  const result = await axios.post("/api/auth/register", {
    username,
    email,
    password,
  });

  if (result.status === 201) {
    return loginCall(email, password);
  }

  return {
    success: false,
  };
};

export { loginCall, registerCall };
