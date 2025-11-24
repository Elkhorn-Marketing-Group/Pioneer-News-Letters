import React, { JSX } from "react";

interface ParagraphItem {
  text: string | JSX.Element;
  isBullet?: boolean;
}

interface OneImgCenteredProps {
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  paragraphs?: (string | JSX.Element | ParagraphItem)[];
}

export default function OneImgCentered({
  image = "",
  imageWidth = 220,
  imageHeight = 220,
  paragraphs = [],
}: OneImgCenteredProps) {
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
            {image ? (
              <img
                src={image}
                alt=""
                width={imageWidth}
                height={imageHeight}
                style={{ display: "block" }}
              />
            ) : (
              <div style={{ width: imageWidth, height: imageHeight }} />
            )}
          </td>
        </tr>
        {paragraphs.length > 0 && (
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
                            textAlign: "center",
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
        )}
      </tbody>
    </table>
  );
}
