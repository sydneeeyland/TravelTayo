function Tooltip({ visible, position, content }: any) {
  if (!visible) return null;

  const tooltipStyle = {
    top: position.y,
    left: position.x,
  };

  return (
    <span style={tooltipStyle} className="map-tooltip">
      {content}
    </span>
  );
}

export default Tooltip;
