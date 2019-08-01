const request = require("request");
// const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  // request takes 2 parameters(url, callback)
  request(url, (error, response, body) => {
    // body is the what returned from request
    // why need to assign it to data? can we ressign as body? any side effects??
    if (error) {
      callback(error, null);
      return;
    }
    let data = JSON.parse(body)[0];

    if (data) {
      callback(null, data.description.trim());
    } else {
      callback("error", null);
    }
  });
};

module.exports = { fetchBreedDescription };
