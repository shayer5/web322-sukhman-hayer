// list.js

const perPage = 25; // Number of users to display
const userList = document.getElementById('userList');

async function getUsers() {
    const response = await fetch('./fakeUsers.json');
    const users = await response.json();
    return users;
}

function renderUserList(users) {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '';

    const usersToDisplay = users.slice(0, perPage);

    usersToDisplay.forEach((user) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="/detail/${user.id}">${user.id}</a></td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td>${user.company}</td>
            <td>${user.phone}</td>
        `;
        tableBody.appendChild(row);
    });

 
}

getUsers().then((users) => {
    renderUserList(users);
});