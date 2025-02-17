require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const {productRoutes} = require("./routes/ProductListingRoute")

connection();

app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server Started on Port ${process.env.PORT}`);
  });

