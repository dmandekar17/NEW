document.addEventListener("DOMContentLoaded", function() {
    const heroTitle = document.querySelector(".hero-title");
    const heroSubtitle = document.querySelector(".hero-subtitle");
    const ctaButton = document.querySelector(".cta-button");
  
    // Initial Animation on Load
    setTimeout(() => {
      heroTitle.style.opacity = 1;
      heroTitle.style.transform = "translateY(0)";
    }, 300);
  
    setTimeout(() => {
      heroSubtitle.style.opacity = 1;
      heroSubtitle.style.transform = "translateY(0)";
    }, 600);
  
    setTimeout(() => {
      ctaButton.style.opacity = 1;
      ctaButton.style.transform = "translateY(0)";
    }, 900);
  
    // Mouse Movement Effects
    const hero = document.querySelector(".hero");
  
    hero.addEventListener("mousemove", (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;
      const heroRect = hero.getBoundingClientRect();
      const mouseXRatio = (mouseX - heroRect.left) / heroRect.width;
      const mouseYRatio = (mouseY - heroRect.top) / heroRect.height;
  
      // Adjust background or image movement
      const imageContainer = document.querySelector(".hero-image-container");
      imageContainer.style.transform = `translate(-${mouseXRatio * 20}px, -${mouseYRatio * 20}px)`;
    });
  });
  