/**
 * ══════════════════════════════════════════
 *  GALERIE — Photos de Hiba Elharchaoui
 * ══════════════════════════════════════════
 */

const GALLERY_DATA = {
  volunteer: [
    { src: 'gallery/volunteer/vol1.JPG',  alt: 'Bénévolat 1' },
    { src: 'gallery/volunteer/vol2.jpeg', alt: 'Bénévolat 2' },
    { src: 'gallery/volunteer/vol3.jpeg', alt: 'Bénévolat 3' },
    { src: 'gallery/volunteer/vol4.jpeg', alt: 'Bénévolat 4' },
    { src: 'gallery/volunteer/vol5.jpeg', alt: 'Bénévolat 5' },
    { src: 'gallery/volunteer/vol6.jpeg', alt: 'Bénévolat 6' },
    { src: 'gallery/volunteer/vol7.jpeg', alt: 'Bénévolat 7' },
    { src: 'gallery/volunteer/vol8.jpeg', alt: 'Bénévolat 8' },
    { src: 'gallery/volunteer/vol9.jpeg', alt: 'Bénévolat 9' },
    { src: 'gallery/volunteer/vol10.jpeg', alt: 'Bénévolat 10' },
    { src: 'gallery/volunteer/vol12.jpeg', alt: 'Bénévolat 12' },
    { src: 'gallery/volunteer/vol13.jpeg', alt: 'Bénévolat 13' },
    { src: 'gallery/volunteer/vol14.jpeg', alt: 'Bénévolat 14' },
    { src: 'gallery/volunteer/vol15.jpeg', alt: 'Bénévolat 15' },
  ],
  athlete: [
    { src: 'gallery/athlete/ath1.jpeg', alt: 'Athlète 1' },
    { src: 'gallery/athlete/ath2.jpeg', alt: 'Athlète 2' },
    { src: 'gallery/athlete/ath3.jpeg', alt: 'Athlète 3' },
    { src: 'gallery/athlete/ath4.jpeg', alt: 'Athlète 4' },
    { src: 'gallery/athlete/ath5.jpeg', alt: 'Athlète 5' },
    { src: 'gallery/athlete/ath6.jpeg', alt: 'Athlète 6' },
    { src: 'gallery/athlete/ath7.jpeg', alt: 'Athlète 7' },
    { src: 'gallery/athlete/ath8.jpeg', alt: 'Athlète 8' },
    { src: 'gallery/athlete/ath9.jpeg', alt: 'Athlète 9' },
    { src: 'gallery/athlete/ath10.jpeg', alt: 'Athlète 10' },
  ],
  other: [
    { src: 'gallery/other/uni1.jpeg', alt: 'Divers 1' },
    { src: 'gallery/other/uni2.jpeg', alt: 'Divers 2' },
    { src: 'gallery/other/uni3.jpeg', alt: 'Divers 3' },
    { src: 'gallery/other/uni4.jpeg', alt: 'Divers 4' },
    { src: 'gallery/other/uni5.jpeg', alt: 'Divers 5' },
    { src: 'gallery/other/uni6.jpeg', alt: 'Divers 6' },
    { src: 'gallery/other/uni7.jpeg', alt: 'Divers 7' },
    { src: 'gallery/other/uni8.jpeg', alt: 'Divers 8' },
    { src: 'gallery/other/uni9.jpeg', alt: 'Divers 9' },
  ]
};

/**
 * Injecte les vraies images dans la grille.
 * Supprime tous les placeholders.
 */
function loadGallery() {
  Object.entries(GALLERY_DATA).forEach(([tab, photos]) => {
    const grid = document.getElementById('grid-' + tab);
    if (!grid) return;

    grid.innerHTML = ''; // supprime les placeholders

    photos.forEach(photo => {
      const img = document.createElement('img');
      img.src   = photo.src;
      img.alt   = photo.alt || '';
      img.classList.add('gallery-real-img');
      img.addEventListener('click', () => openLightbox(photo.src, photo.alt));
      grid.appendChild(img);
    });
  });
}

// ── LIGHTBOX simple ──
function openLightbox(src, alt) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position:fixed; inset:0; z-index:9000;
    background:rgba(44,37,32,0.92);
    display:flex; align-items:center; justify-content:center;
    cursor:pointer; animation: fadeIn 0.2s ease;
  `;
  const img = document.createElement('img');
  img.src = src; img.alt = alt;
  img.style.cssText = `
    max-width:90vw; max-height:90vh;
    border-radius:16px; box-shadow:0 20px 60px rgba(0,0,0,0.5);
  `;
  overlay.appendChild(img);
  overlay.addEventListener('click', () => overlay.remove());
  document.body.appendChild(overlay);
}

// Lance le chargement au démarrage
loadGallery();
