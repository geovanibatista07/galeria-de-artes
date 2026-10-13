export function Header({ searchTerm, setSearchTerm, viewMode, setViewMode, favCount }) {
  return (
    <header className="text-center py-5 mt-5 border-bottom border-secondary">
      <div className="container">
        <h1 className="display-4 fw-bold">Galeria Online</h1>
        <p className="lead text-light-50">Navegue pelas obras dos seus artistas favoritos.</p>
        
        <div className="d-flex justify-content-center gap-2 mt-4">
          <button 
            className={`btn ${viewMode === 'all' ? 'btn-warning' : 'btn-outline-warning'}`}
            onClick={() => setViewMode('all')}
          >
            Todas as Obras
          </button>
          <button 
            className={`btn ${viewMode === 'favorites' ? 'btn-warning' : 'btn-outline-warning'}`}
            onClick={() => setViewMode('favorites')}
          >
            ★ Meus Favoritos ({favCount})
          </button>
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col-md-6">
            <input 
              type="text" 
              className="form-control form-control-lg bg-dark text-light border-secondary"
              placeholder="Pesquisar por obra ou artista..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}