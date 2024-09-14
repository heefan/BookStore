import { getAllBooks } from "@/db/queries";
import { BookList } from "@/ui/books/BookList";
import { Book } from "@/common/Book.interface";

const BookListPage = async () => {
  const books: [Book] = await getAllBooks();

  console.log(books);

  return <BookList books={books} />;
};

export default BookListPage