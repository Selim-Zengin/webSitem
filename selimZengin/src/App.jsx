import "./App.css";

function App() {
  return (
    <>
<nav className="navbar" role="navigation" aria-label="main navigation" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, backgroundColor: "rgba(105, 117, 253, 0.9)",height:90 }}>
  <div className="navbar-brand">
    <a className="navbar-item" href="">
      <img
        src="https://bulma.io/images/bulma-logo.png"
        width="112"
        height="28"
      />
    </a>

    <a
      role="button"
      className="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start" style={{ marginLeft: "auto", marginRight: "auto" }}>
      <a className="navbar-item" style={{ fontSize: 35, color: "black",background:"none" }}>Anasayfa</a>
      <a className="navbar-item" style={{ fontSize: 35, color: "black",background:"none" }}>Hakkımda</a>
      <a className="navbar-item" style={{ fontSize: 35, color: "black",background:"none", }}>İletişim</a>
    </div>
  </div>
</nav>
      <div className="d-flex justify-content-center p-0">
        <img
          src="logo2.ico"
          className="img-fluid"
          alt="..."
          style={{marginTop:90, objectFit: "cover", height: "540px", width: "100%" }}
        />
      </div>

 
      <figure className="image is-128x128" style={{width:386,marginLeft:350,marginTop:1}}>
  <img className="is-rounded" src="fotograf.jpg"/>
</figure>

<p className="title is-1" style={{marginLeft:800,marginTop:-80}}>Selim Zengin</p>
<p className="title is-1" style={{marginLeft:800,marginTop:-20}}>Front-End Developer</p>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  );
}

export default App;
