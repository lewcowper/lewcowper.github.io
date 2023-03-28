import SelectedBook from './SelectedBook';

import { useState } from 'react';

import bookData from '../../public/assets/data/books.json';
import BookGrid from './BookGrid';

const Interests = () => {
  const [selectedBook, setSelectedBook] = useState(bookData[0]);

  return (
    <div className="flex justify-center text-neutral-700">
      <div className="flex flex-wrap md:flex-nowrap justify-center max-w-5xl">
        <div className="md:basis-1/2">
          <SelectedBook book={selectedBook} />
        </div>
        <div className="md:basis-1/2 md:max-w-md">
          <BookGrid
            bookData={bookData}
            selectedBook={selectedBook}
            setSelectedBook={setSelectedBook}
          />
        </div>
      </div>
    </div>
  );
};

export default Interests;
