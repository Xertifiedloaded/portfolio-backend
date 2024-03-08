import Portfolio from "../Schema/data.js";
import cloudinary from "../middleware/cloudinary/cloudinary.js";
const editPortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    const { projectName, tools, projectUrl, projectImage, imageGithubUrl } = req.body;
    const result = await cloudinary.uploader.upload(req.file.path);
    const updatedPortfolio = await Portfolio.findByIdAndUpdate(
      id,
      {
        imageGithubUrl: imageGithubUrl,
        projectName: projectName,
        projectUrl: projectUrl,
        tools: tools,
        projectImage: result.secure_url,
      },
      { new: true }
    );

    if (!updatedPortfolio) {
      return res.status(404).json({ message: "Portfolio entry not found" });
    }

    res.status(200).json({
      message: "Portfolio entry updated successfully",
      updatedPortfolio,
    });
  } catch (error) {
    console.error("Error updating portfolio:", error);
    res
      .status(500)
      .json({ message: "Portfolio entry not updated", error: error.message });
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

export { editPortfolio, deletePortfolio };
