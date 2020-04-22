const baseURL = 'https://blotnotes-api-staging.herokuapp.com';

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

    case 'PATCH':
      promise = fetch(URL, {
        method: 'PATCH',
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
  return doAPIFetch('/notes', 'POST', data);
};

exports.getNote = function (path) {
  return doAPIFetch(path);
};

exports.saveNote = function (id, payload) {
  return doAPIFetch(`/notes/${id}`, 'PATCH', payload);
};
