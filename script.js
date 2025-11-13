
// ✦ Entrance animations on scroll ✦
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => observer.observe(section));












const stickerImages = ['sticker1.jpg', 'sticker2.jpg', 'sticker3.jpg', 'sticker4.jpg'];
const stickerContainer = document.getElementById('background-stickers');
const stickerCount = 20;
const placedStickers = [];

function getRandomPosition(size) {
  let top, left, safe;
  let attempts = 0;

  do {
    top = Math.random() * (100 - size);
    left = Math.random() * (100 - size);
    safe = true;

    for (let s of placedStickers) {
      const dx = s.left - left;
      const dy = s.top - top;
      const distance = Math.sqrt(dx*dx + dy*dy);
      if (distance < 15) { safe = false; break; }
    }
    attempts++;
  } while(!safe && attempts < 50);

  return {top, left};
}

// Create stickers
for (let i = 0; i < stickerCount; i++) {
  const img = document.createElement('img');
  img.src = stickerImages[Math.floor(Math.random() * stickerImages.length)];
  img.classList.add('sticker');

  const size = 5 + Math.random() * 5;
  img.style.width = 40 + Math.random() * 30 + 'px';

  const pos = getRandomPosition(5);
  img.style.top = pos.top + 'vh';
  img.style.left = pos.left + 'vw';

  // Random starting rotation
  const rot = Math.random() * 360;
  img.dataset.rotation = rot;   // store rotation for later animation
  img.style.transform = `rotate(${rot}deg)`;

  placedStickers.push({top: pos.top, left: pos.left});
  stickerContainer.appendChild(img);
}

// Animate stickers to "shuffle" angles continuously
function animateStickers() {
  document.querySelectorAll('.sticker').forEach(sticker => {
    const currentRot = parseFloat(sticker.dataset.rotation);
    // Pick a small random delta rotation each frame
    const delta = (Math.random() - 0.5) * 20; // -10 to +10 degrees
    const newRot = currentRot + delta;
    sticker.dataset.rotation = newRot;
    sticker.style.transform = `rotate(${newRot}deg)`;
  });
}

// Animate every 300ms
setInterval(animateStickers, 400);







// Floating lava stars
for(let i=0;i<60;i++){
  const star=document.createElement('div');
  star.classList.add('lava-star');
  star.style.left=Math.random()*100+'vw';
  star.style.width=4+Math.random()*6+'px';
  star.style.height=4+Math.random()*6+'px';
  star.style.animationDuration=5+Math.random()*5+'s';
  star.style.animationDelay=Math.random()*5+'s';
  document.body.appendChild(star);
}

// Custom cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => { cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; });


















// Project carousel
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const title = document.getElementById('proj-title');
const desc = document.getElementById('proj-desc');
let index = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  const current = items[index];
  title.textContent = current.dataset.title;
  desc.textContent = current.dataset.desc;
}

document.querySelector('.carousel-btn.next').addEventListener('click', () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

updateCarousel();








// --- Auto-rotate with pause on hover☺ ---
let autoRotate = setInterval(() => {
  index = (index + 1) % items.length;
  updateCarousel();
}, 4000);

carousel.addEventListener('mouseenter', () => clearInterval(autoRotate));
carousel.addEventListener('mouseleave', () => {
  autoRotate = setInterval(() => {
    index = (index + 1) % items.length;
    updateCarousel();
  }, 1000);
});


// Gmail Send Function
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const mailTo = "s.h.jusrylle@gmail.com";

  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  // Open Gmail compose
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${mailTo}&su=${subject}&body=${body}`, "_blank");
});

