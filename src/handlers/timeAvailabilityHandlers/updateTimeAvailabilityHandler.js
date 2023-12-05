const updateTimeAvailability = require("../../controllers/timeAvailabilityControllers/updateTimeAvailability");

const updateTimeAvailabilityHandler = async (req, res) => {
  const { id } = req.params;
  const { day, initialHour, finalHour } = req.body;

  try {
    const updatedTimeAvailability = await updateTimeAvailability(
      id,
      day,
      initialHour,
      finalHour
    );
    if (updatedTimeAvailability.code === 201) {
      res.status(201).json({
        message: updatedTimeAvailability.message,
        data: updatedTimeAvailability.data,
      });
    } else {
      res
        .status(updatedTimeAvailability.code)
        .json({ error: updatedTimeAvailability.error });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateTimeAvailabilityHandler;
