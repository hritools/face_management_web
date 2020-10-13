import { useState, useEffect } from "react";

// function api(method, params = {}) {
//   return fetch(`/api/${method}`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(params)
//   })
//     .then(response => response.json())
// }

function api(method, params = {}) {
  const mocks = {
    'photos.get': '/mocks/photos/get.json',
    'photos.getLatest': '/mocks/photos/getLatest.json',
    'photos.verifyAndSave': '/mocks/photos/verifyAndSave.json'
  };

  console.info(`[API] '${method}'`, params);
  return fetch(mocks[method], {
    method: 'GET',
  })
    .then(response => response.json())
}

export function useApi(method, params = {}, initialState = {}, inputs = []) {
  const [data, setData] = useState(initialState);

  async function getData() {
    const data = await api(method, params);
    setData(data);
  }

  useEffect(() => {
    getData()
      .then();
  }, inputs); // eslint-disable-line react-hooks/exhaustive-deps

  return data;
}

export function verifyAndSave(params) {
  console.info('[API] `verifyAndSave`', params);
}



