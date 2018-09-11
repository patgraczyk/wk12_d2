const planetsData = require('./data/planets.js');
const SelectPlanetView = require('./views/select_planet_view.js');
const PlanetInfoView = require('./views/planet_info_view.js');
const SolarSystem = require('./models/solar_system.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);

  const selectPlanetView = new SelectPlanetView();
  selectPlanetView.bindEvents();

  const solarSystem = new SolarSystem(planetsDataModel.planets);
  solarSystem.bindEvents();

  const section = document.querySelector('.planet-details');
  const planetInfoView = new PlanetInfoView(section);
  planetInfoView.bindEvents();
});
