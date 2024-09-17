import invitation from '/invite-marriege.pdf'
function App() {

  return (
    <iframe style={{
      width: '100vw',
      height: '100vh',
      margin: '-10px',
    }} src={invitation}></iframe>
  )
}

export default App
