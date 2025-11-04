const { addDistrict, updateDistrictPopulation, deleteDistrict, groupByStates, districtWithStates, getdistricts } = require('./Controller/districtController');
const { addstate, getstatepopulation, totalPopulation, averageDensity, getstates } = require('./Controller/stateController');

const router = require('express').Router();

// ROUTER FOR STATE
router.post('/states',addstate);
router.get('/states/:name/population',getstatepopulation);
router.get('/states/total-population',totalPopulation);
router.get('/states/average-density',averageDensity);
router.get('/states',getstates);

// ROUTER FOR DISTRICT
router.post('/districts',addDistrict);
router.put('/districts/:name/population',updateDistrictPopulation);
router.delete('/districts/:name',deleteDistrict);
router.get('/districts/group-by-states',groupByStates);
router.get('/districts/with-states',districtWithStates);
router.get('/districts',getdistricts);

module.exports = router;