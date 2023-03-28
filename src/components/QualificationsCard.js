const QualificationsCard = ({ card }) => {
  let id = 0;

  return (
    <div className="bg-gray-100 rounded-lg w-fit">
      <div className='px-4 py-2'>
        <h3 className='text-center'>{card.title}</h3>
        <ul className="list-disc pl-4">
          {card.bullets.map((bullet) => {
            return <li key={id++}>{bullet}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default QualificationsCard;
