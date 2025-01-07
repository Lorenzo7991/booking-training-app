import rooms from "@/data/rooms.json";
import RoomCard from "@/components/RoomCard";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <>
    <Heading title="Stanze Disponibili" />
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
