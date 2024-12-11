import React from 'react'
import './App.css'
import WelcomeUser from './WelcomeUser'

function App() {

  const handleWelcomeUser = (user)=>{
    alert(`Hey ${user}, How are you!`)
  }

  const handleHover = ()=>{
    alert(`Thanks for Hovering Me🙏🏻`)
  }

  return (
    <>
      <h1>Passing Event Handlers As Props</h1>
      <div className="card">
        <WelcomeUser
          onClick={()=> handleWelcomeUser("Raj")}
          onMouseEnter={handleHover}
        />
        <p>
          <br/>
          <br/>
          <hr />
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App