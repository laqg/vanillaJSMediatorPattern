function UserMediator() {
  this.users = {};
  this.addUser = function (user) {
    this.users[user.name] = user;
  };
  this.sendMessage = function (userName, message) {
    this.users[userName].printMessage(message);
  };
}

const userMediator = new UserMediator();

export default userMediator;
