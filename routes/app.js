import express, { Router } from "express";
import {deleteBook, getBook, getBooks, saveBook, updateBook} from "../controllers/bookController.js";
const route = express.Router();

route.get('/', getBooks);
route.get('/:id', getBook);
route.put('/:id', updateBook);
route.delete('/:id', deleteBook);

export default route;