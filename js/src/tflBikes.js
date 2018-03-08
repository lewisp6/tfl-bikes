import tfl from './api/tfl.js';
import {setBikePointProperties} from './model/bikePoint.js';

const tflBikes = {
  getBikePointInfo(bikePointId) {
    return tfl.getBikePoint(bikePointId)
      .then(response => response.json())
      .then(function(json) {
        return setBikePointProperties(json);
      });
  },

  searchForBikePoints(searchTerm) {
    return tfl.search(searchTerm);
  },
};

export default tflBikes;
