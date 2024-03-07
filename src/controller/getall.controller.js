
import Portfolio from "../Schema/data.js";
import { errorResMsg, successResMsg } from "../middleware/errorHandler.js";

const getAllPortfolioEntries = async (req, res) => {
  try {
    // Fetch portfolio entries sorted by creation date in descending order
    const portfolioEntries = await Portfolio.find().sort({ createdAt: -1 });

    return successResMsg(res, 200, {
      message: "All portfolio entries fetched",
      portfolioEntries,
    });
  } catch (error) {
    return errorResMsg(res, 500, "Error fetching portfolio entries");
  }
};

export { getAllPortfolioEntries };
