document.addEventListener("DOMContentLoaded", function() {
    
  // 1️⃣ Smooth Scrolling Effect  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  });

  // 2️⃣ Scroll Animation Effect  
  const sections = document.querySelectorAll(".section");
  const revealSections = () => {
      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (sectionTop < windowHeight - 100) {
              section.classList.add("visible");
          }
      });
  };
  revealSections(); // Initial check
  window.addEventListener("scroll", revealSections);

  // 3️⃣ 3D Card Effect on Mouse Move  
  document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
          const { offsetWidth: width, offsetHeight: height } = card;
          const { offsetX: x, offsetY: y } = e;
          const moveX = ((x / width) - 0.5) * 10; // Horizontal tilt
          const moveY = ((y / height) - 0.5) * -10; // Vertical tilt
          card.style.transform = `rotateY(${moveX}deg) rotateX(${moveY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
          card.style.transform = 'rotateY(0deg) rotateX(0deg)';
      });
  });

  // 4️⃣ Intersection Observer for Fade-In Animation  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, { threshold: 0.1 });

  sections.forEach((section) => {
      section.style.opacity = 0;
      section.style.transform = 'translateY(30px)';
      observer.observe(section);
  });

  // 5️⃣ About Section Hover Effect  
  const aboutSection = document.querySelector("#about");
  if (aboutSection) {
      aboutSection.addEventListener("mouseenter", () => {
          aboutSection.style.backgroundColor = "#496a8f";
      });
      aboutSection.addEventListener("mouseleave", () => {
          aboutSection.style.backgroundColor = "transparent";
      });
  }

  // 6️⃣ Skills List Hover Effect  
  const skillsList = document.querySelector(".skills ul");
  if (skillsList) {
      skillsList.style.transition = "transform 0.3s";
      skillsList.addEventListener("mouseenter", () => {
          skillsList.style.transform = "scale(1.05)";
      });
      skillsLis.addEventListener("mouseenter", () => {
        skillsLis.style.backgroundColor = "#496a8f";
      });
      skillsList.addEventListener("mouseleave", () => {
          skillsList.style.transform = "scale(1)";
      });
  }

  // 7️⃣ Project Item Click Alert  
  const projectItems = document.querySelectorAll(".projects li");
  projectItems.forEach((item) => {
      item.addEventListener("click", () => {
          alert(`You clicked on: ${item.textContent.trim()}`);
      });

      projectItems.addEventListener("mouseenter", () => {
        projectItems.style.backgroundColor = "#496a8f";
    });
  });

  // 8️⃣ Contact Links Hover Effect  
  const contactLinks = document.querySelectorAll(".contact a");
  contactLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
          link.style.color = "#f7f12d";
      });
      link.addEventListener("mouseleave", () => {
          link.style.color = "#e66000";
      });

      contactLinks.addEventListener("mouseenter", () => {
        contactLinks.style.backgroundColor = "#496a8f";
    });
  });

});
