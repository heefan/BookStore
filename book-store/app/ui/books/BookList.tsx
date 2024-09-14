
import {BookCard} from './BookCard';
import { Book } from '@/common/Book.interface';

interface BookListProps {
    books: Book[]; 
  }
  

export const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </>
  );
};
