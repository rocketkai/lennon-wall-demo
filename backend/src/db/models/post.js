"use strict";

export default (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      value: DataTypes.STRING,
      WallId: DataTypes.INTEGER
    },
    {}
  );

  Post.associate = models => {
    Post.belongsTo(models.Wall);
  };

  return Post;
};
