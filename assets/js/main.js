document.addEventListener("DOMContentLoaded", () => {
  // Read More Button
  const readMoreBtn = document.getElementById("read-more-btn");
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");

  if (readMoreBtn && dots && moreText) {
    readMoreBtn.addEventListener("click", () => {
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        readMoreBtn.textContent = "Devamını Oku";
      } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        readMoreBtn.textContent = "Daha Az Göster";
      }
    });
  }

  // Live Date and Time
  function updateDateTime() {
    const dateTimeElement = document.getElementById("live-date-time");
    const now = new Date();

    if (dateTimeElement) {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };

      dateTimeElement.textContent = now.toLocaleDateString("tr-TR", options);
    }
  }
  setInterval(updateDateTime, 1000);

  // Hamburger Menu
  const hamburger = document.getElementById("hamburger");
  const menuList = document.getElementById("menu-list");

  if (hamburger && menuList) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      menuList.classList.toggle("show");
    });
  }

  // Contact Form Validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const feedback = document.getElementById("formFeedback");

      if (!name || !email || !message) {
        feedback.textContent = "Tüm alanlar doldurulmalıdır.";
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        feedback.textContent = "Geçerli bir e-posta adresi giriniz.";
        return;
      }

      feedback.textContent = "";
      alert("Mesajınız için teşekkürler! En kısa sürede size dönüş yapacağız.");
      contactForm.reset();
    });
  }

  // Projects Filter
  const allProjectsBtn = document.getElementById("all-projects-btn");
  const favoriteProjectsBtn = document.getElementById("favorite-projects-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (allProjectsBtn && favoriteProjectsBtn && projectCards.length) {
    allProjectsBtn.addEventListener("click", () => {
      projectCards.forEach(card => (card.style.display = "block"));
      allProjectsBtn.classList.add("active");
      favoriteProjectsBtn.classList.remove("active");
    });

    favoriteProjectsBtn.addEventListener("click", () => {
      projectCards.forEach(card => {
        if (card.classList.contains("favorite")) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
      favoriteProjectsBtn.classList.add("active");
      allProjectsBtn.classList.remove("active");
    });
  }
});
