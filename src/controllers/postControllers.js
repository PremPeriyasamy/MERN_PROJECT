import Post from "../model/postmodel.js";
// GET POSTS
const getposts = async (req, res) => {
  try {
    const posts = await Post.find({});
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

// CREATE Post
const createpost = async (req, res) => {
  const { title, description } = req.body;
  console.log(title, description);
  try {
    const post = await Post.create({ title, description });
    res.status(201).json({ message: "post created sucessfully" });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

// GET SINGLE POST by id
const getsinglepost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid post ID" });
    }
    res.status(500).json({ message: message.error });
  }
};

// UPDATE POST
const updatepost = async (req, res) => {
  const { id } = req.params;
  try {
    const { title, description } = req.body;
    const post = await Post.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid post ID" });
    }
    res.status(500).json({ message: message.error });
  }
};

// DELETE POST
const deletepost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid post ID" });
    }
    res.status(500).json({ message: message.error });
  }
};

export { getposts, createpost, getsinglepost, updatepost, deletepost };
