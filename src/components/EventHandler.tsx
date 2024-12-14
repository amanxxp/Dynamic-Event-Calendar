import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const EventHandler = () => {
  const { daySelected, events, setEvents }: any = useContext(GlobalContext);

  const [searchKeyword, setSearchKeyword] = useState<string>(""); // State for keyword
  const [editingEventId, setEditingEventId] = useState<number | null>(null);
  const [editedEvent, setEditedEvent] = useState<any>({
    eventName: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  // Filter events for the selected day
  const eventsForDay = events.filter(
    (event: any) => event.date === daySelected.format("DD-MM-YY")
  );

  // Apply keyword filter
  const filteredEvents = eventsForDay.filter((event: any) =>
    event.eventName.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  // Save Edited Event
  const handleSaveEdit = () => {
    const updatedEvents = events.map((event: any) =>
      event.id === editingEventId ? { ...event, ...editedEvent } : event
    );
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents)); // Persist updates
    setEditingEventId(null); // Exit edit mode
  };

  // Delete Event
  const handleDelete = (id: number) => {
    const updatedEvents = events.filter((event: any) => event.id !== id);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents)); // Update local storage
  };

  // Function to determine event color based on category
  const getEventColor = (category: string) => {
    switch (category) {
      case "work":
        return "bg-red-300 text-red-700"; // Red for work
      case "personal":
        return "bg-blue-200 text-blue-700"; // Blue for personal
      case "others":
        return "bg-green-100 text-green-700"; // Green for others
      default:
        return "bg-blue-100 text-gray-700"; // Default color
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">
        Events for {daySelected.format("DD MMM YYYY")}
      </h2>
      {/* Search Input */}
      <div className="flex justify-center items-center">
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="w-full border rounded p-2 mb-4 border-black"
          placeholder="Search events by keyword"
        />
        <div
          className="material-icons-outlined text-gray-600 cursor-pointer mb-4 p-1 ml-2 border-black border"
          title="Search events"
        >
          search
        </div>
      </div>
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event: any) => (
          <div
            key={event.id}
            className={`p-2 mb-2 rounded shadow ${getEventColor(
              event.category
            )}`}
          >
            {editingEventId === event.id ? (
              // Edit Form
              <div>
                <input
                  type="text"
                  value={editedEvent.eventName}
                  onChange={(e) =>
                    setEditedEvent({
                      ...editedEvent,
                      eventName: e.target.value,
                    })
                  }
                  className="w-full border rounded p-1 mb-2"
                  placeholder="Event Name"
                />
                <input
                  type="time"
                  value={editedEvent.startTime}
                  onChange={(e) =>
                    setEditedEvent({
                      ...editedEvent,
                      startTime: e.target.value,
                    })
                  }
                  className="w-full border rounded p-1 mb-2"
                />
                <input
                  type="time"
                  value={editedEvent.endTime}
                  onChange={(e) =>
                    setEditedEvent({ ...editedEvent, endTime: e.target.value })
                  }
                  className="w-full border rounded p-1 mb-2"
                />
                <textarea
                  value={editedEvent.description}
                  onChange={(e) =>
                    setEditedEvent({
                      ...editedEvent,
                      description: e.target.value,
                    })
                  }
                  className="w-full border rounded p-1 mb-2"
                  placeholder="Description"
                />
                <button
                  onClick={handleSaveEdit}
                  className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingEventId(null)}
                  className="bg-gray-400 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            ) : (
              // Display Event Details
              <div>
                <div className="flex items-center">
                  <h3 className="text-md font-semibold">{event.eventName}</h3>
                  {/* Category Color Indicator */}
                  <div
                    className={`w-3 h-3 rounded-full ml-2 ${getEventColor(
                      event.category
                    )}`}
                  />
                </div>
                <p className="text-sm">
                  {event.startTime} - {event.endTime}
                </p>
                <p className="text-xs text-gray-500">{event.description}</p>
                <button
                  onClick={() => {
                    setEditingEventId(event.id);
                    setEditedEvent(event); // Pre-fill edit form
                  }}
                  className="text-green-500 font-bold text-xs underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="text-red-500 font-bold text-xs underline"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No events match your search.</p>
      )}
    </div>
  );
};

export default EventHandler;
