import "./App.css";

function App() {
  return (
    <>
      <nav
        className="navbar navbar-expand-md"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          backgroundColor: "rgba(105, 117, 253, 0.9)",
          height: 90,
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <img
              src="fotograf.jpg"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top "
            />
          </a>
          <div className="ml-auto">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div></div>
            <ul className="navbar-nav ">
              <li className="nav-item  ml-auto">
                <a className="nav-link mx-3" href="#" style={{}}>
                  Anasayfa
                </a>
              </li>
              <li className="nav-item  ml-auto">
                <a className="nav-link mx-3" href="#" style={{}}>
                  Hakkımda
                </a>
              </li>
              <li className="nav-item  ml-auto">
                <a className="nav-link mx-3" href="#" style={{}}>
                  İletişim
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-center p-0">
        <img
          src="logo2.ico"
          className="img-fluid"
          alt="..."
          style={{
            marginTop: 90,
            objectFit: "cover",
            height: "540px",
            width: "100%",
          }}
        />
      </div>

      <br />

      <div
        className="aaa card mb-3 col-md-2 offset-md-2"
        style={{ width: 1040, border: "none", boxShadow: "none" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="fotograf.jpg"
              className="resim img-fluid rounded-circle"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <br />

              <h1 className="yazi card-title" style={{ marginLeft: 15 }}>
                SELİM ZENGİN
              </h1>
              <h1 className="yazi card-title" style={{ marginLeft: 15 }}>
                Front-End Developer
              </h1>
            </div>
          </div>
        </div>
      </div>
      <br />

      <hr />
      <br />
      <br />

      <div className="card container" style={{ width: "68rem" }}>
        <div className="card-body">
          <h1 className="card-title">Hakkımda</h1>
          <p className="card-text" style={{ fontSize: 20 }}>
            2000 yılında İstanbul/Sultangazi'de doğdum ilkokul eğitimimi
            Orhangazi İlkokulunda aldım, ortaokul eğitimimide Orhangazi
            Ortaokulunda tamamladım, lise eğitimimide Bayrampaşa Özel Okulunda
            tamaladım. Çocukluğumdan beri bilgisayarlarla ilgilendim ilk
            bilgisayarla 7 yaşında tanıştım o zamandan beri bilgisayarlar özel
            ilgi alanım oldu, liseden beri hep yazılıma merakım vardı bu yüzden
            yazılım ile ilgili bir bölüm okumak istedim ve liseyi bitirdikten
            sonra Burdur Memhmet Akif Ersoy Üniversitesinde Bilgisayar
            Programcılığı bölümünü okudum 2023 yılında mezun oldum. Hakkımda
            detaylı bilgi için Cv'mi inceleyebilirsiniz
          </p>
          <a href="#" className="btn btn-primary">
            CV'mi İndirmek İçin Tıklayın
          </a>
        </div>
      </div>
      <br />
      <br />
      
      <div className="card text-center">
        <div className="card-body">
          <h1 style={{ fontSize: 50 }}>Hobilerim</h1>
        </div>
      </div>
      <div className="container text-center ">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 m-5">
          <div className="col">
            <div className="card" style={{width:450}}>
            <h5 className="card-title">Video Oyunları</h5>
              <img src="hobiOyun.jpg" className="card-img-top rounded-circle" alt="..."style={{height:280}} />
              <div className="card-body">     
              </div>
            </div>
          </div>
          <div className="col"> <div className="col">
            <div className="card" style={{width:450}}>
            <h5 className="card-title">Şarkı Dinlemek</h5>
              <img src="hobiSarki.jpg" className="card-img-top rounded-circle" alt="..." style={{height:280}}/>
              <div className="card-body">     
              </div>
            </div>
          </div></div>
          <div className="col"> <div className="col">
            <div className="card" style={{width:450}}>
            <h5 className="card-title">Yürüyüş Yapmak</h5>
              <img src="hobiYuruyus.jpg" className="card-img-top rounded-circle" alt="..." style={{height:280}}/>
              <div className="card-body">     
              </div>
            </div>
          </div></div>
          <div className=" col"> <div className="col">
            <div className="film card" style={{width:450}}>
            <h5 className=" card-title">Film & Dizi İzlemek</h5>
              <img src="hobiFilm.jpg" className=" card-img-top rounded-circle" alt="..." style={{height:280}}/>
              <div className="card-body">     
              </div>
            </div>
          </div></div>
        </div>
      </div>
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
