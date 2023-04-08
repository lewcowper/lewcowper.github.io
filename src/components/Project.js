import { useState } from 'react';

const Project = ({ projectData, langIcons, libFraIcons }) => {
  const [isShowingMore, setIsShowingMore] = useState(false);

  let id = 0;

  return (
    <div className="py-2 px-4 bg-neutral-100 rounded-lg">
      <h3>{projectData.title}</h3>
      <p className="text-justify">{projectData.description}</p>
      {isShowingMore && <hr class="h-px my-2 bg-neutral-700 border-0"></hr>}
      <div>
        {isShowingMore && (
          <ul className="list-disc pl-4 text-justify">
            {projectData.details.map((detail) => {
              return <li className="pb-2">{detail}</li>;
            })}
          </ul>
        )}
      </div>
      {isShowingMore && projectData.languages.length > 0 && (
        <p className="text-justify">
          Languages: {projectData.languages.join(', ')}
        </p>
      )}
      {isShowingMore && projectData.frameworksLibraries.length > 0 && (
        <p className="text-justify">
          Frameworks/Libraries: {projectData.frameworksLibraries.join(', ')}
        </p>
      )}
      {isShowingMore && <hr class="h-px my-2 bg-neutral-700 border-0"></hr>}
      <div className="flex justify-between p-2">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <div className="flex text-3xl gap-2">
            {langIcons.map((icon) => {
              return <div key={id++}>{icon}</div>;
            })}
          </div>
          <div className="flex text-3xl gap-2">
            {libFraIcons.map((icon) => {
              return <div key={id++}>{icon}</div>;
            })}
          </div>
        </div>
        <button
          className="font-medium"
          onClick={() => setIsShowingMore(!isShowingMore)}
        >
          {isShowingMore ? 'Show less' : 'Show more'}
        </button>
      </div>
    </div>
  );
};

export default Project;
