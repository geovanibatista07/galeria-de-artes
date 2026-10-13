export function ImageModal({ selectedImg, onClose }) {
  if (!selectedImg) return null;

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <img src={selectedImg} className="custom-modal-img" alt="Obra ampliada" />
    </div>
  );
}