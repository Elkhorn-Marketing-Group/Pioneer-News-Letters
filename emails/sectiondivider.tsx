interface DividerProps {
  backgroundColor?: string;
  sectionHeading?: string;
}

export default function SectionDivider({
  backgroundColor = "#084A7D",
  sectionHeading = "",
}: DividerProps) {
  return (
    <div
      data-layer="SectionDivider"
      className="Sectiondivider"
      style={{
        width: 640,
        height: 40,
        paddingTop: 0,
        paddingBottom: 0,
        background: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        display: "inline-flex",
        alignSelf: "stretch",
      }}
    >
      <div
        data-layer="Sectiontitle"
        className="Sectiontitle"
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 24,
          fontFamily: "Guardian Sans",
          fontWeight: "400",
          textTransform: "uppercase",
          lineHeight: 20,
          wordWrap: "break-word",
          padding: "20px",
        }}
      >
        {sectionHeading}
      </div>
    </div>
  );
}
