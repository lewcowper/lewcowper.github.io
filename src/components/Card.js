const Card = ({ card }) => {
  return (
    <div>
      <h1>{card.title}</h1>
      <ul>
        {card.bullets.map((bullet) => {
          return (
            <li>{bullet}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
