// Animate skill bar when page loaded
document.querySelectorAll(".bar div").forEach(bar => {
  const value = bar.dataset.value;
  setTimeout(() => {
    bar.style.width = value;
  }, 300);
});
/* ===== PORTFOLIO FILTER ===== */
const filterBtns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".portfolio-item");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    items.forEach(item => {
      item.style.display = "none";
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
        setTimeout(() => item.classList.add("show"), 50);
      } else {
        item.classList.remove("show");
      }
    });
  });
});

/* ===== INITIAL ANIMATION ===== */
window.addEventListener("load", () => {
  items.forEach((item, i) => {
    setTimeout(() => item.classList.add("show"), i * 120);
  });
});
/* =========================================
   SCROLL ANIMATION
========================================= */
const revealElements = document.querySelectorAll(
  "section, .about-img, .about-text"
);

window.addEventListener("scroll", () => {
  reveal.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      el.classList.add("show");
    }
  });
});

/* trigger first load */
window.dispatchEvent(new Event("scroll"));
/* =========================
   MOUSE GLOW EFFECT
========================= */

const glow = document.createElement("div");
glow.classList.add("mouse-glow");
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* =========================
   SCROLL REVEAL
========================= */

const reveal = document.querySelectorAll(
  "section, .portfolio-item, .music-card, .game-card, .social-card"
);

window.addEventListener("scroll", () => {

  reveal.forEach((el) => {

    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }

  });

});

window.dispatchEvent(new Event("scroll"));

/* =========================
   TYPING EFFECT
========================= */

const typing = document.getElementById("typing");

if (typing) {

  const text = [
    "Graphic Designer",
    "Video Editor",
    "Photographer",
    "Multimedia Student"
  ];

  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  (function type() {

    if (count === text.length) {
      count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    typing.textContent = letter;

    if (letter.length === currentText.length) {

      setTimeout(() => {
        index = 0;
        count++;
        type();
      }, 1200);

    } else {

      setTimeout(type, 80);

    }

  })();

}
const player = document.getElementById("audioPlayer");

function playMusic(src, card){

  if(player.src.includes(src) && !player.paused){
    player.pause();
    card.classList.remove("playing");
  }

  else{
    player.src = src;
    player.play();

    document
      .querySelectorAll(".music-card")
      .forEach(c => c.classList.remove("playing"));

    card.classList.add("playing");
  }

}

// =========================
// LOADING SCREEN
// =========================

window.addEventListener("load", () => {

  const loader =
  document.getElementById("loader");

  setTimeout(() => {

    loader.classList.add(
      "loader-hide"
    );

  }, 2500);

});

// =========================
// PAGE TRANSITION
// =========================

// FADE IN
window.addEventListener("load", () => {

  document.body.classList.add(
    "page-loaded"
  );

});

// FADE OUT
const links = document.querySelectorAll("a");

links.forEach(link => {

  link.addEventListener("click", e => {

    const href =
    link.getAttribute("href");

    // skip external
    if(
      href.startsWith("http") ||
      href.startsWith("#")
    ) return;

    e.preventDefault();

    document.body.classList.add(
      "fade-out"
    );

    setTimeout(() => {

      window.location.href = href;

    }, 600);

  });

});

// =========================
// SECRET CONSOLE MESSAGE
// =========================

console.log(
"%cWELCOME TO DANIERU.EXE",
"color:#00ffff; font-size:24px; font-weight:bold;"
);

console.log(
"%cHidden system initialized...",
"color:#7c7cff; font-size:14px;"
);

// =========================
// SECRET LOGO CLICK
// =========================

const logo =
document.getElementById(
  "secretLogo"
);

let clickCount = 0;

logo.addEventListener("click", () => {

  clickCount++;

  if(clickCount >= 5){

    alert(
      "CYBER MODE UNLOCKED"
    );

    document.body.classList.toggle(
      "cyber-mode"
    );

    clickCount = 0;
  }

});

// =========================
// KONAMI CODE
// =========================

const konami = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let konamiIndex = 0;

window.addEventListener(
  "keydown",
  e => {

    if(
      e.key === konami[konamiIndex]
    ){

      konamiIndex++;

      if(
        konamiIndex === konami.length
      ){

        document.body.classList.toggle(
          "cyber-mode"
        );

        alert(
          "🎮 KONAMI CODE ACTIVATED"
        );

        konamiIndex = 0;
      }

    } else {

      konamiIndex = 0;

    }

});

// =========================
// ACHIEVEMENT POPUP
// =========================

const achievement =
document.getElementById(
  "achievement"
);

setTimeout(() => {

  achievement.classList.add(
    "show"
  );

  // hide lagi
  setTimeout(() => {

    achievement.classList.remove(
      "show"
    );

  }, 4000);

}, 3000);

// =========================
// MATRIX MODE
// =========================

window.addEventListener(
  "keydown",
  e => {

    if(e.key === "r"){

      document.body.classList.toggle(
        "matrix-mode"
      );

    }

});

// =========================
// SECRET RICKROLL
// ketik: danil
// =========================

let typed = "";

const secretPlayer =
document.getElementById(
  "secret-player"
);

const rickVideo =
document.getElementById(
  "rick-video"
);

// pastikan video pause saat page load
window.addEventListener(
  "load",
  () => {

    rickVideo.pause();

    rickVideo.currentTime = 0;

});
    
// DETECT SECRET WORD
window.addEventListener(
  "keydown",
  e => {

    typed += e.key.toLowerCase();

    // batasi panjang biar gak numpuk
    typed = typed.slice(-10);

    if(
      typed.includes("danil")
    ){

      // tampilkan player
      secretPlayer.classList.add(
        "show"
      );

      // autoplay HANYA saat ketik danil
      rickVideo.currentTime = 0;

      rickVideo.play();

      // reset typed
      typed = "";
    }

});
    
// CLOSE BUTTON
document
.getElementById(
  "close-player"
)
.addEventListener(
  "click",
  () => {

    // hide
    secretPlayer.classList.remove(
      "show"
    );

    // stop video
    rickVideo.pause();

    rickVideo.currentTime = 0;

});

// =========================
// RANDOM QUOTES
// =========================

window.addEventListener(
  "DOMContentLoaded",
  () => {

    const quoteElement =
    document.getElementById(
      "quote"
    );

    if(!quoteElement) return;

    const quotes = [

      "Creating visual stories...",
      "Loading creativity...",
      "Entering Danil.EXE...",
      "Designing the future...",
      "Welcome to my universe..."
    ];

    quoteElement.innerText =

    quotes[
      Math.floor(
        Math.random() *
        quotes.length
      )
    ];

});

// SECRET TAP MOBILE

const secretLogo =
document.getElementById(
  "secretLogo"
);

let tapCount = 0;

secretLogo.addEventListener(
  "click",
  () => {

    tapCount++;

    if(tapCount >= 5){

      secretPlayer.classList.add(
        "show"
      );

      rickVideo.play();

      tapCount = 0;
    }

});