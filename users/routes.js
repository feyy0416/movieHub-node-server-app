import * as dao from "./dao.js";
function UserRoutes(app) {

  const login = async (req, res) => {
    console.log("Sign in");
    const { username, password } = req.body;
    const currentUser = await dao.findUserByCredentials(username, password);
    if (!currentUser) {
      // Handle incorrect credentials
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    req.session['currentUser'] = currentUser;
    res.json(currentUser);
  };

  const account = async (req, res) => {
    res.json(req.session['currentUser']);
  };

  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body);
    const currentUser = await dao.findUserById(userId);
    req.session['currentUser'] = currentUser;
    res.json(status);
  };

  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };

  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };
  app.post("/api/users", createUser);

  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };

  const deleteUser = async (req, res) => {
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
  };

  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(
      req.body.username);
    if (user) {
      return res.status(400).json(
        { message: "Username already taken" });
    }
    const currentUser = await dao.createUser(req.body);
    req.session['currentUser'] = currentUser;
    res.json(currentUser);
  };

  const logout = (req, res) => {
    req.session.destroy();
    res.json(200);
  };
  
  const checkLoginStatus = (req, res) => {
    const loggedIn = req.session && req.session['currentUser'];
    if (loggedIn) {
      console.log("login status checked as true");
    }
    res.json({ isLoggedIn: loggedIn });
  };
  
  const findUserByUsername = async (req, res) => {
    const user = await dao.findUserByUsername(req.params.username);
    res.json(user);
  }

  app.get("/api/users/check-login", checkLoginStatus);

  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.get("/api/users/byUsername/:username", findUserByUsername);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/login", login);
  app.post("/api/users/logout", logout);
  app.post("/api/users/account", account);
  // app.get('/checkLoginStatus', checkLoginStatus);
}
export default UserRoutes;