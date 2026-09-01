import { Link } from "react-router-dom";

function Navbar() {
  return (
    /* Container para centralizar e fixar o Navbar no topo */
    <div className="sticky top-4 z-40 flex justify-center items-center w-full px-4">
      <header className="flex justify-between items-center h-16 w-full max-w-2xl px-6 rounded-full border border-outline-variant bg-clara-50/60 backdrop-blur-md shadow-sm">
        
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img 
            src="https://ik.imagekit.io/eosfuraqd/WHP3o.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain mt-2"
          />
        </Link>

        {/* Links de Navegação */}
        <nav className="hidden md:flex items-center gap-6 font-bold text-md text-on-surface-variant">
          <a href="#" className="hover:text-primary transition-colors">Produtos</a>
          <Link to="/categorias" className="hover:text-primary transition-colors">Categorias</Link>
        </nav>

      </header>
    </div>
  );
}

export default Navbar;