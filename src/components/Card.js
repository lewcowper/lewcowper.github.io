const Card = ({ card }) => {
  return (
    <div className="bg-gray-100 rounded-lg w-fit">
      <div className='px-4 py-2'>
        <h1 className="">{card.title}</h1>
        <ul className="list-disc pl-4">
          {card.bullets.map((bullet) => {
            return <li>{bullet}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
