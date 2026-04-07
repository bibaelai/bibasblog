/**
 * ══════════════════════════════════════════
 *  BEWARE — Photos of MEEEE
 * ══════════════════════════════════════════
 */

const GALLERY_DATA = {
  volunteer: [
    { src: 'gallery/vol1.JPG',   alt: 'Volunteer 1' },
    { src: 'gallery/vol2.jpeg',  alt: 'Volunteer 2' },
    { src: 'gallery/vol3.jpeg',  alt: 'Volunteer 3' },
    { src: 'gallery/vol4.jpeg',  alt: 'Volunteer 4' },
    { src: 'gallery/vol5.jpeg',  alt: 'Volunteer 5' },
    { src: 'gallery/vol6.jpeg',  alt: 'Volunteer 6' },
    { src: 'gallery/vol7.jpeg',  alt: 'Volunteer 7' },
    { src: 'gallery/vol8.jpeg',  alt: 'Volunteer 8' },
    { src: 'gallery/vol9.jpeg',  alt: 'Volunteer 9' },
    { src: 'gallery/vol10.jpeg', alt: 'Volunteer 10' },
    { src: 'gallery/vol12.jpeg', alt: 'Volunteer 12' },
    { src: 'gallery/vol13.jpeg', alt: 'Volunteer 13' },
    { src: 'gallery/vol14.jpeg', alt: 'Volunteer 14' },
    { src: 'gallery/vol15.jpeg', alt: 'Volunteer 15' },
  ],
  athlete: [
    { src: 'gallery/ath1.jpeg',  alt: 'Athlete 1' },
    { src: 'gallery/ath2.jpeg',  alt: 'Athlete 2' },
    { src: 'gallery/ath3.jpeg',  alt: 'Athlete 3' },
    { src: 'gallery/ath4.jpeg',  alt: 'Athlete 4' },
    { src: 'gallery/ath5.jpeg',  alt: 'Athlete 5' },
    { src: 'gallery/ath6.jpeg',  alt: 'Athlete 6' },
    { src: 'gallery/ath7.jpeg',  alt: 'Athlete 7' },
    { src: 'gallery/ath8.jpeg',  alt: 'Athlete 8' },
    { src: 'gallery/ath9.jpeg',  alt: 'Athlete 9' },
    { src: 'gallery/ath10.jpeg', alt: 'Athlete 10' },
  ],
  Uni: [
    { src: 'gallery/uni1.jpeg', alt: 'Other 1' },
    { src: 'gallery/uni2.jpeg', alt: 'Other 2' },
    { src: 'gallery/uni3.jpeg', alt: 'Other 3' },
    { src: 'gallery/uni4.jpeg', alt: 'Other 4' },
    { src: 'gallery/uni5.jpeg', alt: 'Other 5' },
    { src: 'gallery/uni6.jpeg', alt: 'Other 6' },
    { src: 'gallery/uni7.jpeg', alt: 'Other 7' },
    { src: 'gallery/uni8.jpeg', alt: 'Other 8' },
    { src: 'gallery/uni9.jpeg', alt: 'Other 9' },
  ],
  certificates: [
    { src: 'gallery/counseling.jpeg', alt: 'counseling' },
    { src: 'gallery/coursera.jpg', alt: 'coursera' },
    { src: 'gallery/paramedic.jpeg', alt: 'paramedic' },
    { src: 'gallery/publicSpeaking.jpeg', alt: 'publicSpeaking' },
    { src: 'gallery/bootcamp.jpeg', alt: 'bootcamp' },
    { src: 'gallery/tourism.jpeg', alt: 'tourism' },
  ]
};

function loadGallery() {
  Object.entries(GALLERY_DATA).forEach(([tab, photos]) => {
    const grid = document.getElementById('grid-' + tab);
    if (!grid) return;

    grid.innerHTML = '';

    photos.forEach(photo => {
      const img = document.createElement('img');
      img.src   = photo.src;
      img.alt   = photo.alt || '';
      img.classList.add('gallery-real-img');
      img.loading = 'lazy';

      img.addEventListener('click', () => openLightbox(photo.src, photo.alt));

      // I love this 
      img.addEventListener('error', () => {
        img.style.display = 'none';
      });

      grid.appendChild(img);
    });
  });
}

// ── LIGHTBOX ──
function openLightbox(src, alt) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position:fixed; inset:0; z-index:9000;
    background:rgba(30,27,24,0.94);
    display:flex; align-items:center; justify-content:center;
    cursor:pointer; animation: fadeIn 0.2s ease;
  `;
  const img = document.createElement('img');
  img.src = src; img.alt = alt;
  img.style.cssText = `
    max-width:90vw; max-height:90vh;
    border-radius:16px; box-shadow:0 20px 60px rgba(0,0,0,0.6);
  `;

  // How to close 
  const hint = document.createElement('div');
  hint.textContent = 'click anywhere to close';
  hint.style.cssText = `
    position:absolute; bottom:1.5rem; left:50%; transform:translateX(-50%);
    color:rgba(255,255,255,0.3); font-family:monospace; font-size:0.75rem;
  `;

  overlay.appendChild(img);
  overlay.appendChild(hint);
  overlay.addEventListener('click', () => overlay.remove());
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', esc); }
  });
  document.body.appendChild(overlay);
}

loadGallery();
