const mongoose = require("mongoose");

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connection Established.");
    } catch (error) {
        console.error("Failed to Establish a MongoDB Connection:", error.message);
    }
};