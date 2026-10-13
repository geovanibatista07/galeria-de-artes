import { useState, useEffect } from "react";
import { initialArtworks, artistsList } from "./data/artworks";
import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { ArtworkCard } from "./components/artworkcard";
import { ImageModal } from "./components/imagemodal";
import { ArtistModal } from "./components/ArtistModal";
import { Footer } from "./components/footer";

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState(null); // Estado para o modal do artista
  const [viewMode, setViewMode] = useState('all');
  
  const [selectedMuseum, setSelectedMuseum] = useState('all');
  const [selectedCentury, setSelectedCentury] = useState('all');

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('galeria_favoritos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('galeria_favoritos', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const museums = ["all", ...new Set(initialArtworks.map(art => art.museum).filter(Boolean))];
  const centuries = ["all", ...new Set(initialArtworks.map(art => art.century).filter(Boolean))];

  const filteredArtworks = initialArtworks.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = viewMode === 'favorites' ? favorites.includes(art.id) : true;
    const matchesMuseum = selectedMuseum === 'all' || art.museum === selectedMuseum;
    const matchesCentury = selectedCentury === 'all' || art.century === selectedCentury;

    return matchesSearch && matchesTab && matchesMuseum && matchesCentury;
  });

  return (
    <div>
      <Navbar artists={artistsList} />
      
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        viewMode={viewMode}
        setViewMode={setViewMode}
        favCount={favorites.length}
      />

      <main className="container py-4">
        {/* BARRA DE FILTROS */}
        <div className="row g-3 mb-4 p-3 rounded bg-dark border border-secondary">
          <div className="col-md-6">
            <label className="form-label text-warning small mb-1 fw-bold">Filtrar por Museu / Local:</label>
            <select
              className="form-select bg-dark text-light border-secondary"
              value={selectedMuseum}
              onChange={(e) => setSelectedMuseum(e.target.value)}
            >
              <option value="all">📍 Todos os Museus</option>
              {museums.filter(m => m !== "all").map((museum, index) => (
                <option key={index} value={museum}>{museum}</option>
              ))}
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label text-warning small mb-1 fw-bold">Filtrar por Época / Século:</label>
            <select
              className="form-select bg-dark text-light border-secondary"
              value={selectedCentury}
              onChange={(e) => setSelectedCentury(e.target.value)}
            >
              <option value="all">⏳ Todas as Épocas</option>
              {centuries.filter(c => c !== "all").map((century, index) => (
                <option key={index} value={century}>{century}</option>
              ))}
            </select>
          </div>
        </div>

        {/* LISTAGEM DAS OBRAS E BOTÃO BIOGRAFIA */}
        {filteredArtworks.length === 0 ? (
          <div className="text-center py-5">
            <h4 className="text-warning">
              {viewMode === 'favorites' 
                ? "Nenhuma obra favoritada atende aos filtros selecionados." 
                : "Nenhuma obra encontrada com os filtros atuais."}
            </h4>
            <p className="text-light-50 fs-5">
              Tente redefinir a busca por texto ou alterar as opções de Museu e Época.
            </p>
          </div>
        ) : (
          artistsList.map(artist => {
            const artistWorks = filteredArtworks.filter(art => art.artistSection === artist.id);
            if (artistWorks.length === 0) return null;

            return (
              <section id={artist.id} key={artist.id} className="mb-5 border-bottom border-secondary pb-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="text-warning m-0">{artist.name}</h2>
                  {/* Botão para abrir o Modal de Biografia */}
                  <button 
                    className="btn btn-sm btn-outline-warning"
                    onClick={() => setSelectedArtist(artist)}
                  >
                    ℹ️ Sobre o Artista
                  </button>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {artistWorks.map(art => (
                    <ArtworkCard 
                      key={art.id}
                      art={art}
                      isFavorite={favorites.includes(art.id)}
                      onToggleFavorite={toggleFavorite}
                      onSelectImg={setSelectedImg}
                    />
                  ))}
                </div>
              </section>
            );
          })
        )}
      </main>

      {/* MODAL DE IMAGEM */}
      <ImageModal selectedImg={selectedImg} onClose={() => setSelectedImg(null)} />

      {/* MODAL DO ARTISTA */}
      <ArtistModal artist={selectedArtist} onClose={() => setSelectedArtist(null)} />
      
      <Footer />
    </div>
  );
}