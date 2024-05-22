const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const adminEmail = process.env.adminEmail || "admin@gmail.com";

    const adminPassword = process.env.adminPassword || "admin";

    if (email === adminEmail && password === adminPassword)
      return res.status(200).send({
        message: "You are Successfully Logged in",
        email,
        password,
      });
    else
      return res.status(401).json({
        message: "Invalid Email or Password",
      });
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .json({ message: "Error in getting admin login", error: err.message });
  }
};

module.exports = {
  adminLogin,
};
