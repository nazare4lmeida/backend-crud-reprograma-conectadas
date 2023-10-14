const express = require("express");
const router = express.Router();
const bookController = require("../controllers/BookController");

//TODO: Criar rotas da aplicação
router.get("/", bookController.getBooks);

router.get("/:id", bookController.getBookById);

module.exports = router;
