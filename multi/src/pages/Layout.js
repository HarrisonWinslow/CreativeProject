import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"><img src="dragon.png" style={{width: '25px', height: '25px'}}/></Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/wowDragons">WoW Dragons</Link>
          </li>
          <li>
            <Link to="/dndDragons">DnD Dragons</Link>
          </li>
          <li>
            <Link to="/runeterraDragons">Runeterra Dragons</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      
      <footer className="text-center text-lg-start bg-dark" id="Footer">
        <div className="container d-flex justify-content-center py-5">
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-4" style={{backgroundColor: '#54456b', padding: '0px', border: '0px'}}>
            <img className="tiny-img" src="facebook.png" />
          </button>
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-4" style={{backgroundColor: '#54456b', padding: '0px', border: '0px'}}>
            <img className="tiny-img" src="twitter.png" />
          </button>
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-4" style={{backgroundColor: '#54456b', padding: '0px', border: '0px'}}>
            <img className="tiny-img" src="youtube.png" />
          </button>
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-4" style={{backgroundColor: '#54456b', padding: '0px', border: '0px'}}>
            <img className="tiny-img" src="whatsapp.png" />
          </button>
        </div>
        <div className="text-center text-white p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          Site made by Harrison Winslow and Joseph Paulson
        </div>
      </footer>
    </>
  )
};

export default Layout;