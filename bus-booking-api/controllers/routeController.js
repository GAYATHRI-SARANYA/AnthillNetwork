const Route = require("../models/Route");


exports.addRoute = async (req, res) => {
  try {
    const { routeName, startPoint, endPoint, stops } = req.body;
    const route = new Route({ routeName, startPoint, endPoint, stops });
    await route.save();
    res.json({ message: "Route added successfully!", route });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateRoute = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRoute = await Route.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: "Route updated successfully!", updatedRoute });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
