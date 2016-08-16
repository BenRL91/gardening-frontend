function plannerPlantCard () {
  return {
    restrict: 'E',
    scope: {
      name: '@',
      plant: '='
    },
    templateUrl: 'templates/planner/plant-card.tpl.html',
    controller: 'PlannerPlantCardController',
    controllerAs: 'vm'
  };
}

plannerPlantCard.$inject = [];
export { plannerPlantCard };