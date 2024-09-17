import { useState, useRef, useEffect } from "react";
import * as S from "./styles";
import pageOne from "/invite-page1.jpg";
import pageTwo from "/invite-page2.jpg";
import pageThree from "/invite-page3.jpg";

function App() {
  const [viewPage, setViewPage] = useState(1);
  const pageTwoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (viewPage === 2 && pageTwoRef.current) {
      pageTwoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [viewPage]);

  function scrollToPageTwo() {
    setViewPage(2);
  }

  function onRedirectToSite() {
    window.location.href = "https://google.com";
  }

  return (
    <>
      <S.PageContainer>
        <S.PageImage src={pageOne} />
        <S.ButtonInImage onClick={scrollToPageTwo} />
      </S.PageContainer>

      {viewPage === 2 && (
        <>
          <S.PageImage ref={pageTwoRef} src={pageTwo} />

          <S.PageContainer>
            <S.PageImage src={pageThree} />
            <S.ButtonInImage isConfirmation onClick={onRedirectToSite} />
          </S.PageContainer>
        </>
      )}
    </>
  );
}

export default App;
