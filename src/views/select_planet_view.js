const PubSub = require('../helpers/pub_sub.js');

const SelectPlanetView = function(){

};

SelectPlanetView.prototype.bindEvents = function(){
  const menu = document.querySelectorAll('.planet-menu-item');

  menu.forEach(menuItem => {
    menuItem.addEventListener('click', (event) => {
      const selectedPlanet = event.target.id;
      //console.log(selectedPlanet);
      PubSub.publish('SelectPlanetView:change', selectedPlanet);
    })
  });
};

module.exports = SelectPlanetView;


