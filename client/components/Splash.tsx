import { Link } from 'react-router-dom'

function Splash() {
  return (
    <>
      <Link to="/clock">
        <h1>Clock</h1>
      </Link>
      <Link to="/now">
        <h1>Now?</h1>
      </Link>
      <Link to="/wake">
        <h1>Wake at?</h1>
      </Link>
      <Link to="/sleep">
        <h1>Sleep at?</h1>
      </Link>
    </>
  )
}

export default Splash
