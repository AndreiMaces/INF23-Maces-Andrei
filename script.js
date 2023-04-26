let pathway = document.getElementById("pathway");
let pathwayString = "M 0 0";
hasStroke = true;
hasFill = true;

document.getElementById("graph").addEventListener("click", render);

function clear() {
  pathwayString = "M 0 0";
  pathway.setAttribute("d", pathwayString);
  renderStroke();
  renderFill();
}

function render() {
  let x = window.event.clientX;
  let y = window.event.clientY;
  pathwayString += " L " + x + " " + y;
  pathway.setAttribute("d", pathwayString);

  renderStroke();
  renderFill();

  console.log(pathwayString);
}

function renderStroke() {
  if (hasStroke) {
    pathway.setAttribute("stroke", "black");
  } else {
    pathway.setAttribute("stroke", "none");
  }
}

function renderFill() {
  if (hasFill) {
    pathway.setAttribute("fill", "yellow");
  } else {
    pathway.setAttribute("fill", "none");
  }
}

document.getElementById("stroke").addEventListener("click", function () {
  hasStroke = !hasStroke;
  renderStroke();
});

document.getElementById("clear").addEventListener("click", clear);

document.getElementById("fill").addEventListener("click", function () {
  hasFill = !hasFill;
  renderFill();
});
