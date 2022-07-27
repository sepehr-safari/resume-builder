import { useConfig } from '../../hooks';
import { SectionWrapper } from '../shared';

export const WorkExperience = () => {
  const config = useConfig();

  return (
    <SectionWrapper title="Work Experience">
      <ul className="ml-2">
        {config.workExperience.map((workExperience, i) => (
          <li key={workExperience.company} className={i % 2 ? `mt-1` : `mt-half`}>
            <div className="flex">
              <h3>
                {workExperience.company} - {workExperience.location}
              </h3>
              <span className="ml-auto text-muted">{workExperience.date}</span>
            </div>
            <h4>{workExperience.title}</h4>
            <p>{workExperience.description}</p>
            <ul className="ml-3">
              {workExperience.bulletPoints.map((bulletPoint) => (
                <li key={bulletPoint}>{bulletPoint}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};
