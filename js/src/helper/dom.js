const dom = {
  writeResultsToHtml(bikePoint) {
    appendToHtml('free-bikes', bikePoint.freeBikes);
    appendToHtml('taken-bikes', bikePoint.takenBikes);
    appendToHtml('total-docks', bikePoint.totalDocks);
  }
}

function appendToHtml(div, text) {
  document.getElementById(div).innerHTML = text;
}

export default dom;
