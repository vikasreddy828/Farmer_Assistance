const db = require("../db/db");

const FertilizersFun = async (req, res) => {
  try {
    const { Crop_name, Soil_type } = req.query;
    const data = await db.promise().query(
      `select * 
      from fertilizer
      where Crop_name LIKE ? and Soil_Type LIKE ?;`,
      [Crop_name, Soil_type]
    );
    console.log(data);
    const fertilizers = data[0];
    res.status(200).json({ msg: "fertilizers successful", fertilizers });
  } catch (error) {
    console.error("fertilizers query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  FertilizersFun,
};
