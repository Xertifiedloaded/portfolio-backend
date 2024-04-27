import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema(
  {
    projectImage: {
      type: String,
      required: true,
    },
    imageGithubUrl: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['in-progress', 'completed', 'paused']
    },
    projectUrl: {
      type: String,
      required: true,
    },
    tools: {
      type: String,
      required: true,
    },
  },

  { timestamps: true, versionKey: false }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
export default Portfolio;
