class AuthenticationService {
    static authenticate(username, password) {
        const auth = { isAutheticated: false }
if (username === "admin" && password === "password") {
    return (auth.isAuthenticated = true);
}
  return auth;
}

module.exports = AuthenticationService;
