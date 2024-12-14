import CreateEventButton from "./CreateEventButton";
import EventHandler from "./EventHandler";
const SideBar = () => {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <div className="mt-4 mb-2 flex flex-col gap-1">
        <div>
          <span className="bg-red-300 rounded-md pl-1">Red </span>
          for work
        </div>
        <div>
          <span className="bg-blue-200 rounded-md pl-1">Blue </span>
          for personal
        </div>
        <div>
          <span className="bg-green-100 rounded-md pl-1">Green </span>
          for others
        </div>
      </div>
      <EventHandler />
    </aside>
  );
};

export default SideBar;
