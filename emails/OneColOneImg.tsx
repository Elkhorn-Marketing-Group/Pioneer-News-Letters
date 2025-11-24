import React, { JSX } from "react";

interface ParagraphItem {
  text: string | JSX.Element;
  isBullet?: boolean;
}

interface OneColOneImgProps {
  image?: string;
  paragraphs?: (string | JSX.Element | ParagraphItem)[];
}

export default function OneColOneImg({
  image = "https://placehold.co/415x240",
  paragraphs = [],
}: OneColOneImgProps) {
  return (
    <table
      width={640}
      align="center"
      cellPadding={0}
      cellSpacing={0}
      style={{ borderCollapse: "collapse", paddingTop: 15, paddingBottom: 15 }}
    >
      <tbody>
        <tr>
          <td align="center">
            <img
              src={image}
              alt=""
              width={415}
              height={240}
              style={{ display: "block" }}
            />
          </td>
        </tr>
        <tr>
          <td align="center" style={{ paddingTop: 12 }}>
            <table
              width={495}
              cellPadding={0}
              cellSpacing={0}
              style={{ borderCollapse: "collapse" }}
            >
              <tbody>
                {paragraphs.map((paragraph, index) => {
                  const isParagraphItem =
                    typeof paragraph === "object" && "text" in paragraph;
                  const content = isParagraphItem
                    ? (paragraph as ParagraphItem).text
                    : paragraph;
                  const isBullet = isParagraphItem
                    ? (paragraph as ParagraphItem).isBullet
                    : false;
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
