/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function findParkByName(parks, name) {
  return parks.find((park) => park.name === name) || null;
};

function allParksAboveCertainSize(parks, minSize) {
  return parks.every((park) => park.areaInSquareKm > minSize);
}

function getBigParkNames(parks, minSize) {}

function doesStateHaveOneBigPark(parks, minSize, state) {}

module.exports = {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
};
