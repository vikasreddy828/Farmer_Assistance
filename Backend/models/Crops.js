const db = require("../db/db");

const CropsFun = async (req, res) => {
  try {
    const { Soil_type } = req.query;
    const data = await db.promise().query(
      `select c.Crop_name , c.Sowing_Season , c.Duration_of_crop , c.Harvesting_Season  
      from crop c , soil_type s 
      where c.Crop_name = s.Crop_Name and Soil_Type LIKE ?;`,
      [Soil_type]
    );
    console.log(data);
    const crops = data[0];
    res.status(200).json({ msg: "crops successful", crops });
  } catch (error) {
    console.error("crops query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  CropsFun,
};
