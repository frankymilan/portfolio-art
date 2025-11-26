import { useEffect } from 'react';
import GalleryCard from '../components/GalleryCard';

function Home() {
  useEffect(() => {
    // Animation au scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    // Filtres galerie
    const filterButtons = document.querySelectorAll('[data-filter]');
    const galleryItems = document.querySelectorAll('[data-category]');

    filterButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');

        filterButtons.forEach((btn) => {
          btn.classList.remove('btn-primary');
          btn.classList.add('btn-outline', 'btn-primary');
        });
        this.classList.remove('btn-outline');
        this.classList.add('btn-primary');

        galleryItems.forEach((item) => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    return () => observer.disconnect();
  }, []);

  const paintIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white/40 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  );

  const drawIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white/40 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  );

  return (
    <>
      {/* Hero Section */}
      <div id="home" className="hero min-h-screen hero-gradient relative">
        <div className="particles">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${(i + 1) * 10}%`,
                width: `${3 + (i % 3)}px`,
                height: `${3 + (i % 3)}px`,
                animationDelay: `${i * 0.5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl fade-in">
            <div className="mb-6">
              <span className="badge badge-primary badge-lg">Portfolio 2024</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              Bienvenue dans mon
              <span className="block" style={{ background: 'linear-gradient(to right, #3b82f6, #a855f7)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>univers artistique</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-gray mb-8 max-w-2xl mx-auto">
              Découvrez une collection unique de peintures et dessins originaux, créés avec passion et authenticité.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#gallery" className="btn btn-primary btn-lg gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Voir la galerie
              </a>
              <a href="/contact" className="btn btn-outline btn-lg">
                Me contacter
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Œuvres créées' },
              { value: '3', label: 'Expositions' },
              { value: '100%', label: 'Passion' },
              { value: '2024', label: 'Année active' },
            ].map((stat, index) => (
              <div key={index} className="stat-card fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-blue-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl font-black mb-4">Ma Galerie</h2>
            <p className="text-xl text-blue-gray max-w-2xl mx-auto">
              Une sélection de mes meilleures créations, entre peinture et dessin
            </p>
          </div>

          {/* Filtres */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap fade-in">
            <button className="btn btn-primary" data-filter="all">
              Toutes les œuvres
            </button>
            <button className="btn btn-outline btn-primary" data-filter="paintings">
              Peintures
            </button>
            <button className="btn btn-outline btn-primary" data-filter="drawings">
              Dessins
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GalleryCard
              title="Abstraction Cosmique"
              type="paintings"
              description="Acrylique sur toile • 80x100cm • 2024"
              gradient="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"
              icon={paintIcon}
            />
            <GalleryCard
              title="Portrait Émotion"
              type="drawings"
              description="Fusain sur papier • 40x50cm • 2024"
              gradient="bg-gradient-to-br from-gray-800 via-gray-900 to-black"
              icon={drawIcon}
            />
            <GalleryCard
              title="Ville au Crépuscule"
              type="paintings"
              description="Huile sur toile • 70x90cm • 2024"
              gradient="bg-gradient-to-br from-amber-700 via-orange-800 to-red-900"
              icon={paintIcon}
            />
            <GalleryCard
              title="Anatomie Gestuelle"
              type="drawings"
              description="Crayon graphite • 30x40cm • 2024"
              gradient="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900"
              icon={drawIcon}
            />
            <GalleryCard
              title="Nature Abstraite"
              type="paintings"
              description="Aquarelle • 50x70cm • 2024"
              gradient="bg-gradient-to-br from-emerald-700 via-teal-800 to-cyan-900"
              icon={paintIcon}
            />
            <GalleryCard
              title="Architecture Minimale"
              type="drawings"
              description="Encre de Chine • 30x40cm • 2024"
              gradient="bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900"
              icon={drawIcon}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;