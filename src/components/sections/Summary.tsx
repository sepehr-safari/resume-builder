import { useConfig } from '../../hooks';
import { SectionWrapper } from '../shared';

export const Summary = () => {
  const config = useConfig();

  return (
    <SectionWrapper title="Summary">
      <p>{config.summary}</p>
    </SectionWrapper>
  );
};
