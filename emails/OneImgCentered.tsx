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
            justifyContent: "center",
            alignItems: "center",
            gap: 34,
            display: "inline-flex",
          }}
        >
          <img style={{ width: imageWidth, height: imageHeight }} src={image} />
        </div>

        {paragraphs.length > 0 && (
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
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {isBullet && <span style={{ marginRight: 4 }}>•</span>}
                  <div style={{ flex: isBullet ? 1 : "unset" }}>{content}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
