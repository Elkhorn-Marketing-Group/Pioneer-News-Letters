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
    <div
      style={{
        width: 640,
        height: "auto",
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 23,
        display: "inline-flex",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 23,
          display: "flex",
        }}
      >
        <img style={{ width: 415, height: 240 }} src={image} />
        <div
          style={{
            width: 495,
            display: "flex",
            flexDirection: "column",
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
      </div>
    </div>
  );
}
