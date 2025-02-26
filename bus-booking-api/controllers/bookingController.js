const Booking = require("../models/Booking");
const Bus = require("../models/Bus");

// Book a Bus (User)
exports.bookBus = async (req, res) => {
  try {
    const { busId, seatsBooked } = req.body;
    const bus = await Bus.findById(busId);

    if (!bus || bus.availableSeats < seatsBooked) {
      return res.status(400).json({ message: "Not enough available seats" });
    }

    // Create Booking
    const booking = new Booking({ userId: req.user.id, busId, seatsBooked });
    await booking.save();

    // Update Available Seats
    bus.availableSeats -= seatsBooked;
    await bus.save();

    res.json({ message: "Booking successful!", booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cancel a Booking (User)
exports.cancelBooking = async (req, res) => {
  try {
    const { bookingId } = req.body;
    const booking = await Booking.findById(bookingId);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

  
    const bus = await Bus.findById(booking.busId);
    bus.availableSeats += booking.seatsBooked;
    await bus.save();

   
    await Booking.findByIdAndDelete(bookingId);

    res.json({ message: "Booking cancelled successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
