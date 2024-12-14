import CreateEventButton from "./CreateEventButton";
import EventHandler from "./EventHandler";
const SideBar = () => {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <div className="mt-8"></div>
      <EventHandler />
    </aside>
  );
};

export default SideBar;
