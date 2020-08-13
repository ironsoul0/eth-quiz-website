export default (axios) => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      return new Promise((resolve, reject) => {
        const originalReq = err.config;
        if (
          err.response.status === 401 &&
          err.config &&
          !err.config.__isRetryRequest
        ) {
          originalReq._retry = true;

          let res = fetch(`${axios.defaults.baseURL}/api/auth/token/refresh`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify({
              refresh: localStorage.getItem("refresh"),
            }),
          })
            .then((res) => res.json())
            .then((res) => {
              localStorage.setItem("token", res.access);

              axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${res.access}`;

              return axios(originalReq);
            })
            .catch(() => {
              localStorage.removeItem("token");
              window.location.reload();
            });

          resolve(res);
        }

        return reject(err);
      });
    }
  );
};
