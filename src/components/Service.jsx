import ServiceInfo from "./ServiceInfo";

export default function Service({ item, matches }) {
  return (
    <div className="service-item" id={item.direction}>
      <div className="pic">
        <img src={matches ? item.mobileUrl : item.desktopUrl} alt="" />
      </div>
      <div className="infobox">
        <ServiceInfo item={item} />
      </div>
    </div>
  );
}
