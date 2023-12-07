import model from "./model.js";

export const createUserFollowsUser = (userId, followedUser, username) =>
    model.create({ user: userId, followedUser: followedUser, username: username });
export const deleteUserFollowsUser = (userId, followedUser) => model.deleteOne({ user: userId, followedUser: followedUser });
export const findFollowers = (followedUser) => model.find({ followedUser: followedUser });
export const findFollows = (userId) => model.find({ user: userId });
export const findIfUserFollowedUser = (userId, followedUser) => model.findOne({ user: userId, followedUser: followedUser });