import { useEffect } from 'react';
import { useConfig } from './useConfig';

export const useDocumentTitle = () => {
  const config = useConfig();

  useEffect(() => {
    document.title = config.contactInfo.name + ' Resume';
  }, []);
};
