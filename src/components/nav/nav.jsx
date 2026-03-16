const Navbar = () => {
  
return (
    <nav className="navbar" >
        <div className="nav-container">
            <div className="logo">
                <a href="https://melcanz08.github.io/chaincss_react_website/" >Chaincss</a>
            </div>
            <div className="nav-links">
                <a href="#features">Features</a>
                <a target="_blank" href="https://github.com/melcanz08/chaincss#readme">Docs</a>
                <a href="#examples">Examples</a>
                <a href="">API</a>
                <a target="_blank" href="https://www.npmjs.com/package/@melcanz85/chaincss" className="npm-badge" >📦 npm</a>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
