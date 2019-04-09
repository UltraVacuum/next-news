require("isomorphic-fetch");

const checkStatus = resp => {
  if (resp.status >= 200 && resp.status < 299) return resp;
  if (resp.status >= 300) throw new Error("failed response" + resp.status);
};

export const sRequest = (url, options) => {
  return fetch(url, options)
    .then(checkStatus)
    .then(resp => resp.json())
    .catch(err => {
      throw new Error(err);
    });
};
