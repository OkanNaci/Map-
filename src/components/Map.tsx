import Place from "../api/Place";
import { useState } from "react";

interface MapProps {
  place: Place | null;
}
function Map({ place }: MapProps) {
  const [stat, setStat] = useState<MapProps>();
  return <div>Map</div>;
}
export default Map;
