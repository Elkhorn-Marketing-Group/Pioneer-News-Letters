import React, { JSX } from "react";

interface ParagraphItem {
  text: string | JSX.Element;
  isBullet?: boolean;
}

interface TwoColOneImgProps {
  paragraphs: (string | JSX.Element | ParagraphItem)[];
  img?: string;
  imgLeft?: boolean;
}

export default function TwoColOneImg({
  paragraphs = [],
  img = "",
  imgLeft = false,
}: TwoColOneImgProps) {
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
            <table
              width={579}
              cellPadding={0}
              cellSpacing={0}
              style={{ borderCollapse: "collapse" }}
            >
              <tbody>
                <tr>
                  {imgLeft ? (
                    <>
                      <td width={246} valign="top" style={{ paddingRight: 12 }}>
                        {img ? (
                          <img
                            src={img}
                            alt=""
                            width={246}
                            height={246}
                            style={{
                              display: "block",
                              border: "4px solid #084A7D",
                              boxSizing: "border-box",
                              width: "246px",
                              height: "246px",
                            }}
                          />
                        ) : (
                          <div style={{ width: 246, height: 246 }} />
                        )}
                      </td>
                      <td
                        width={269}
                        valign="top"
                        style={{
                          color: "black",
                          fontSize: 12,
                          fontFamily: "Calibri",
                          fontWeight: 400,
                        }}
                      >
                        {paragraphs.map((paragraph, index) => {
                          const isParagraphItem =
                            typeof paragraph === "object" &&
                            "text" in paragraph;
                          const content = isParagraphItem
                            ? (paragraph as ParagraphItem).text
                            : paragraph;
                          const isBullet = isParagraphItem
                            ? (paragraph as ParagraphItem).isBullet
                            : false;
                          return (
                            <div
                              key={index}
                              style={{
                                color: "black",
                                fontSize: 13,
                                fontFamily: "Calibri",
                                fontWeight: 400,
                                marginBottom: isBullet ? 4 : 16,
                              }}
                            >
                              {isBullet ? (
                                <div>
                                  <span style={{ marginRight: 4 }}>•</span>
                                  <span>{content}</span>
                                </div>
                              ) : (
                                <div>{content}</div>
                              )}
                            </div>
                          );
                        })}
                      </td>
                    </>
                  ) : (
                    <>
                      <td
                        width={269}
                        valign="top"
                        style={{
                          color: "black",
                          fontSize: 12,
                          fontFamily: "Calibri",
                          fontWeight: 400,
                        }}
                      >
                        {paragraphs.map((paragraph, index) => {
                          const isParagraphItem =
                            typeof paragraph === "object" &&
                            "text" in paragraph;
                          const content = isParagraphItem
                            ? (paragraph as ParagraphItem).text
                            : paragraph;
                          const isBullet = isParagraphItem
                            ? (paragraph as ParagraphItem).isBullet
                            : false;
                          return (
                            <div
                              key={index}
                              style={{
                                color: "black",
                                fontSize: 13,
                                fontFamily: "Calibri",
                                fontWeight: 400,
                                marginBottom: isBullet ? 4 : 16,
                              }}
                            >
                              {isBullet ? (
                                <div>
                                  <span style={{ marginRight: 4 }}>•</span>
                                  <span>{content}</span>
                                </div>
                              ) : (
                                <div>{content}</div>
                              )}
                            </div>
                          );
                        })}
                      </td>
                      <td width={246} valign="top" style={{ paddingLeft: 12 }}>
                        {img ? (
                          <img
                            src={img}
                            alt=""
                            width={246}
                            height={246}
                            style={{
                              display: "block",
                              border: "4px solid #084A7D",
                              boxSizing: "border-box",
                              width: "246px",
                              height: "246px",
                            }}
                          />
                        ) : (
                          <div style={{ width: 246, height: 246 }} />
                        )}
                      </td>
                    </>
                  )}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
