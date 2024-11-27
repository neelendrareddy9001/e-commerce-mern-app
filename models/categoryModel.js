import mongoose from "mongoose";

const categoryScheema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("Category", categoryScheema);
