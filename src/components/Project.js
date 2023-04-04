const Project = ({ title, langIcons, libFraIcons }) => {
  return (
    <div>
      {title}
      <div className="flex text-3xl gap-2">
        {langIcons.map((icon) => {
          return <div>{icon}</div>;
        })}
      </div>
      <div className="flex text-3xl gap-2">
        {libFraIcons.map((icon) => {
          return <div>{icon}</div>;
        })}
      </div>
    </div>
  );
};

export default Project;
