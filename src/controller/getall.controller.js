import Portfolio from "../Schema/data.js";
import { errorResMsg, successResMsg } from "../middleware/errorHandler.js";

const getAllPortfolioEntries = async (req, res) => {
  try {
    const portfolioEntries = await Portfolio.find();
    return successResMsg(res, 200, {
      message: "all portfolio fetched",
      portfolioEntries,
    });
  } catch (error) {
   return  errorResMsg(res,500,"error fetching portfolio")

  }
};

export { getAllPortfolioEntries };
