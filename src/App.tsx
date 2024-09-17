import { useState, useRef, useEffect } from "react";
import * as S from "./styles";
import pageOne from "/invite-page1.jpg";
import pageTwo from "/invite-page2.jpg";
import pageThree from "/invite-page3.jpg";
import openInvite from "/open-invite.png";

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
    window.location.href = "https://www.pietroecaroline.com.br/";
  }

  return (
    <>
      <S.PageContainer>
        <S.PageImage src={pageOne} />
        <S.ButtonInImage onClick={scrollToPageTwo} />

        {viewPage === 2 && (<S.PageImage openInvite src={openInvite} />)}
      </S.PageContainer>

      {viewPage === 2 && (
        <div ref={pageTwoRef}>
          <S.PageImage src={pageTwo} />

          <S.PageContainer>
            <S.PageImage src={pageThree} />
            <S.ButtonInImage isConfirmation onClick={onRedirectToSite} />
          </S.PageContainer>
        </div>
      )}
    </>
  );
}

export default App;
