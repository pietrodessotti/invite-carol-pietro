import invitation from '/invite-marriege.pdf'
function App() {

  return (
    <>
    'invitation' is a pdf file that is imported in the src folder
    <iframe style={{
      width: '100vw',
      height: '100vh',
      margin: '-10px',
    }} src={invitation}></iframe>
    
    </>
  )
}

export default App
