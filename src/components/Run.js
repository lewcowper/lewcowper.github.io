import Image from 'next/image';

const imagePath = '/assets/images/runs/';

const Run = ({ run }) => {
  return (
    <div className="flex justify-center items-end text-transparent hover:text-white relative">
      <div className="absolute whitespace-normal text-center w-full text-lg md:text-2xl px-0.5 py-2 font-medium">{run.name}</div>
      <Image
        src={imagePath + run.file + '.jpg'}
        alt={run.file}
        // priority={true}
        width={540}
        height={540}
        quality={100}
      />
    </div>
  );
};

export default Run;
