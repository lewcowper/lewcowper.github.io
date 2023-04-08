import SelectedBook from './SelectedBook';
import BookGrid from './BookGrid';

const Reading = ({ bookData, selectedBook, setSelectedBook }) => {
  return (
    <>
      <div className="flex justify-center text-neutral-700">
        <div className="flex flex-wrap md:flex-nowrap justify-center max-w-5xl">
          <p className="px-4 text-justify">
            I enjoy popular history books about periods of
            significant social, political and technological change, and detailed
            biographies about individuals involved in such change. I also enjoy
            popular science, business books and interesting memoirs. Here are
            some of my favourites.
          </p>
        </div>
      </div>
      <div className="flex justify-center text-neutral-700 my-4">
        <div className="flex flex-wrap md:flex-nowrap justify-center max-w-5xl">
          <div className="md:basis-1/2 md:max-w-fit">
            <BookGrid
              bookData={bookData}
              selectedBook={selectedBook}
              setSelectedBook={setSelectedBook}
            />
          </div>
          <div className="md:basis-1/2 grow">
            <SelectedBook book={selectedBook} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reading;
