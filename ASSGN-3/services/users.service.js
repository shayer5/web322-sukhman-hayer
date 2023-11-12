// JavaScript source code

const users = require('../data/fakeUsers.json');

class UsersService {
    static getUsers() {
        return users;
    }

    static getUserID(id) {
        const user = users.find((user) => {
            return user.id === parseInt(id);
        });
        return user;
    }


    static delete (id) {
        users = users.filter((user) => {
            user.id != id;
        });
        return 'User deleted ${id}';
    }

    static addUser(user) {
        user.id = users.length + 1;
        users.push(user);
    }      

}

module.exports = UsersService;