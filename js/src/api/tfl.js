const tfl = {
  getBikePoint(bikePointId) {
    return fetch('https://api.tfl.gov.uk/BikePoint/' + bikePointId);
  },

  search(searchTerm) {
    return fetch('https://api.tfl.gov.uk/BikePoint/Search?query=' + searchTerm);
  }
};

export default tfl;
