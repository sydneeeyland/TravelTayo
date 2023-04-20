// Package
import { useState } from "react";

// Modules
import Tooltip from "../Modules/Map/Tooltip";
import GeographicMap from "../Modules/Map/GeographicMap";

function Map() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipContent, setTooltipContent] = useState("");

  const handleOutsideClick = (val: any) => {
    console.log(val);
  };

  const handleProvinceClick = (val: any) => {
    console.log(val);
  };

  const handleMouseEnter = (event: any) => {
    console.log(event);
    event.target.setAttribute("fill", "#CCCCCC");
    const targetElement = event.target.parentNode;
    const position = targetElement.getBoundingClientRect();
    setTooltipPosition({
      x: position.x + window.pageXOffset,
      y: position.y + window.pageYOffset,
    });
    const tooltipContent = targetElement.getAttribute("id").replace(/_/g, " ");
    setTooltipContent(tooltipContent);
    setTooltipVisible(true);
  };

  const handleMouseLeave = (event: any) => {
    event.target.setAttribute("fill", "#fff");
    setTooltipVisible(false);
  };

  return (
    <>
      <Tooltip
        visible={tooltipVisible}
        position={tooltipPosition}
        content={tooltipContent}
      />
      <GeographicMap
        handleOutsideClick={handleOutsideClick}
        handleProvinceClick={handleProvinceClick}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    </>
  );
}

export default Map;
