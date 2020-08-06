let server = "http://localhost:3000";

if (process.env.NODE_ENV === "production") {
  server = "https://eth-quiz.app";
}

export default {
  server,
};
