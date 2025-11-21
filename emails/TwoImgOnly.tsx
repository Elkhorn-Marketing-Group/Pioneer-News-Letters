import React, { JSX } from "react";

interface ParagraphItem {
  text: string | JSX.Element;
  isBullet?: boolean;
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
    <div
      style={{
        width: 640,
        paddingTop: 30,
        paddingBottom: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        display: "inline-flex",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 21,
          display: "flex",
        }}
      >
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 34,
            display: "inline-flex",
          }}
        >
          <img style={{ width: 220, height: 220 }} src={Img1} />
          <img style={{ width: 220, height: 220 }} src={Img2} />
        </div>
        <div
          style={{
            width: 475,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
          }}
        >
          {paragraphs.map((paragraph, index) => {
            // Check if the paragraph is a ParagraphItem
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
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  marginBottom: isBullet ? 4 : 16,
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
              >
                {isBullet && <span style={{ marginRight: 4 }}>•</span>}
                <div style={{ flex: isBullet ? 1 : "unset" }}>{content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
