import tfl from './api/tfl.js';
import {setBikePointProperties} from './model/bikePoint.js';

const tflBikes = {
  getBikePointInfo: async function(bikePointId) {
    const bikePointResponse = await tfl.getBikePoint(bikePointId);
    const bikePointsJson = await bikePointResponse.json();
    return setBikePointProperties(bikePointsJson);
  },

  searchForBikePoints(searchTerm) {
    return tfl.search(searchTerm);
  },
};

export default tflBikes;
