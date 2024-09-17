import { useState } from 'react';
import { PageOne, PageOneContainer, PageOneContent, PageTwo } from './styles';
import pageOne from '/invite-page1.jpg';
import pageTwo from '/invite-page2.jpg';

function App() {
  const [viewPage, setViewPage] = useState(1);

  return (
    <>
    <PageOneContainer>
      <PageOne src={pageOne} />
      <PageOneContent onClick={() => setViewPage(2)}/>
    </PageOneContainer>

    {viewPage === 2 && (
      <PageTwo src={pageTwo} />
    )}
    </>
  )
}

export default App
