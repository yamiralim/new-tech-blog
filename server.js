const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Set up session-based authentication
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
  cookie: {}
};

// Use session middleware
app.use(session(sess));

// Set up the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Parse request body as JSON
app.use(express.json());

// Parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.use(routes);

// Sync the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
