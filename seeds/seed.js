const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const blogData = require('./blogData.json');
const commentData = require('./commentData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    for (const blog of blogData) {
      await Blog.create({
        ...blog,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }

    const comments = await Comment.bulkCreate(commentData, {
      returning: true,
    });

    console.log('Database seeding completed successfully.');
  } catch (error) {
    console.error('Database seeding failed:', error);
  } finally {
    process.exit(0);
  }
};

seedDatabase();
