import Image from 'next/image';
import Link from 'next/link';

import { MdOutlineOpenInNew } from 'react-icons/md';

const imagePath = '/assets/images/books/';

const SelectedBook = ({ book }) => {
  return (
    <div className="text-center p-4">
      <div>
        <div>
          <h2 className="font-light italic">
            {book.subtitle ? book.title + ': ' + book.subtitle : book.title}
          </h2>
        </div>
        <h3 className="font-light">
          <div>{book.author}</div>
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="w-40 md:w-48 p-4">
          <Image
            src={imagePath + book.cover + '.jpg'}
            alt={book.cover}
            width={178}
            height={270}
            quality={100}
          />
        </div>
      </div>
      {/* <div>
        <p>{book.note}</p>
      </div> */}
      <div>
        <div className='inline-flex flex-wrap justify-center'>
          <p>{'Publisher, image source: '}</p>
          <Link
            href={book.link}
            target="_blank"
            className="inline-flex items-center hover:underline"
          >
            <div className="px-1 font-light">{book.publisher}</div>
            <MdOutlineOpenInNew className="text-md" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectedBook;
