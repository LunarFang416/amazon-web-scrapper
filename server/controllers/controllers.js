// // Create new way of scrapping amazon data, to increase overall performance
// const request = require("request-promise");
// const asyncWrapper = require("../middleware/async");
// const cheerio = require("cheerio")


// const getTestProducts = asyncWrapper(async (req, res) => {
//   const { productId } = req.params;

//   request(`https://www.amazon.com/dp/${productId}`)
//     .then(async (html) => {
//       const result = await request.get(
//        "https://www.amazon.com/dp/B0843ZL15Z"
//       );
//       const $ = cheerio.load(result);

//       console.log($("#productTitle"));
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send("failure");
//     });
// });



// module.exports = {getTestProducts}