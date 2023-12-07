import * as dao from "./dao.js";

function CommentRoutes(app) {
    const createComment = async (req, res) => {
        try {
            const comment = await dao.createComment(req.body);
            res.json(comment);
        } catch (error) {
            console.error("Error creating comment:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    };

    const deleteComment = async (req, res) => {
        try {
            const status = await dao.deleteComment(req.params.commentId);
            res.json(status);
        } catch (error) {
            console.error("Error deleting comment:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    };

    const updateComment = async (req, res) => {
        try {
            const { commentId } = req.params;
            const status = await dao.updateComment(commentId, req.body);
            res.json(status);
        } catch (error) {
            console.error("Error updating comment:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    };

    const findCommentsByMovieId = async (req, res) => {
        try {
            const comments = await dao.findCommentsByMovieId(req.params.movieId);
            res.json(comments);
        } catch (error) {
            console.error("Error finding comments:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    };

    const findCommentsByUsername = async (req, res) => {
        try {
            const username = req.params.username;
            const comments = await dao.findCommentsByUsername(username);
            res.json(comments);
        } catch (error) {
            console.error("Error finding comments by username:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    };

    const findCommentById = async (req, res) => {
        const comment = await dao.findCommentById(req.params.id);
        res.json(comment);
    };

    app.get("/api/comments/comment/:id", findCommentById);
    app.post("/api/comments", createComment);
    app.delete("/api/comments/:commentId", deleteComment);
    app.get("/api/comments/:movieId", findCommentsByMovieId);
    app.get("/api/comments/byusername/:username", findCommentsByUsername);
    app.put("/api/comments/:commentId", updateComment);
}
export default CommentRoutes;