import type Place from "../api/Place";
import { useState, Fragment } from "react";
import { search } from "../api/search";
interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}
function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [places, setplaces] = useState<Place[]>([]);
  const [term, setTerm] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const results = await search(term);
    setplaces(results);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-bold ">Search</label>
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
      <h1 className="font-bold mt-6">Found Locations</h1>
      <div className="grid grind-cols-[1fr_40px] gap-2 mt-2 items-center">
        {places.map((place) => {
          return (
            <Fragment key={place.id}>
              <p className="text-sm">{place.name}</p>
              <button
                className="bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded "
                onClick={() => {
                  onPlaceClick(place);
                }}
              >
                Go
              </button>
              <div className="border-b w-full col-span-2" />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
export default LocationSearch;
