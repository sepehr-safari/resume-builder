import { useCallback } from 'react';
import { useConfig } from '../../hooks';

export const ContactInfo = () => {
  const config = useConfig();

  const cleanLink = useCallback((link: string) => {
    return link.replace(/^https?:\/\//, '').replace(/^www\./, '');
  }, []);

  return (
    <div className="text-center">
      <h1>{config.contactInfo.name}</h1>

      <h2>{config.contactInfo.title}</h2>

      <a href={`mailto:${config.contactInfo.email}`}>{config.contactInfo.email}</a>

      {config.contactInfo.firstLink && (
        <>
          <span className="mx-1">•</span>
          <a href={config.contactInfo.firstLink}>{cleanLink(config.contactInfo.firstLink)}</a>
        </>
      )}

      {config.contactInfo.secondLink && (
        <>
          <span className="mx-1">•</span>
          <a href={config.contactInfo.secondLink}>{cleanLink(config.contactInfo.secondLink)}</a>
        </>
      )}
    </div>
  );
};
