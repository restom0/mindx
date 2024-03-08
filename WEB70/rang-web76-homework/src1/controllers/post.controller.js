class PostController {
  async getPostsByUserId(req, res, next) {
    const userId = req.params.userId;
    const user = users.find((user) => user.id === userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userPosts = posts.filter((post) => post.userId === userId);

    if (userPosts.length === 0) {
      return res.status(404).json({ message: "No posts found for the user" });
    }

    res.status(200).json({ data: userPosts });
  }
  async getPost(req, res, next) {
    const userId = req.query.userId;
    const postId = req.query.postId;
    const isPublic = req.query.isPublic;

    // thêm validation cho dữ liệu đầu vào
    // implement ....

    const post = posts.find(
      (post) =>
        post.userId === userId ||
        post.postId === postId ||
        post.isPublic === isPublic
    );
    const filteredPosts = posts.filter(
      (post) =>
        (userId ? post.userId === userId : true) &&
        (postId ? post.postId === postId : true) &&
        (isPublic !== undefined ? post.isPublic === isPublic : true)
    );

    if (filteredPosts.length === 0) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (post === undefined || post === null) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ data: post });
  }
  async getPostWithisPublicTrue(req, res, next) {
    const publicPosts = posts.filter((post) => post.isPublic === true);

    if (publicPosts.length === 0) {
      return res.status(404).json({ message: "No public posts found" });
    }
    res.status(200).json({ data: publicPosts });
  }
  async createPostByUserId(req, res, next) {
    const userId = req.params.userId;
    const content = req.body.content;
    const user = users.find((user) => user.id === userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!content || content.length === 0) {
      return res.status(404).json({ message: "Content not found" });
    }
    const newPost = {
      userId,
      postId: crypto.randomUUID(),
      content,
      createdAt: new Date().toISOString(),
      isPublic: req.body.isPublic || false,
    };
    posts.push(newPost);
    const postIndex = posts.findIndex((post) => post.postId === newPost.postId);
    res.status(200).json({ data: posts[postIndex] });
  }
  async updatePostByPostId(req, res, next) {
    const postId = req.body.postId;
    const updatedContent = req.body.content;
    const postIndex = posts.findIndex((post) => post.postId === postId);

    if (postIndex === -1) {
      return res.status(404).json({ message: "Post not found" });
    }

    posts[postIndex].content = updatedContent;

    res.status(200).json({ data: posts[postIndex] });
  }
}
module.exports = new PostController();
