const login = require("../../controllers/loginController/login");
const crypto = require("crypto");

const loginHandler = async (req, res) => {
  const { tokenId } = req.body;
  try {
    const user = await login(tokenId);
    if (!user.hasOwnProperty("id"))
      return res.status(404).send("User not found");

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = loginHandler;
