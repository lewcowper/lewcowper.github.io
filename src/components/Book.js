import Image from 'next/image';

const imagePath = '/assets/images/books/';

const Book = ({ book }) => {
  return (
    <Image
      src={imagePath + book.cover + '.jpg'}
      alt={book.cover}
      width={180}
      height={270}
      quality={100}
    />
  );
};

export default Book;
