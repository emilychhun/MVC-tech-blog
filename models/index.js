  
// import models
let Comment = require('./Comment');
let Post = require('./Post');
let User = require('./User');


// Products belongsTo Comment
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// Comment have many Products
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});
// Products belongToMany Tags (through ProductTag)
Post.belongsTo(User, {
foreignKey: 'user_id'
});
// Tags belongToMany Products (through ProductTag)
Post.hasMany(Comment, {
foreignKey: 'comment_id'
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
  });
  
  // comment have many Products
User.hasMany(Post, {
    foreignKey: 'user_id',
  });


module.exports = {
  Comment,
  Post,
  User,
  
};