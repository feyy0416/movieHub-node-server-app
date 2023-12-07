import model from "./model.js";

export const createUserLikesMovie = (userId, movieId, movieName) => model.create({ user: userId, movieId: movieId, movieName: movieName});
export const deleteUserLikesMovie = (userId, movieId) => model.deleteOne({ user: userId, movieId: movieId });
// export const findUsersThatLikeMovie = (movieId) => model.find({ movieId: movieId }).populate("user");
export const findMoviesThatUserLikes = (userId) => model.find({ user: userId });
export const findIfUserLikesMovie = (userId, movieId) => model.findOne({ user: userId , movieId: movieId });