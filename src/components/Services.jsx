import { gridData } from "../utils/data";
import Service from "./Service";

export default function Services({ matches }) {
  return (
    <div className="services" id="services">
      {gridData.map((item) => (
        <Service item={item} key={item.direction} matches={matches} />
      ))}
    </div>
  );
}
