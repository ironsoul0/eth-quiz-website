// import config from '../config';

const loginCall = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        token: "carousel",
      });
    }, 1500);
  });
};

const registerCall = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
      });
    }, 1500);
  });
};

export { loginCall, registerCall };
