const express = require("express");
const app = express();
const cors = require('cors');
const router = require("./router/auth-router");
const connectDb = require("./models/db");

const allowedOrigins = [
  'http://localhost:5173',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api/auth', router);

connectDb().then(() => {
    const port = 3000;
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  });
