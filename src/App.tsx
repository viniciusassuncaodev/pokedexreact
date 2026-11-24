import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Detalhe from "./pages/Detalhe.tsx";
import Explorar from "./pages/Explorar.tsx";
import Favoritos from "./pages/Favoritos.tsx";
import Home from "./pages/Home.tsx";
import Sobre from "./pages/Sobre.tsx";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/pokemon/:id" element={<Detalhe />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
