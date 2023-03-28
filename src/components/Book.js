import Image from 'next/image';

const imagePath = '/assets/images/books/';

const Book = ({ book, selectedBook }) => {
  return (
    <div
      className={
        selectedBook.id === book.id
          ? 'border-4 border-neutral-700 grayscale'
          : 'hover:border-4 border-transparent m-1 hover:border-neutral-700'
      }
    >
      <Image
        src={imagePath + book.cover + '.jpg'}
        alt={book.cover}
        width={356}
        height={540}
        quality={100}
        priority={true}
      />
    </div>
  );
};

export default Book;
