let posts = [];
let nextId = 1;

const getAllPosts = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: posts.length,
      data: posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

const getPostById = (req, res) => {
  try {
    const { id } = req.params;
    const post = posts.find(p => p.id === parseInt(id));

    if (!post) {
      return res.status(404).json({
        success: false,
        message: `Post with id ${id} not found`
      });
    }

    res.status(200).json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

const createPost = (req, res) => {
  try {
    const { title, content, category } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: 'Title and content are required'
      });
    }

    const newPost = {
      id: nextId++,
      title,
      content,
      category: category || 'uncategorized',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    posts.push(newPost);

    res.status(201).json({
      success: true,
      message: 'Post created successfully',
      data: newPost
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

const updatePost = (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category } = req.body;

    const postIndex = posts.findIndex(p => p.id === parseInt(id));

    if (postIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `Post with id ${id} not found`
      });
    }

    if (title !== undefined) posts[postIndex].title = title;
    if (content !== undefined) posts[postIndex].content = content;
    if (category !== undefined) posts[postIndex].category = category;
    posts[postIndex].updatedAt = new Date().toISOString();

    res.status(200).json({
      success: true,
      message: 'Post updated successfully',
      data: posts[postIndex]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

const deletePost = (req, res) => {
  try {
    const { id } = req.params;
    const postIndex = posts.findIndex(p => p.id === parseInt(id));

    if (postIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `Post with id ${id} not found`
      });
    }

    const deletedPost = posts.splice(postIndex, 1)[0];

    res.status(200).json({
      success: true,
      message: 'Post deleted successfully',
      data: deletedPost
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
