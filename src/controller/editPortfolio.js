import Portfolio from "../Schema/data.js";
import cloudinary from "../middleware/cloudinary/cloudinary.js";


const editPortfolioEntry = async (req, res) => {
  try {
    const { id } = req.params; 
    const {
      imageGithubUrl,
      tools,
      description,
      status,
      projectName,
      projectUrl,
    } = req.body;

    let updatedFields = {
      imageGithubUrl,
      projectName,
      projectUrl,
      tools,
      description,
      status,
    };

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      updatedFields.projectImage = result.secure_url;
    }

    const updatedPortfolioEntry = await Portfolio.findByIdAndUpdate(
      id,
      updatedFields,
      { new: true }
    );

    if (!updatedPortfolioEntry) {
      return res.status(404).json({ message: "Portfolio entry not found" });
    }

    res.status(200).json(updatedPortfolioEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};










const deletePortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    const portfolioEntry = await Portfolio.findById(id);
    if (!portfolioEntry) {
      return res.status(404).json({ message: "Portfolio entry not found" });
    }
    await Portfolio.findByIdAndDelete(id);

    res.status(200).json({
      message: "Portfolio entry deleted successfully",
      portfolioEntry,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { editPortfolioEntry, deletePortfolio };
