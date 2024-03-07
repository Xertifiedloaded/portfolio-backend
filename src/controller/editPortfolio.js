import Portfolio from "../Schema/data.js";

const editPortfolio = async (req, res) => {
    try {
      const { id } = req.params;
      const { imageGithubUrl, projectName, projectUrl } = req.body;
  console.log(req.body);
      const updatedPortfolio = await Portfolio.findByIdAndUpdate(
        id, 
        {
          imageGithubUrl: imageGithubUrl,
          projectName: projectName,
          projectUrl: projectUrl,
        },
        { new: true } 
      );
  
      if (!updatedPortfolio) {
        return res.status(404).json({ message: 'Portfolio entry not found' });
      }
  
      res.status(200).json({
          message: "Portfolio entry updated successfully",
          updatedPortfolio,
      });
    } catch (error) {
  
      console.error('Error updating portfolio:', error);
      res.status(500).json({ message: "Portfolio entry not updated", error: error.message });
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
