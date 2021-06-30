var user = "tester";

switch (user) {
  case "admin":
    console.log("You get all access");
    break;

  case "tester":
    console.log("You can add and edit contents");
    break;

  case "user":
    console.log("You can read and review content");
    break;

  default:
    console.log("trial user");
    break;
}
