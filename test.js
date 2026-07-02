require("dotenv").config();
const mongoose = require("mongoose");

async function test() {
  try {
    console.log("Using URI:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ Connected Successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error:");
    console.error(err);
    process.exit(1);
  }
}

test();