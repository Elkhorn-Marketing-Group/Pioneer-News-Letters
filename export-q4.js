const fs = require("fs");
const path = require("path");
const { buildSync } = require("esbuild");

// Build the TypeScript/TSX entry into a single CommonJS bundle so Node can require it
const outDir = path.join(__dirname, ".build");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
const outFile = path.join(outDir, "q4.cjs");

buildSync({
  entryPoints: [path.join(__dirname, "emails", "q4.tsx")],
  bundle: true,
  platform: "node",
  format: "cjs",
  target: ["node14"],
  outfile: outFile,
  logLevel: "error",
});

// Require the bundled module and render (render may be async)
const { render } = require("@react-email/render");
const React = require("react");
const Q4 = require(outFile).default;

(async () => {
  try {
    let html = await render(React.createElement(Q4));
    // Post-process: replace react-email markers with a proper <body> and ensure charset meta is present
    // React Email wraps the markup with comment markers like <!--$--><!--html-->...<!--/$--> — replace them
    html = html.replace(/<!--\$-->\s*<!--html-->/i, "<body>");
    // Replace any remaining closing marker(s)
    html = html.replace(/<!--\/\$-->/g, "</body>");

    // Ensure <meta charset="utf-8"> exists in <head>
    if (/<!doctype html>/i.test(html)) {
      // insert charset after <head>
      html = html.replace(
        /<head>(?![\s\S]*?<meta charset=)/i,
        '<head><meta charset="utf-8">'
      );
    } else {
      // fallback: add meta tag if no doctype
      html = html.replace(/<head>/i, '<head><meta charset="utf-8">');
    }

    // Write the HTML to a file
    fs.writeFileSync(path.join(__dirname, "q4.html"), html);
    console.log("Exported q4.html ->", path.join(__dirname, "q4.html"));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
