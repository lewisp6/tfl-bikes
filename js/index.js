import tflBikes from './src/tflBikes.js';
import dom from './src/helper/dom.js';

const searchButton = document.getElementById('search');
searchButton.addEventListener('click', search, false);

function search() {
  console.log('search');
}

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="location"]').onchange=changeEventHandler;
},false);

async function changeEventHandler(event) {
  const bikePointId = event.target.value;

  if (bikePointId) {
    const bikePoint = await tflBikes.getBikePointInfo(bikePointId);
    dom.writeResultsToHtml(bikePoint);
  }
};
