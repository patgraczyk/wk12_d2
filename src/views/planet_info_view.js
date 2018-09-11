const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:select-planet-ready', (event) => {
    const planet = event.detail;
    this.render(planet);
  });
};

PlanetInfoView.prototype.render = function(planet) {
  const list = document.createElement('ul');
  for (var key in planet){
    if (planet.hasOwnProperty(key)) {
      const listItem = document.createElement('li');
      listItem.textContent = `${key}: ${planet[key]}`;
      this.container.innerHTML = '';
      list.appendChild(listItem);
    }
  } 
  this.container.appendChild(list);
  const image = document.createElement('img');
  image.src = planet.image;
  list.appendChild(image);
};

module.exports = PlanetInfoView;