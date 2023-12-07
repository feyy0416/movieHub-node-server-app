import * as dao from "./dao.js";

function LikeRoutes(app) {

  const createUserLikesMovie = async (req, res) => {
    const userId = req.params.userId;
    const movieId = req.params.movieId;
    const movieName = req.params.movieName;
    const likes = await dao.createUserLikesMovie(userId, movieId, movieName);
    res.json(likes);
  };
  const deleteUserLikesMovie = async (req, res) => {
    try {
      const userId = req.params.userId;
      const movieId = req.params.movieId;
      const status = await dao.deleteUserLikesMovie(userId, movieId);
      res.json(status);
    } catch (error) {
      console.error("Error deleting like:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const findMoviesThatUserLikes = async (req, res) => {
    const userId = req.params.userId;
    const likes = await dao.findMoviesThatUserLikes(userId);
    res.json(likes);
  };

  const findIfUserLikesMovie = async (req, res) => {
    const userId = req.params.userId;
    const movieId = req.params.movieId;
    const status = await dao.findIfUserLikesMovie(userId, movieId);
    res.json(status);
  }

  // app.get("/api/likes", findAllLikes);
  app.post("/api/users/:userId/likes/:movieId/:movieName", createUserLikesMovie);
  app.delete("/api/users/:userId/likes/:movieId", deleteUserLikesMovie);
  app.get("/api/users/:userId/likes", findMoviesThatUserLikes);
  app.get("/api/users/:userId/likes/:movieId", findIfUserLikesMovie);
}

export default LikeRoutes;