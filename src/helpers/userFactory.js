function User(name) {
  this.name = name;
  this.printMessage = function (message) {
    const messageBody = `<small>Message for <b>${this.name}</b>: <i>${message}</i></small>`;
    document.getElementById("messageBoard").innerHTML = messageBody;
  };
}

export default function createUser(name) {
  return new User(name);
}
