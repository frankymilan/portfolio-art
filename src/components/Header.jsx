import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const scrollToGallery = (e) => {
    e.preventDefault();
    // Si on n'est pas sur la page d'accueil, y aller d'abord
    if (window.location.pathname !== '/') {
      navigate('/');
      // Attendre que la page charge puis scroller
      setTimeout(() => {
        const gallery = document.getElementById('gallery');
        if (gallery) {
          gallery.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si déjà sur la page d'accueil, juste scroller
      const gallery = document.getElementById('gallery');
      if (gallery) {
        gallery.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToHome = (e) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-blur">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-2xl font-bold">
            <span className="text-gradient">Franky</span> Art
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><a href="#home" onClick={scrollToHome} className="hover:text-primary transition-colors">Accueil</a></li>
            <li><a href="#gallery" onClick={scrollToGallery} className="hover:text-primary transition-colors">Galerie</a></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">À propos</Link></li>
            <li><Link to="/contact" className="btn btn-primary btn-sm">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;