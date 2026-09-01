import { ShoppingCartIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
    <div className="sticky top-4 z-40 flex justify-center items-center w-full px-4">
      <header className="flex justify-between items-center h-16 w-full max-w-2xl px-6 rounded-full border border-transparent bg-clara-50/80 backdrop-blur-md shadow-sm">
        
       
        <Link to="/" className="flex items-center shrink-0">
          <img 
            src="https://ik.imagekit.io/eosfuraqd/WHP3o.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain mt-2"
          />
        </Link>

        
        <nav className="hidden md:flex items-center gap-8 font-bold text-md text-black">
          <a href="#" className="hover:underline transition-colors">Produtos</a>
          <Link to="/categorias" className="hover:underline transition-colors">Categorias</Link>

          <ShoppingCartIcon size={28} weight="regular"/>
        </nav>

      </header>
    </div>
  );
}

export default Navbar;