import { useConfig } from '../../hooks';
import { SectionWrapper } from '../shared';

export const Education = () => {
  const config = useConfig();

  return (
    <SectionWrapper title="Education">
      <ul className="ml-2">
        {config.education.map((education, i) => (
          <li key={education.school} className={i % 2 ? `mt-1` : `mt-half`}>
            <div className="flex">
              <h3>
                {education.school} - {education.location}
              </h3>
              <span className="ml-auto text-muted">{education.date}</span>
            </div>
            <h4>
              {education.degree}, {education.major}
            </h4>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};
