const { users } = require("../store");

const UsersService = {
  getUsers() {
    let array = [];
    let currNode = users.first;
    while (currNode !== undefined) {
      array.push(currNode.data);
      currNode = currNode.next;
    }
    return array;
  },
  insertUser(newUser) {
    users.enqueue(newUser);
  },
  deleteUser() {
    users.dequeue();
  }
};

module.exports = UsersService;
