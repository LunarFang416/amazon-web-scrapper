const express = require("express");
const request = require("request-promise");
const asyncWrapper = require("../middleware/async");
const router = express.Router();
const {getTestProducts} = require("../controllers/controllers")

const apiKey = "09fce16c60f6dda3d33da6498220e6a5"
const baseURL = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;


// const generateScraperUrl = (apiKey) =>
//   `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

// GET product details
router.get(
  "/products/:productId",
  asyncWrapper(async (req, res) => {
    const { productId } = req.params;

    const response = await request(
      `${baseURL}&url=https://www.amazon.com/dp/${productId}`
    );

    res.json(JSON.parse(response));
  })
);

// GET product reviews
router.get(
  "/products/:productId/reviews",
  asyncWrapper(async (req, res) => {
    const { productId } = req.params;

    const response = await request(
      `${baseURL}&url=https://www.amazon.com/product-reviews/${productId}`
    );

    res.json(JSON.parse(response));
  })
);

// GET product offers
router.get(
  "/products/:productId/offers",
  asyncWrapper(async (req, res) => {
    const { productId } = req.params;

    const response = await request(
      `${baseURL}&url=https://www.amazon.com/gp/offer-listing/${productId}`
    );

    res.json(JSON.parse(response));
  })
);

// GET search results
router.get(
  "/search/:searchQuery",
  asyncWrapper(async (req, res) => {
    const { searchQuery } = req.params;

    const response = await request(
      `${baseURL}&url=https://www.amazon.com/s?k=${searchQuery}`
    );

    res.json(JSON.parse(response));
  })
);


// router.get("/testing/:productId", getTestProducts);

module.exports = router;
