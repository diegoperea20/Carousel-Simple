function App() {
    this.currentIndex = 1;
    this.isAnimating = false;
    this.track = document.querySelector("#track");
    this.carrusel = Array.from(this.track.querySelectorAll(".carrusel"));
    this.carruselWidth = this.carrusel[0].offsetWidth;
    this.totalImages = this.carrusel.length;
    this.cloneImages();
    this.track.style.left = -this.currentIndex * this.carruselWidth + "px";
  }
  
  App.prototype.cloneImages = function () {
    var firstImageClone = this.carrusel[0].cloneNode(true);
    var lastImageClone = this.carrusel[this.totalImages - 1].cloneNode(true);
    this.track.appendChild(firstImageClone);
    this.track.insertBefore(lastImageClone, this.track.firstChild);
    this.totalImages += 2;
    this.currentIndex = 1;
  };
  
  window.onload = function (event) {
    var app = new App();
    window.app = app;
  };
  
  App.prototype.processingButton = function (event) {
    if (this.isAnimating) {
      return;
    }
  
    var btn = event.currentTarget;
  
    this.isAnimating = true;
  
    if (btn.dataset.button === "button-prev") {
      this.currentIndex--;
    } else {
      this.currentIndex++;
    }
  
    var leftPosition = -this.currentIndex * this.carruselWidth;
  
    this.track.style.transition = "left 0.5s ease";
    this.track.style.left = leftPosition + "px";
  
    var app = this;
  
    this.track.addEventListener("transitionend", function () {
      if (app.currentIndex === 0) {
        app.currentIndex = app.totalImages - 2;
        var leftPosition = -app.currentIndex * app.carruselWidth;
        app.track.style.transition = "none";
        app.track.style.left = leftPosition + "px";
      } else if (app.currentIndex === app.totalImages - 1) {
        app.currentIndex = 1;
        var leftPosition = -app.currentIndex * app.carruselWidth;
        app.track.style.transition = "none";
        app.track.style.left = leftPosition + "px";
      }
  
      setTimeout(function () {
        app.isAnimating = false;
      }, 0);
    });
  };
  