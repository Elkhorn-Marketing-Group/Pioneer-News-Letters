import { Html, Button } from "@react-email/components";
import React from "react";


export default function Email() {
  return (
    <Html>
      <div data-layer="Hero1" className="Hero1" style={{ width: 640, flexDirection: "column", justifyContent: "flex-start", alignItems: "center", gap: 30, display: "inline-flex" }}>
        <div data-layer="headerimg" className="Headerimg" style={{ alignSelf: "stretch", position: "relative", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", display: "flex" }}>
          <div data-layer="divider-top" className="DividerTop" style={{ alignSelf: "stretch", height: 35, background: "#084A7D" }} />
          <img data-layer="HeaderImage" className="Headerimage" style={{ alignSelf: "stretch", height: 309 }} src="https://placehold.co/640x309" />
          <div data-layer="divider" className="Divider" style={{ width: 640, height: 56, left: 0, top: 288, position: "absolute", background: "#084A7D" }} />
          <div data-layer="Heading text" className="HeadingText" style={{ left: 223, top: 306, position: "absolute", textAlign: "center", color: "white", fontSize: 24, fontFamily: "Guardian Sans", fontWeight: "400", textTransform: "uppercase", lineHeight: 20, wordWrap: "break-word" }}>Fall Newsletter</div>
        </div>
        <div data-layer="Welcome Text" className="WelcomeText" style={{ width: 475, flexDirection: "column", justifyContent: "flex-start", alignItems: "center", gap: 16, display: "flex" }}>
          <div data-layer="Header" className="Header" style={{ alignSelf: "stretch", textAlign: "center", color: "black", fontSize: 18, fontFamily: "Calibri", fontWeight: "700", wordWrap: "break-word" }}>Hello from Pioneer Financial!</div>
          <div data-layer="Caption" className="Caption" style={{ alignSelf: "stretch", height: 76, textAlign: "center", color: "black", fontSize: 13, fontFamily: "Calibri", fontWeight: "400", wordWrap: "break-word" }}>Welcome to our Q4 Newsletter! We’re excited to share some updates from our team with you, from professional achievements to memorable events. We hope you enjoy catching up with us — and as always, we’re grateful to be part of your journey.</div>
        </div>
      </div>
    </Html>
  );
}