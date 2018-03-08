const numberOfBikesKey = 'NbBikes';
const numberOfEmptyDocksKey = 'NbEmptyDocks';
const numberOfDocksKey = 'NbDocks';

let bikePointProperties = null;
let bikePoint = {};

export function setBikePointProperties(response) {
  bikePointProperties = response.additionalProperties;
  setBikePointName(response);
  setTakenBikes();
  setTotalDocks();
  setFreeBikes();
  return bikePoint;
};

function getCommonName(response) {
  return response.commonName;
}

function getPropertyValue(key) {
  const property = findKey(key);
  return property.value;
}

function findKey(key) {
  const filteredProperty = bikePointProperties.filter(properties => properties.key == key);
  const property = filteredProperty[0];
  return property;
}

function setFreeBikes() {
  bikePoint.freeBikes = getPropertyValue(numberOfBikesKey);
}

function setTakenBikes() {
  bikePoint.takenBikes = getPropertyValue(numberOfEmptyDocksKey);
}

function setTotalDocks() {
  bikePoint.totalDocks = getPropertyValue(numberOfDocksKey);
}

function setBikePointName(response) {
  bikePoint.name = getCommonName(response);
}
