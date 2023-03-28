import Book from './Book';

const BookGrid = ({bookData, selectedBook, setSelectedBook}) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-lg md:max-w-4xl">
        <div className="grid grid-cols-4 md:grid-cols-3 grid-rows-3 md:grid-rows-4 md:gap-x-1 px-4">
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
  );
};

export default BookGrid;
