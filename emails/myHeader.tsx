import SectionDivider from "./sectiondivider";

interface HeaderProps {
  headerImg?: string;
  letterTitle?: string;
  letterHeading?: string;
  letterIntro?: string;
}

export default function Header({
  headerImg = "",
  letterTitle = "",
  letterHeading = "",
  letterIntro = "",
}: HeaderProps) {
  return (
    <div
      style={{
        width: 640,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 30,
        display: "inline-flex",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          position: "relative",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          display: "flex",
          gap: 0,
        }}
      >
        <div
          style={{ alignSelf: "stretch", height: 35, background: "#084A7D" }}
        />
        <img
          style={{
            alignSelf: "stretch",
            height: 310,
            display: "block",
            margin: 0,
          }}
          src={headerImg}
        />
        <div
          style={{
            alignSelf: "stretch",
            width: "100%",
            margin: 0,
            display: "block",
          }}
        >
          <SectionDivider sectionHeading={letterTitle} />
        </div>
      </div>
      <div
        style={{
          width: 475,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 16,
          display: "flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            textAlign: "center",
            color: "black",
            fontSize: 18,
            fontFamily: "Calibri",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          {letterHeading}
        </div>
        <div
          style={{
            alignSelf: "stretch",
            height: 76,
            textAlign: "center",
            color: "black",
            fontSize: 13,
            fontFamily: "Calibri",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          {letterIntro}
        </div>
      </div>
    </div>
  );
}
