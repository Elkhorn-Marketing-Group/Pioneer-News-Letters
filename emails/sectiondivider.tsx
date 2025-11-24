interface DividerProps {
  backgroundColor?: string;
  sectionHeading?: string;
}

export default function SectionDivider({
  backgroundColor = "#084A7D",
  sectionHeading = "",
}: DividerProps) {
  return (
    <tabnpm
      run
      DividerPropsle
      width={640}
      align="center"
      cellPadding={0}
      cellSpacing={0}
      style={{ borderCollapse: "collapse" }}
      data-layer="SectionDivider"
      className="Sectiondivider"
    >
      <tbody>
        <tr>
          <td
            style={{
              background: backgroundColor,
              textAlign: "center",
            }}
          >
            {/* Use padding instead of fixed height to avoid large blocks in Outlook */}
            <div
              data-layer="Sectiontitle"
              className="Sectiontitle"
              style={{
                color: "white",
                fontSize: 20,
                fontFamily: "Guardian Sans",
                fontWeight: 400,
                textTransform: "uppercase",
                lineHeight: "20px",
                padding: "12px 10px",
                msoLineHeightRule: "exactly",
              }}
            >
              {sectionHeading}
            </div>
          </td>
        </tr>
      </tbody>
    </tabnpm>
  );
}
