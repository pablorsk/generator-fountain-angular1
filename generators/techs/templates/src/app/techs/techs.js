module.exports = {
  templateUrl: 'app/techs/techs.html',
  controller: TechsController
};

function TechsController($http) {
  var vm = this;

  $http
    .get('app/techs/techs.json')
    .then(function(response) {
      vm.techs = response.data;
    });
}
