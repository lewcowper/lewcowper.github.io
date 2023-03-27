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
            <div className="grid grid-cols-4 md:grid-cols-6 grid-rows-3 md:grid-rows-2 gap-4 px-4">
              {bookData.map((book) => {
                return (
                  <button onClick={() => setSelectedBook(book)}>
                    <Book key={book.id} book={book} />
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
