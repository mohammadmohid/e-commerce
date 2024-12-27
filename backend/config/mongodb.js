const mongoose= require("mongoose")

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://Uzair:uzair234567@cluster0.00ujx.mongodb.net/`);
        console.log("MongoDB connected");
    } 
    catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = {
    connectToMongoDB
};