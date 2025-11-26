function GalleryCard({ title, type, description, gradient, icon }) {
  return (
    <div className="gallery-card card bg-base-300 shadow-xl fade-in" data-category={type}>
      <figure className={`h-80 ${gradient} flex items-center justify-center`}>
        <div className="text-center">
          {icon}
          <span className="text-white/60 text-lg">{title}</span>
        </div>
      </figure>
      <div className="card-body">
        <div className={`badge ${type === 'paintings' ? 'badge-primary' : 'badge-secondary'} badge-sm mb-2`}>
          {type === 'paintings' ? 'Peinture' : 'Dessin'}
        </div>
        <h3 className="card-title text-2xl">{title}</h3>
        <p className="text-blue-gray">{description}</p>
      </div>
    </div>
  );
}

export default GalleryCard;