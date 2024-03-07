import Portfolio from "../Schema/data.js";


const getAllPortfolioEntries = async (req, res) => {
  try {

    const portfolioEntries = await Portfolio.find();

    res.status(200).json(portfolioEntries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllPortfolioEntries };