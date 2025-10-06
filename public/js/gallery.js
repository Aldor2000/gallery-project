// public/js/gallery.js
async function loadGallery() {
  const resp = await fetch('data/gallery.json');
  if (!resp.ok) return console.error('Failed to load gallery.json');
  const items = await resp.json();

  const gallery = document.getElementById('gallery');
  gallery.innerHTML = ''; // clear

  items.forEach(item => {
    // wrap each image in link (for lightbox or enlargement)
    const a = document.createElement('a');
    a.href = `images/${item.file}`;
    a.setAttribute('data-lightbox', 'mygallery'); // optional if you use Lightbox
    a.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = `images/${item.file}`;
    img.alt = ''; // you don't have titles
    img.loading = 'lazy'; // performance: lazy-load images

    a.appendChild(img);
    gallery.appendChild(a);
  });
}

document.addEventListener('DOMContentLoaded', loadGallery);
