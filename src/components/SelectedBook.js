import Image from 'next/image';
import Link from 'next/link';

const imagePath = '/assets/images/books/';

const SelectedBook = ({ book }) => {
  return (
    <div>
      <div>
        {book.subtitle ? book.title + ': ' + book.subtitle : book.title}
      </div>
      <div>{book.author}</div>
      <div className='w-32 md:w-48'>
        <Link href={book.link} target="_blank">
          <Image
            src={imagePath + book.cover + '.jpg'}
            alt={book.cover}
            width={180}
            height={270}
            quality={100}
          />
        </Link>
      </div>
      <div>
        <p>{book.note}</p>
      </div>
    </div>
  );
};

export default SelectedBook;
