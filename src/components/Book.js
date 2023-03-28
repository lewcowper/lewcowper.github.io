import Image from 'next/image';

const imagePath = '/assets/images/books/';

const Book = ({ book, selectedBook }) => {
  return (
    <div className={selectedBook.id === book.id ? 'border-4 border-indigo-500' : 'border-y-4 border-transparent hover:border-b-indigo-500 m-1'}>
      <Image
        src={imagePath + book.cover + '.jpg'}
        alt={book.cover}
        width={356}
        height={540}
        quality={100}
      />
    </div>
  );
};

export default Book;
