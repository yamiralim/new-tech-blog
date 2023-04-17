const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    comment_description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    blog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'blog',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'comment',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Comment;
