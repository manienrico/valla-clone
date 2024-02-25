import "./nav.component.css"

function Nav() {
  return (
    <nav>
        <span className="lnav">Valla</span>
        <div className="rnav">
            <div className="profile btn"><a href="#">Profile</a></div>
            <div className="signin btn"><a href="#">Sign In</a></div>
        </div>
    </nav>
  )
}

export default Nav