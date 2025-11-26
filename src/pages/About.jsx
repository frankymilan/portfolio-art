import { useEffect } from 'react';

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-base-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              À propos <span className="text-gradient">de moi</span>
            </h1>
          </div>

          <div className="space-y-12">
            <div className="fade-in">
              <p className="text-xl md:text-2xl text-blue-gray leading-relaxed">
                Artiste passionné depuis mon plus jeune âge, je crée des œuvres uniques qui capturent l'essence de mon imagination.
              </p>
            </div>

            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Mon parcours</h2>
              <p className="text-lg text-blue-gray leading-relaxed mb-4">
                Chaque peinture et chaque dessin raconte une histoire unique. Mon travail explore les thèmes de l'identité, 
                de l'émotion et de la connexion humaine à travers des techniques variées et des styles audacieux.
              </p>
              <p className="text-lg text-blue-gray leading-relaxed">
                Influencé par l'art abstrait et le réalisme émotionnel, je cherche constamment à repousser les limites 
                de ma créativité et à développer mon langage visuel personnel.
              </p>
            </div>

            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ma technique</h2>
              <p className="text-lg text-blue-gray leading-relaxed mb-4">
                J'utilise principalement l'acrylique, l'huile et le fusain pour donner vie à mes créations. 
                Chaque médium apporte sa propre texture et sa propre énergie à l'œuvre finale.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="stat-card">
                  <h3 className="font-bold text-xl mb-2">Acrylique</h3>
                  <p className="text-sm text-blue-gray">Couleurs vives et séchage rapide</p>
                </div>
                <div className="stat-card">
                  <h3 className="font-bold text-xl mb-2">Huile</h3>
                  <p className="text-sm text-blue-gray">Profondeur et richesse des tons</p>
                </div>
                <div className="stat-card">
                  <h3 className="font-bold text-xl mb-2">Fusain</h3>
                  <p className="text-sm text-blue-gray">Contraste et émotion brute</p>
                </div>
              </div>
            </div>

            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Expositions</h2>
              <div className="space-y-6">
                <div className="card bg-base-300 shadow-xl">
                  <div className="card-body">
                    <div className="flex items-center gap-4">
                      <div className="badge badge-primary badge-lg">2024</div>
                      <div>
                        <h3 className="font-bold text-xl">Galerie d'Art Moderne</h3>
                        <p className="text-blue-gray">Paris, France</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-300 shadow-xl">
                  <div className="card-body">
                    <div className="flex items-center gap-4">
                      <div className="badge badge-primary badge-lg">2023</div>
                      <div>
                        <h3 className="font-bold text-xl">Exposition Collective</h3>
                        <p className="text-blue-gray">Bruxelles, Belgique</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-300 shadow-xl">
                  <div className="card-body">
                    <div className="flex items-center gap-4">
                      <div className="badge badge-primary badge-lg">2022</div>
                      <div>
                        <h3 className="font-bold text-xl">Salon des Artistes Émergents</h3>
                        <p className="text-blue-gray">Lyon, France</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-in text-center mt-16">
              <a href="/contact" className="btn btn-primary btn-lg">
                Discutons de votre projet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;