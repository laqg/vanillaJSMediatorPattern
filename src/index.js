import "./styles.css";
import createUser from "./helpers/userFactory";
import userMediator from "./helpers/userMediator";

document.getElementById("app").innerHTML = `
<h1>Mediator</h1>
<div>
  <small>Message:</small>
  <input type='text'id='message'/>
  <br/><br/>
  <small>For:</small>
  <select name="users" id="users">
    <option value="Luis">Luis</option>
  </select>
  <button id='send'>Send</button>
  <br/><br/>
  <div id='messageBoard'></div>
</div>
`;

let selectOptions = "";
const usersToCreate = ["Luis", "John", "Jane"];

usersToCreate.forEach((user) => {
  userMediator.addUser(createUser(user));
  selectOptions += `<option value='${user}'>${user}</option>`;
});

document.getElementById("users").innerHTML = selectOptions;

document.getElementById("send").addEventListener("click", () => {
  const input = document.getElementById("message");
  const message = input.value;
  if (message) {
    const userName = document.getElementById("users").value;
    userMediator.sendMessage(userName, message);
    input.value = "";
  }
  if (!message) {
    document.getElementById(
      "messageBoard"
    ).innerHTML = `<small class='error'><i>Please enter a message!</i></small>`;
  }
});
