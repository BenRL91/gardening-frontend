function LoginController (UserService, $cookies, $state) {

  let vm = this;
  vm.login = login;

  function login (user) {
    UserService.login(user).then( res => {
      $cookies.put('access_token', res.data.access_token)
      $cookies.put('admin', res.data.admin)
      $state.go('root.home');
    })
  }
}
LoginController.$inject = ['UserService', '$cookies', '$state'];
export { LoginController };