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
    <table
      width={640}
      align="center"
      cellPadding={0}
      cellSpacing={0}
      style={{ borderCollapse: "collapse" }}
    >
      <tbody>
        <tr>
          {/* Slightly smaller top bar to reduce overall header height in Outlook */}
          <td style={{ height: 24, background: "#084A7D" }} />
        </tr>
        <tr>
          <td>
            {/* Avoid fixed pixel height for header image; let it scale naturally */}
            <img
              src={headerImg}
              alt=""
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <SectionDivider sectionHeading={letterTitle} />
          </td>
        </tr>
        <tr>
          <td align="center" style={{ paddingTop: 20, paddingBottom: 20 }}>
            <div style={{ width: 475, margin: "0 auto", textAlign: "center" }}>
              <div
                style={{
                  color: "black",
                  fontSize: 18,
                  fontFamily: "Calibri",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                {letterHeading}
              </div>
              <div
                style={{
                  color: "black",
                  fontSize: 13,
                  fontFamily: "Calibri",
                  fontWeight: 400,
                  lineHeight: "1.3",
                }}
              >
                {letterIntro}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
