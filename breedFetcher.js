const request = require("request");

const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=&{breedName}`;

// request takes 2 parameters(url, callback)
request(url, (error, response, body) => {
  // body is the what returned from request
  // why need to assign it to data? can we ressign as body? any side effects??
  const data = JSON.parse(body);
  if (error) {
    // why need return here?
    return "Error", error;
  }

  // data[0]?? it only return one obj
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  }
});
