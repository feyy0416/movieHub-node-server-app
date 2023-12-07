import model from "./model.js";
export const createComment = (comment) => model.create(comment);
export const deleteComment = (commentId) => model.deleteOne({ _id: commentId });
export const findCommentsByMovieId = (movieId) => model.find({ movieId: movieId });
export const findCommentsByUsername = (username) => model.find({ username: username });
export const findCommentById = (id) => model.findById(id);
export const updateComment = (commentId, comment) => model.updateOne({ _id: commentId }, { $set: comment });

// export const createUser = (user) => model.create(user);
// export const findAllUsers = () => model.find();
// export const findUserById = (userId) => model.findById(userId);
// export const findUserByUsername = (username) =>model.findOne({ username: username });
// export const findUserByCredentials = (username, password) => model.findOne({ username, password });
// export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user });
// export const deleteUser = (userId) => model.deleteOne({ _id: userId });