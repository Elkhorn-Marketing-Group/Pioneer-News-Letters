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
    <div>
      <div
        style={{
          width: 640,
          paddingTop: 15,
          paddingBottom: 15,
          justifyContent: "center",
          alignItems: "center",
          gap: 64,
          display: "inline-flex",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: 579,
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
          }}
        >
          {imgLeft ? (
            <>
              <div
                style={{
                  width: 246,
                  display: "inline-flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                {img ? (
                  <div
                    style={{
                      width: 246,
                      height: 246,
                      overflow: "hidden",
                      border: "4px solid #084A7D",
                      boxSizing: "border-box",
                    }}
                  >
                    <img
                      src={img}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                ) : (
                  <div style={{ width: 246, height: 246 }} />
                )}
              </div>

              <div
                style={{
                  width: 269,
                  color: "black",
                  fontSize: 12,
                  fontFamily: "Calibri",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
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
                    <div
                      key={index}
                      style={{
                        color: "black",
                        fontSize: 13,
                        fontFamily: "Calibri",
                        fontWeight: "400",
                        wordWrap: "break-word",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        marginBottom: isBullet ? 4 : 16,
                      }}
                    >
                      {isBullet && <span style={{ marginRight: 4 }}>•</span>}
                      <div style={{ flex: 1 }}>{content}</div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  width: 269,
                  color: "black",
                  fontSize: 12,
                  fontFamily: "Calibri",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
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
                    <div
                      key={index}
                      style={{
                        color: "black",
                        fontSize: 13,
                        fontFamily: "Calibri",
                        fontWeight: "400",
                        wordWrap: "break-word",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        marginBottom: isBullet ? 4 : 16,
                      }}
                    >
                      {isBullet && <span style={{ marginRight: 4 }}>•</span>}
                      <div style={{ flex: 1 }}>{content}</div>
                    </div>
                  );
                })}
              </div>

              <div
                style={{
                  width: 246,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 8,
                  display: "inline-flex",
                }}
              >
                {img ? (
                  <div
                    style={{
                      width: 246,
                      height: 246,
                      overflow: "hidden",
                      border: "4px solid #084A7D",
                      boxSizing: "border-box",
                    }}
                  >
                    <img
                      src={img}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                ) : (
                  <div style={{ width: 246, height: 246 }} />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
