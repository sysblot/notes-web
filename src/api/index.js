const baseURL = process.env.NODE_ENV === "development" ?process.env.REACT_APP_DEV_BASE_URL : process.env.REACT_APP_PROD_BASE_URL;

exports.getNotes = function () {
   return fetch(`${baseURL}/notes`);
}