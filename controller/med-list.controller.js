const medList = async (req, res) => {
  try {
    return res.json({ msg: "ok" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  medList,
};
