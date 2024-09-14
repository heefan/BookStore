import { bookModel } from '@/models/book.model'
import { replaceMongoIdInArray, replaceMongoIdInObject } from '@/utils/data.utils'
import { Book } from '@/common/Book.interface'


async function getAllBooks() {
    const books = await bookModel.find().lean<Book>()
    return replaceMongoIdInArray(books)
}

async function getBookById(id) {
    const book = await bookModel.findById(id).lean()
    return replaceMongoIdInObject(book)
}

export {
    getAllBooks,
    getBookById
}
