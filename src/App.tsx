import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-letra-700">
      
      <Navbar />
      <main className="flex-1 pb-12">
        <Home />
      </main>
      <Footer />
      
    </div>
  );
}

export default App;