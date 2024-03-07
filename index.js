
import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./src/config/database.js";

dotenv.config(); 

const PORT = process.env.PORT || 2000;
const DATABASE_URL = process.env.DATABASE_URL;

const server = app.listen(PORT, async () => {
  try {
    await connectDB(DATABASE_URL);
    console.log(`Server is running on port http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
