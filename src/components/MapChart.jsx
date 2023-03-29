import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Link } from "react-router-dom";
import { MyRouter } from "../router";


const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function MapChart() {
  const [hoveredCountryName, setHoveredCountryName] = useState("");

  return (
    <div >
      <div className="flex justify-center pt-5 text-2xl">{hoveredCountryName}</div>
      <ComposableMap projectionConfig={{
        scale: 130,
      }} height={350} className="bg-gradient-to-b from-transparent via-blue-400 to-transparent pt-20">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo, index) => (
              <Link key={geo.rsmKey} to={MyRouter.detail(geo.properties.name)}>
                <div className="text-red-400">{console.log(geo)}</div>
                <Geography
                  geography={geo}
                  // onClick={(deneme) => console.log({ deneme, geo })}
                  onMouseEnter={() => {
                    setHoveredCountryName(geo.properties.name);
                  }}
                  className="focus:outline-none cursor-pointer duration-300 transition stroke-black hover:fill-blue-500"
                  style={{
                    default: {
                      fill: "white",
                      cursor: "pointer",
                      width: "100px"
                    },
                    hover: {
                      // fill: "#F53",
                      border: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      border: "none",
                    },
                  }}
                />
              </Link>
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
