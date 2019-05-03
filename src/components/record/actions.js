import superagent from "superagent";

export const post = payload => dispatch => {
  console.log("POST", payload.url, payload.record);
  return superagent
    .post(payload.url)
    .send(payload.record)
    .then(data => {
      dispatch(run("POST", { model: payload.model, data: data.body }));
    })
    .catch(console.error);
};

export const get = payload => dispatch => {
  return superagent.get(payload.url).then(data => {
    dispatch(run("GET", { model: payload.model, data: data.body.results }));
  });
};

export const put = payload => dispatch => {
  return superagent
    .put(payload.url)
    .send(payload.record)
    .then(data => {
      dispatch(
        run("PUT", { model: payload.model, id: payload.id, data: data.body })
      );
    })
    .catch(console.error);
};

export const destroy = payload => dispatch => {
  console.log(payload.url);
  return superagent
    .delete(payload.url)
    .then(data => {
      console.log(data);
      dispatch(run("DELETE", { model: payload.model, id: payload.id }));
    })
    .catch(console.error);
};

const run = (method, payload) => {
  return {
    type: method,
    payload: payload
  };
};
