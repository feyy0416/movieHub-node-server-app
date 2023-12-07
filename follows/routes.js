import * as dao from "./dao.js";

function FollowRoutes(app) {

  const createUserFollowsUser = async (req, res) => {
    const userId = req.params.userId;
    const followedUser = req.params.followedUser;
    const username = req.params.username;
    const follows = await dao.createUserFollowsUser(userId, followedUser, username);
    res.json(follows);
  };
  const deleteUserFollowsUser = async (req, res) => {
    try {
      const userId = req.params.userId;
      const followedUser = req.params.followedUser;
      const status = await dao.deleteUserFollowsUser(userId, followedUser);
      res.json(status);
    } catch (error) {
      console.error("Error deleting:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const findFollows = async (req, res) => {
    const userId = req.params.userId;
    const follows = await dao.findFollows(userId);
    res.json(follows);
  };

  const findFollowers = async (req, res) => {
    const followedUser = req.params.followedUser;
    const follows = await dao.findFollowers(followedUser);
    res.json(follows);
  };

  const findIfUserFollowedUser = async (req, res) => {
    const userId = req.params.userId;
    const followedUser = req.params.followedUser;
    const status = await dao.findIfUserFollowedUser(userId, followedUser);
    res.json(status);
  }

  app.post("/api/users/:userId/:username/follows/:followedUser", createUserFollowsUser);
  app.delete("/api/users/:userId/follows/:followedUser", deleteUserFollowsUser);
  app.get("/api/users/:userId/follows", findFollows);
  app.get("/api/users/:followedUser/followed", findFollowers);
  app.get("/api/users/:userId/follows/:followedUser", findIfUserFollowedUser);
}

export default FollowRoutes;