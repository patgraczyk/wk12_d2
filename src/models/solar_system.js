const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
  console.log(this.planets)
};

SolarSystem.prototype.bindEvents = function() {
  PubSub.subscribe('SelectPlanetView:change', (event) => {
    const selectedPlanet = event.detail;
    this.publishPlanetDetail(selectedPlanet);
  });
};

SolarSystem.prototype.publishPlanetDetail = function(selectedPlanetID){
  let planetDetail = null;
  this.planets.forEach(element => {
    if (element.name === selectedPlanetID){
      planetDetail = element;
    }
  });
  PubSub.publish('SolarSystem:select-planet-ready', planetDetail);
};

module.exports = SolarSystem;
