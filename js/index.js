import tflBikes from './src/tflBikes.js';
import dom from './src/helper/dom.js';

const searchButton = document.getElementById('search');
console.log(searchButton);
search.addEventListener('click', search, false);

function search() {
  console.log('search');
}

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="location"]').onchange=changeEventHandler;
},false);

function changeEventHandler(event) {
  const bikePointId = event.target.value;

  if (bikePointId) {
    tflBikes.getBikePointInfo(bikePointId)
    .then(function(bikePoint) {
      dom.writeResultsToHtml(bikePoint)
    });
  }
};
