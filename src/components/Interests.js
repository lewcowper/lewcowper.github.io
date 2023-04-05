import { useState } from 'react';
import Reading from './Reading';

import bookData from '../../public/assets/data/books.json';
import Running from './Running';

const Interests = () => {
  const [showReading, setShowReading] = useState(true);
  const [selectedBook, setSelectedBook] = useState(bookData[0]);

  return (
    <div>
      <div className="flex justify-center text-neutral-700">
        <div className="grid grid-cols-2 max-w-5xl bg-neutral-100 rounded-lg my-4">
          <button
            className={
              showReading
                ? 'px-2 py-1 m-1 rounded-lg bg-white'
                : 'px-1 m-1 border-solid border-transparent hover:border-white border-4 rounded-lg bg-neutral-100'
            }
            onClick={() => setShowReading(true)}
          >
            <h3>Reading</h3>
          </button>
          <button
            className={
              !showReading
                ? 'px-2 py-1 m-1 rounded-lg bg-white'
                : 'px-1 m-1 border-solid border-transparent hover:border-white border-4 rounded-lg bg-neutral-100'
            }
            onClick={() => setShowReading(false)}
          >
            <h3>Running</h3>
          </button>
        </div>
      </div>
      {showReading && (
        <Reading
          bookData={bookData}
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
        />
      )}
      {!showReading && <Running />}
    </div>
  );
};

export default Interests;
