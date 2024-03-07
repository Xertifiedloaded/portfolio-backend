import Portfolio from '../Schema/data.js';
import  cloudinary from '../middleware/cloudinary/cloudinary.js';



const createPortfolioEntry = async (req, res) => {
  try {

    const result = await cloudinary.uploader.upload(req.file.path);
    const { imageGithubUrl,tools, projectName, projectUrl } = req.body;
    const portfolioEntry =  await Portfolio.create({
      projectImage: result.secure_url,
      imageGithubUrl,
      projectName,
      projectUrl,
      tools
    });

    const savedEntry = await portfolioEntry.save();

    res.status(201).json(savedEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default createPortfolioEntry