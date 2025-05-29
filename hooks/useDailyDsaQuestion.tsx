import axios from "axios";
import { useEffect, useState } from "react";

const useDailyDsaQuestion = async () => {
  const [data, setData] = useState({});
  const fetchQuestion = async () => {
    try {
      const url = "https://us-central1-neetcode-dd170.cloudfunctions.net/getProblemListFunction";

      const response = await axios.post(url, { data: {} });
      return response.data.results;
    } catch (error) {
      console.error("Error fetching problem list:", error);
      throw error;
    }
  };
  useEffect(() => {
    setData(fetchQuestion());
  }, []);

  return data;
};

export default useDailyDsaQuestion;
