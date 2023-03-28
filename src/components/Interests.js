import Book from './Book';
import SelectedBook from './SelectedBook';

import { useState } from 'react';

import bookData from '../../public/assets/data/books.json';

const Interests = () => {
  const [selectedBook, setSelectedBook] = useState(bookData[0]);

  return (
    <div className="flex justify-center">
      <div className="max-w-5xl">
        <SelectedBook book={selectedBook} />
        <div className="flex justify-center">
          <div className="max-w-lg md:max-w-4xl">
            <div className="grid grid-cols-4 md:grid-cols-6 grid-rows-3 md:grid-rows-2 gap-x-2 md:gap-x-4 gap-y-1 md:gap-y-2 px-4">
              {bookData.map((book) => {
                return (
                  <button onClick={() => setSelectedBook(book)} key={book.id}>
                    <Book book={book} selectedBook={selectedBook} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
