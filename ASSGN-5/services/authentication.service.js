class AuthenticationService {
    static authenticate(username, password) {
        const authentication = { isAutheticated: false };

    if (username === "admin" && password === "password") {
        return (authentication.isAuthenticated = true);
    }
        return authentication;
    }
}

module.exports = AuthenticationService;
