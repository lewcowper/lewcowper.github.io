import Image from 'next/image';
import Link from 'next/link';

import { MdOutlineOpenInNew } from 'react-icons/md';

const imagePath = '/assets/images/books/';

const SelectedBook = ({ book }) => {
  return (
    <div className="text-center p-4">
      <div>
        <div>
          <h2 className="font-bold">
            {book.subtitle ? book.title + ': ' + book.subtitle : book.title}
          </h2>
        </div>
        <h3>
          <div>{book.author}</div>
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="w-40 md:w-48 p-4">
          <Image
            src={imagePath + book.cover + '.jpg'}
            alt={book.cover}
            width={180}
            height={270}
            quality={100}
          />
        </div>
      </div>
      {/* <div>
        <p>{book.note}</p>
      </div> */}
      <div>
        <p>
          {'Publisher, image source: '}
          <Link
            href={book.link}
            target="_blank"
            className="inline-flex items-center hover:underline"
          >
            <div className="pr-1">{book.publisher}</div>{' '}
            <MdOutlineOpenInNew className="text-md" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SelectedBook;
