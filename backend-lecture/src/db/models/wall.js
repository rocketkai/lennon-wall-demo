"use strict";
module.exports = (sequelize, DataTypes) => {
  const Wall = sequelize.define(
    "Wall",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Wall.associate = function(models) {
    Wall.hasMany(models.Post);
  };
  return Wall;
};
