const db = require("../db/db");

const DiseasesFun = async (req, res) => {
  try {
    const { Crop_name } = req.query;
    const data = await db.promise().query(
      `select * 
      from disease  
      where Crop_name LIKE ?;`,
      [Crop_name]
    );
    console.log(data);
    const diseases = data[0];
    res.status(200).json({ msg: "diseases successful", diseases });
  } catch (error) {
    console.error("diseases query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  DiseasesFun,
};
