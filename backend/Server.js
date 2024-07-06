
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes/ToDoRoutes");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001 || 5173;

// Middleware
app.use(express.json());
app.use(cors());



mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}...`));


// const startServer = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected...");

//     app.use("/api", routes);

//     app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
//   } catch (err) {
//     console.error("Failed to connect to MongoDB", err);
//     process.exit(1);
//   }
// };

// startServer();
