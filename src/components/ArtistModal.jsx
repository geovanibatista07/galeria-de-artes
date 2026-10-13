export function ArtistModal({ artist, onClose }) {
  if (!artist) return null;

  return (
    <div 
      className="modal fade show d-block tab-index-1" 
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      onClick={onClose}
    >
      <div 
        className="modal-dialog modal-dialog-centered modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content bg-dark text-light border border-secondary shadow-lg">
          <div className="modal-header border-secondary">
            <h5 className="modal-title text-warning fw-bold fs-4">
              🎨 {artist.name}
            </h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={onClose}
              aria-label="Fechar"
            ></button>
          </div>
          
          <div className="modal-body py-4">
            <span className="badge bg-warning text-dark mb-3 fs-6">
              {artist.period}
            </span>
            
            <h6 className="text-secondary mb-2 fw-bold">Biografia & Contexto Histórico:</h6>
            <p className="lead fs-6 text-light" style={{ lineHeight: "1.7" }}>
              {artist.bio}
            </p>
          </div>

          <div className="modal-footer border-secondary">
            <button 
              type="button" 
              className="btn btn-outline-warning" 
              onClick={onClose}
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}