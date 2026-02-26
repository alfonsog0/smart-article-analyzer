import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true,
      unique: true
    },
    source: {
      type: String
    },
    publishedAt: {
      type: Date
    },
    summary: {
      type: String,
      required: true
    },
    sentiment: {
      type: String,
      enum: ["positive", "neutral", "negative"],
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Analysis = mongoose.model("Analysis", analysisSchema);

export default Analysis;