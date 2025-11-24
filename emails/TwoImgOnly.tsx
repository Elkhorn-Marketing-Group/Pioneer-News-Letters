import React, { JSX } from "react";

interface ParagraphItem {
  text: string | JSX.Element;
  isBullet?: boolean;
  // Optional inline style to allow fine-grained control per paragraph (email-safe inline styles)
  style?: React.CSSProperties;
}

interface TwoImgOnlyProps {
  Img1?: string;
  Img2?: string;
  paragraphs?: (string | JSX.Element | ParagraphItem)[];
}

export default function TwoImgOnly({
  Img1 = "",
  Img2 = "",
  paragraphs = [],
}: TwoImgOnlyProps) {
  return (
    <table
      width={640}
      align="center"
      cellPadding={0}
      cellSpacing={0}
      style={{ borderCollapse: "collapse", paddingTop: 30, paddingBottom: 20 }}
    >
      <tbody>
        <tr>
          <td align="center">
            <table
              cellPadding={0}
              cellSpacing={0}
              style={{ borderCollapse: "collapse" }}
            >
              <tbody>
                <tr>
                  <td width={220} valign="top" style={{ paddingRight: 12 }}>
                    {Img1 ? (
                      <img
                        src={Img1}
                        alt=""
                        width={220}
                        height={220}
                        style={{
                          display: "block",
                          width: "220px",
                          height: "220px",
                        }}
                      />
                    ) : (
                      <div style={{ width: 220, height: 220 }} />
                    )}
                  </td>
                  <td width={220} valign="top" style={{ paddingLeft: 12 }}>
                    {Img2 ? (
                      <img
                        src={Img2}
                        alt=""
                        width={220}
                        height={220}
                        style={{
                          display: "block",
                          width: "220px",
                          height: "220px",
                        }}
                      />
                    ) : (
                      <div style={{ width: 220, height: 220 }} />
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center" style={{ paddingTop: 12 }}>
            <table
              width={475}
              cellPadding={0}
              cellSpacing={0}
              style={{ borderCollapse: "collapse" }}
            >
              <tbody>
                {paragraphs.map((paragraph, index) => {
                  const isParagraphItem =
                    typeof paragraph === "object" &&
                    paragraph !== null &&
                    "text" in paragraph;
                  const paragraphItem = isParagraphItem
                    ? (paragraph as ParagraphItem)
                    : undefined;
                  const content = paragraphItem
                    ? paragraphItem.text
                    : paragraph;
                  const isBullet = paragraphItem
                    ? paragraphItem.isBullet
                    : false;
                  const styleOverride = paragraphItem
                    ? paragraphItem.style || {}
                    : {};
                  return (
                    <tr key={index}>
                      <td
                        style={{
                          paddingBottom: isBullet ? 4 : 16,
                          textAlign: "left",
                        }}
                      >
                        {isBullet ? (
                          <div>
                            <span style={{ marginRight: 4 }}>•</span>
                            <span
                              style={{
                                color: "black",
                                fontSize: 13,
                                fontFamily: "Calibri",
                                fontWeight: 400,
                                ...styleOverride,
                              }}
                            >
                              {content}
                            </span>
                          </div>
                        ) : (
                          <div
                            style={{
                              color: "black",
                              fontSize: 13,
                              fontFamily: "Calibri",
                              fontWeight: 400,
                              ...styleOverride,
                            }}
                          >
                            {content}
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
