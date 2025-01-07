import rooms from "@/data/rooms.json";
import RoomCard from "@/components/RoomCard";

export default function Home() {
  return (
    <>
      {rooms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room) => (
            <RoomCard key={room.$id} room={room} />
          ))}
        </div>
      ) : (
        <h3>Non ci sono stanze attualmente disponibili...</h3>
      )}
    </>
  );
}
