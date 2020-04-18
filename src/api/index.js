const baseURL =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_DEV_BASE_URL
    : process.env.REACT_APP_PROD_BASE_URL;

const doAPIFetch = function (path, method, paylod) {
  const URL = baseURL + path;
  let promise;
  switch (method) {
    case 'POST':
      promise = fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paylod),
      });
      break;

    default:
      promise = fetch(URL);
      break;
  }
  return promise;
};

exports.getNotes = function () {
  return doAPIFetch('/notes');
};

exports.createNote = function (data) {
  return doAPIFetch(`${baseURL}/notes`, 'POST', data);
};

exports.getNote = function (path) {
  return doAPIFetch(path);
};
