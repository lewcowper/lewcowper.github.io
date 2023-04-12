const SoftwareCard = ({ card }) => {
  let id = 0;

  return (
    <div className="rounded-lg w-fit bg-neutral-100">
      <div className="px-4 py-2">
        <h2 className="text-center">{card.title}</h2>
        <ul className="list-disc pl-4 columns-2 md:columns-1 lg:columns-2 gap-8">
          {card.bullets.map((bullet) => {
            return <li key={id++}>{bullet}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareCard;
