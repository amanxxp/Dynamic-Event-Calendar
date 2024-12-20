import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const EventModal = () => {
  const { setShowEventModal, daySelected, events, setEvents } = useContext(GlobalContext);

  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("work"); // Default category

  const handleSaveEvent = () => {
    const newEvent = {
      id: Date.now(),
      date: daySelected.format("DD-MM-YY"),
      eventName,
      startTime,
      endTime,
      description,
      category, // Include category
    };
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setShowEventModal(false);
  };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/3 p-4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">drag_handle</span>
          <button onClick={() => setShowEventModal(false)}>
            <span className="material-icons-outlined text-gray-400">close</span>
          </button>
        </header>
        <div className="p-4">
          {/* Event Name */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Event Name</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Enter event name"
            />
          </div>
          {/* Start Time */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Start Time</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
          {/* End Time */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">End Time</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Description (optional)</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Enter event description"
            />
          </div>
          {/* Category */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="others">Others</option>
            </select>
          </div>
          {/* Save Button */}
          <button
            type="button"
            onClick={handleSaveEvent}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventModal;
