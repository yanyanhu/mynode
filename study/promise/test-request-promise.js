var request = require("request-promise");

var promise = request("http://www.google.com/123");

promise.then(
  function(response) {
    console.log("Succeeded");
    console.log(response.body);
  },
  function(error) {
    console.log("There has been an error in the request: ", error);
  }
);
