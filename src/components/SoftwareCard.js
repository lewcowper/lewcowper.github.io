const SoftwareCard = ({ card }) => {
  return (
    <div className="bg-gray-100 rounded-lg w-fit">
      <div className="px-4 py-2">
        <h3 className="text-center">{card.title}</h3>
        <ul className="list-disc pl-4 columns-2 md:columns-1 lg:columns-2 gap-8">
          {card.bullets.map((bullet) => {
            return <li>{bullet}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareCard;
