import React, { useState } from "react";

function Appointment() {
  // Sample list of professors
  const professors = [
    "Dr. John Smith - Mathematics",
    "Prof. Emily Johnson - Physics",
    "Dr. Robert Brown - Computer Science",
    "Prof. Olivia Davis - Chemistry",
  ];

  // State for form inputs
  const [selectedProfessor, setSelectedProfessor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [appointments, setAppointments] = useState([]); // Store booked appointments

  // Function to handle booking
  const bookAppointment = () => {
    if (selectedProfessor && date && time && phone) {
      const newAppointment = {
        professor: selectedProfessor,
        date,
        time,
        phone,
      };

      setAppointments([...appointments, newAppointment]);

      // Clear input fields after booking
      setSelectedProfessor("");
      setDate("");
      setTime("");
      setPhone("");
    } else {
      alert("Please fill all fields before booking.");
    }
  };

  return (
    <div className="container">
      <h2>Book an Appointment</h2>

      {/* Professor Selection */}
      <div className="mb-3">
        <label className="form-label">Select Professor</label>
        <select
          className="form-control"
          value={selectedProfessor}
          onChange={(e) => setSelectedProfessor(e.target.value)}
        >
          <option value="">-- Select a Professor --</option>
          {professors.map((professor, index) => (
            <option key={index} value={professor}>{professor}</option>
          ))}
        </select>
      </div>

      {/* Date Selection */}
      <div className="mb-3">
        <label className="form-label">Select Date</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Time Selection */}
      <div className="mb-3">
        <label className="form-label">Select Time</label>
        <input
          type="time"
          className="form-control"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      {/* Phone Number */}
      <div className="mb-3">
        <label className="form-label">Enter Your Phone Number</label>
        <input
          type="tel"
          className="form-control"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/* Book Appointment Button */}
      <button className="btn btn-primary" onClick={bookAppointment}>
        Book Appointment
      </button>

      {/* List of Booked Appointments */}
      {appointments.length > 0 && (
        <div className="mt-4">
          <h3>Your Appointments</h3>
          <ul className="list-group">
            {appointments.map((appointment, index) => (
              <li key={index} className="list-group-item">
                <strong>{appointment.professor}</strong><br />
                Date: {appointment.date} | Time: {appointment.time}<br />
                Contact: {appointment.phone}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Appointment;
