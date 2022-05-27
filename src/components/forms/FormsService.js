const sendForm = async (data, callback) =>
  fetch("/", {
    method: "POST",
    // headers: { "Content-Type": "application/x-www-form-urlencoded"},
    body: encode(data),
  })
    .then(() => console.log("form sent"))
    .then(callback)
    .catch((error) => alert(error));

// Utilities
const encode = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((k) => {
    formData.append(k, data[k]);
  });
  return formData;
};

export { sendForm };
