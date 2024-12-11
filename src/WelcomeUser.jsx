import React from 'react'

const WelcomeUser = (props) => {

    const handleGreeting = ()=>{
        console.log("Hey Thanks for visit🙏🏻")
    }

  return (
    <>
      <button onClick={props.onClick}>Click Me</button>
      <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  )
}

export default WelcomeUser