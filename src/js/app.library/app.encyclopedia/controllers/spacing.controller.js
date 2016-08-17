function SpacingController () {

  let vm = this;
  vm.seedClass = "";
  vm.sqRoot = sqRoot;
  vm.getSeeds = getSeeds;

  function getSeeds(num) {
    if (num === 1) {
      vm.seedClass = "one"
    }
    if (num === 4) {
      vm.seedClass = "four"
    }
    if (num === 9) {
      vm.seedClass = "nine"
    }

    // return [0,1,2,3,4,5,6,7,8] // nine
    // return [0,1,2,3];  // four
    return new Array(num);
  }

  function sqRoot(num) {
    console.log(Math.pow(num, 0.5));
    return Math.pow(num, 0.5);
  }
}

SpacingController.$inject = [];
export { SpacingController };