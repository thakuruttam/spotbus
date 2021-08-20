import { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { ROUTE_NUMBERS_FILTER_OPTIONS } from "../Data/route";
import Image from "../Assets/cropped.png";

const AnyReactComponent = ({ text }) => (
  <>
    <div>
      <div className="marker-text">{text}</div>
      <img
        src={Image}
        className="marker-image"
        alt="marker-alt"
        style={{ position: "relative", left: "17px" }}
      />
    </div>
  </>
);

export default function SimpleMap({ route }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const tempData = ROUTE_NUMBERS_FILTER_OPTIONS.find(
      (element) => element.route_id === route
    );
    setData(tempData.route_graph);
  }, [route, data]);

  const defaultProps = {
    center: {
      lat: 42.255674,
      lng: -71.623672,
    },
    zoom: 14.8,
  };

  return (
    <div style={{ height: "72vh", width: "96vw", padding: "2vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {data.length > 0 &&
          data.map((ele) => {
            return (
              <AnyReactComponent
                key={ele.geo_location.latitude}
                lat={ele.geo_location.latitude}
                lng={ele.geo_location.longitude}
                text={ele.school_route_stop_uuid}
              />
            );
          })}
      </GoogleMapReact>
    </div>
  );
}
