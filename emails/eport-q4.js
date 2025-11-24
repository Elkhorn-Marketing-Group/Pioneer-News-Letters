const { render } = require("@react-email/render");
const React = require("react");
const fs = require("fs");
const path = require("path");

// Import your email component
const Q4 = require("./emails/q4").default;

// Render the component to HTML
const html = render(React.createElement(Q4));

// Write the HTML to a file
fs.writeFileSync(path.join(__dirname, "q4.html"), html);

console.log("Exported q4.html");
