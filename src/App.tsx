import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-letra-700">
      <BrowserRouter>
        <Navbar />
        <main className="flex-1 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;