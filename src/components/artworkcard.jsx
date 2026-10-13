export function ArtworkCard({ art, isFavorite, onToggleFavorite, onSelectImg }) {
  return (
    <div className="col">
      <div className="card h-100 text-light bg-dark border-secondary">
        <img 
          src={art.img} 
          className="card-img-top" 
          alt={art.title} 
          style={{ height: "220px", objectFit: "cover", cursor: "pointer" }}
          onClick={() => onSelectImg(art.img)}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fw-bold text-light">{art.title}</h5>
            <p className="card-text text-secondary mb-2">{art.desc}</p>
            
            {/* Informações de Localização e Museu */}
            {art.museum && (
              <div className="small text-info mb-2">
                <div>📍 {art.museum}</div>
                <div className="text-muted">{art.city}</div>
              </div>
            )}
          </div>

          <div>
            {/* Link direto para o Google Maps */}
            {art.mapsUrl && (
              <a 
                href={art.mapsUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-sm btn-outline-info w-100 mb-2"
              >
                🗺️ Ver no Google Maps
              </a>
            )}

            {/* Botão de Favoritar */}
            <button 
              className={`btn btn-sm w-100 ${isFavorite ? 'btn-warning' : 'btn-outline-warning'}`}
              onClick={() => onToggleFavorite(art.id)}
            >
              {isFavorite ? '★ Favoritado' : '☆ Favoritar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}