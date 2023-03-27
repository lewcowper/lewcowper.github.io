import Image from 'next/image';
import Link from 'next/link';

import { MdOutlineOpenInNew } from 'react-icons/md';

const imagePath = '/assets/images/books/';

const SelectedBook = ({ book }) => {
  return (
    <div>
      <div>
        {book.subtitle ? book.title + ': ' + book.subtitle : book.title}
      </div>
      <div>{book.author}</div>
      <div className="w-32 md:w-48">
        <Image
          src={imagePath + book.cover + '.jpg'}
          alt={book.cover}
          width={180}
          height={270}
          quality={100}
        />
      </div>
      <div>
        <p>{book.note}</p>
      </div>
      <div>
        {'Publisher, image credit: '}
        <Link
          href={book.link}
          target="_blank"
          className="inline-flex items-center hover:underline"
        >
          <div className='pr-1'>{book.publisher}</div> <MdOutlineOpenInNew className="text-md" />
        </Link>
      </div>
    </div>
  );
};

export default SelectedBook;
