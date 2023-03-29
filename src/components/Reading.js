import SelectedBook from './SelectedBook';
import BookGrid from './BookGrid';

const Reading = ({bookData, selectedBook, setSelectedBook}) => {
  return (
    <div className="flex justify-center text-neutral-700">
      <div className="flex flex-wrap md:flex-nowrap justify-center max-w-5xl">
        <div className="md:basis-1/2 grow">
          <SelectedBook book={selectedBook} />
        </div>
        <div className="md:basis-1/2 md:max-w-fit">
          <BookGrid
            bookData={bookData}
            selectedBook={selectedBook}
            setSelectedBook={setSelectedBook}
          />
        </div>
      </div>
    </div>
  )
}

export default Reading
