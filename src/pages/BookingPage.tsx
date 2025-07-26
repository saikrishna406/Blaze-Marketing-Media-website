import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TimeSlot {
  id: number;
  time: string;
  available: boolean;
}

interface BookingDate {
  date: Date;
  slots: TimeSlot[];
}

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    topic: ''
  });

  const navigate = useNavigate();

  const generateAvailableSlots = (): BookingDate[] => {
    const slots: BookingDate[] = [];
    const startDate = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);

      const timeSlots: TimeSlot[] = [];
      for (let hour = 9; hour < 17; hour++) {
        timeSlots.push({
          id: hour,
          time: `${hour}:00`,
          available: Math.random() > 0.3
        });
        timeSlots.push({
          id: hour + 0.5,
          time: `${hour}:30`,
          available: Math.random() > 0.3
        });
      }

      slots.push({
        date: date,
        slots: timeSlots
      });
    }

    return slots;
  };

  const availableSlots = generateAvailableSlots();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSlotSelect = (slot: TimeSlot) => {
    if (slot.available) {
      setSelectedSlot(slot);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) return;

    try {
      const bookingData = {
        ...bookingDetails,
        date: selectedDate.toISOString(),
        time: selectedSlot.time
      };

      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to book consultation');
      }

      const result = await response.json();
      console.log('Booking successful:', result);

      alert('Booking confirmed! We will send you a confirmation email shortly.');
      navigate('/');

    } catch (error: any) {
      console.error('Booking error:', error);
      alert(`Booking failed: ${error.message}`);
    }
  };

  return (
    <main className="min-h-screen bg-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Book a Consultation
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Schedule a 30-minute call with our team to discuss your project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendar and Time Slots */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900/50 p-6 rounded-lg border border-gray-800"
          >
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-500">
                <Calendar className="text-orange-500" />
                Select Date
              </h2>
              <div className="grid grid-cols-7 gap-2">
                {availableSlots.map((bookingDate) => (
                  <button
                    key={bookingDate.date.toISOString()}
                    onClick={() => handleDateSelect(bookingDate.date)}
                    className={`p-4 rounded-lg border ${selectedDate?.toDateString() === bookingDate.date.toDateString()
                      ? 'border-orange-500 bg-orange-500/20'
                      : 'border-gray-800 hover:border-orange-500/50'}`}
                  >
                    <span className="block text-sm text-white">
                      {bookingDate.date.toLocaleDateString('en-US', { weekday: 'short' })}
                    </span>
                    <span className="block text-lg font-bold text-white">
                      {bookingDate.date.getDate()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {selectedDate && (
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-500">
                  <Clock className="text-orange-500" />
                  Available Times
                </h2>
                <div className="grid grid-cols-3 gap-2">
                  {availableSlots
                    .find(bookingDate => bookingDate.date.toDateString() === selectedDate.toDateString())
                    ?.slots.map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => handleSlotSelect(slot)}
                        disabled={!slot.available}
                        className={`p-3 rounded-lg border ${!slot.available
                          ? 'border-gray-800 bg-gray-800/50 text-gray-600 cursor-not-allowed'
                          : selectedSlot?.id === slot.id
                            ? 'border-orange-500 bg-orange-500/20 text-white'
                            : 'border-gray-800 hover:border-orange-500/50 text-white'}`}
                      >
                        {slot.time}
                      </button>
                    ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900/50 p-6 rounded-lg border border-gray-800"
          >
            <h2 className="text-xl font-bold mb-6 text-orange-500">Your Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={bookingDetails.name}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={bookingDetails.email}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })}
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={bookingDetails.phone}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Topic of Discussion
                </label>
                <textarea
                  value={bookingDetails.topic}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, topic: e.target.value })}
                  rows={4}
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={!selectedDate || !selectedSlot}
                className={`w-full py-3 rounded-md font-semibold transition-colors duration-300
                  ${!selectedDate || !selectedSlot
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-orange-600 hover:bg-orange-700 text-white'}`}
              >
                Confirm Booking
              </button>
            </form>
          </motion.div>
        </div>

        {/* Confirmation Section */}
        {selectedDate && selectedSlot && (
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-12 bg-gray-900/50 p-6 rounded-lg border border-gray-800 text-center"
    >
      <Check className="text-green-500 w-12 h-12 mx-auto mb-4" />
      <h3 className="text-2xl font-bold mb-2 text-white">Booking Summary</h3>
      <p className="text-gray-300">
        You are booking a consultation for:
      </p>
      <p className="text-lg font-semibold text-orange-500 mt-2">
        {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        {' at '}
        {selectedSlot.time}
      </p>
    </motion.div>
  )}
</div>
</main>
  );
}