import { useConfig } from '../../hooks';
import { SectionWrapper } from '../shared';

export const Skills = () => {
  const config = useConfig();

  return (
    <SectionWrapper title="Skills">
      {config.skills.map((skill) => (
        <p className="inline-block">
          <span className="mx-1">•</span>
          <span>{skill}</span>
        </p>
      ))}
    </SectionWrapper>
  );
};
