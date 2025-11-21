import React, { JSX } from "react";

interface ParagraphItem {
  text: string | JSX.Element;
  isBullet?: boolean;
}

interface TwoColOneImgProps {
  paragraphs: (string | JSX.Element | ParagraphItem)[];
  img?: string;
}

export default function TwoColOneImg({
  paragraphs = [],
  img = "",
}: TwoColOneImgProps) {
  return (
    <div>
      <div
        style={{
          width: 640,
          height: 253,
          paddingTop: 15,
          paddingBottom: 15,
          justifyContent: "center",
          alignItems: "center",
          gap: 64,
          display: "inline-flex",
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
            <img
              style={{
                alignSelf: "stretch",
                height: 246,
                border: "4px #084A7D solid",
              }}
              src={img}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
