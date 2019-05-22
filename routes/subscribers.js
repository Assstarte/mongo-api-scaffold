const express = require("express");
const router = express.Router();
const SubscribersController = require("../controllers/Subscribers");

router.get("/", (req, res) => SubscribersController.getAll(req, res));
router.get("/:id", SubscribersController.getSubscriberMiddleware, (req, res) => SubscribersController.getOne(req, res));

router.post("/", (req, res) => SubscribersController.create(req, res));

router.patch("/:id", (req, res) => SubscribersController.update(req, res));

router.delete("/:id", (req, res) => SubscribersController.delete(req, res));

module.exports = router;