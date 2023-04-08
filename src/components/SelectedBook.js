import Image from 'next/image';
import Link from 'next/link';

import { MdOutlineOpenInNew } from 'react-icons/md';

const imagePath = '/assets/images/books/';

const SelectedBook = ({ book }) => {
  return (
    <div className="">
      <div className="text-center">
        <div className="px-4 pt-4 md:pt-0">
          <h2 className="font-light italic">
            {book.subtitle ? book.title + ': ' + book.subtitle : book.title}
          </h2>
          <h3 className="font-light">
            <div>{book.author}</div>
          </h3>
        </div>
        <div className="flex justify-center">
          <div className="w-48 m-4">
            <Image
              src={imagePath + book.cover + '.jpg'}
              alt={book.cover}
              width={356}
              height={540}
              quality={100}
              priority={true}
            />
          </div>
        </div>
        <div>
          <div className="inline-flex flex-wrap justify-center px-4">
            <p>{'Image credit: '}</p>
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
      <div className="rounded-lg w-fit bg-neutral-100 m-4">
        <div className="px-4 py-2">
          <h3>Overview</h3>
          <p className='text-justify'>{book.note.replaceAll('--', '\u2014')}</p>
        </div>
      </div>
    </div>
  );
};

export default SelectedBook;
