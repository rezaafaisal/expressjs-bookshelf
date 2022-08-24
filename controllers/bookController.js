import Book from "../models/Book.js";

export const getBooks = async(req, res) =>{
    try {
        const Books = await Book.find()
        res.status(200).json(Books);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

export const getBook = async(req, res) =>{
    try {
        const books = await Book.findById(req.params.id)
        res.status(200).json(books);
    } catch (error) {
        res.status(400).json({
            message: "Data tidak ditemukan"
        });
    }
}

export const saveBook = async(req, res) => {
    // res.send(req.body);
    const book = new Book(req.body);
    try {
        const savedBook = await book.save();
        res.status(200).json(savedBook)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const updateBook = async(req, res) => {
    try {
        const updatedBook = await Book.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedBook)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteBook = async(req, res) => {
    try {
        const deletedBook = await Book.deleteOne({_id: req.params.id});
        res.status(200).json(deletedBook)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
