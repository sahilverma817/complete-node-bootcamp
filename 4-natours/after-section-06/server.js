const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
