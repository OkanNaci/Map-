import type Place from "../api/Place";
import { useState } from "react";
interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}
function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [places, setPlaces] = useState<Place[]>([]);
  const [term, setTerm] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Need to search an api .", term);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-bold">Search</label>
        <input
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          value={term}
          type="text"
          id="term"
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
        />
      </form>
    </div>
  );
}
export default LocationSearch;
