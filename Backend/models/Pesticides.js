const db = require("../db/db");

const PesticidesFun = async (req, res) => {
  try {
    const { Crop_name, Disease_name } = req.query;
    const data = await db.promise().query(
      `select * 
        from pesticide 
        where Crop_name LIKE ? and Disease_name LIKE ?;`,
      [Crop_name, Disease_name]
    );
    console.log(data);
    const pesticides = data[0];
    res.status(200).json({ msg: "pesticides successful", pesticides });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  PesticidesFun,
};
