import { ContactInfo, Education, Skills, Summary, WorkExperience } from './components/sections';
import { useDocumentTitle } from './hooks';

function App() {
  useDocumentTitle();

  return (
    <div className="w-md mx-auto p-3">
      <ContactInfo />

      <Summary />

      <WorkExperience />

      <Education />

      <Skills />
    </div>
  );
}

export default App;
