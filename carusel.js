function App() {}

window.onload = function (event) {
  var app = new App();
  window.app = app;
};

App.prototype.processingButton = function (event) {
  var btn = event.currentTarget;
  var carrusellist = event.currentTarget.parentNode;
  var track = event.currentTarget.parentNode.querySelector("#track");
  var carrusel = track.querySelectorAll(".carrusel");
  var carruselWidth = carrusel[0].offsetWidth;
  var trackWidth = track.offsetWidth;
  var listWidth = carrusellist.offsetWidth;

  track.style.left = ""
    ? (leftPosition = track.style.left)
    : (leftPosition = parseFloat(track.style.left.slice(0, -2) * -1));
  btn.dataset.button === "button-prev"
    ? prevAction(leftPosition, carruselWidth, track)
    : nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
};

let prevAction = (leftPosition, carruselWidth, track) => {
  if (leftPosition > 0) {
    track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
  }
};

let nextAction = (
  leftPosition,
  trackWidth,
  listWidth,
  carruselWidth,
  track
) => {
  if (leftPosition < trackWidth - listWidth) {
    track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
  }
};
