// details.js
function getUserDetails(user, menu) {
    return `
         ${menu}
        <div class="container mt-5">
            <div class="card">
                <div class="card-body">
                    <h1 class="card-title">User ID: ${user.id}</h1>
                    <p class="card-text">Name: ${user.firstName} ${user.lastName}</p>
                    <p class="card-text">Email: ${user.email}</p>
                    <p class="card-text">Password: ${user.password}</p>
                    <p class="card-text">Date of Birth: ${user.dob}</p>
                    <p class="card-text">Company: ${user.company}</p>
                    <p class="card-text">Phone: ${user.phone}</p>
                </div>
            </div>
        </div>`;
}

module.exports = getUserDetails;