import React from "react";

interface FooterProps {
  addresses: string; // HTML string allowed (e.g., with <br />)
  imageUrl: string;
  imageAlt?: string;
  linkedinText?: string;
  linkedinUrl?: string;
  disclosure: React.ReactNode | string;
}

export default function Footer({
  addresses,
  imageUrl,
  imageAlt = "Footer Image",
  linkedinText = "Follow us on LinkedIn",
  linkedinUrl,
  disclosure,
}: FooterProps) {
  return (
    <table
      width="640"
      align="center"
      cellPadding="0"
      cellSpacing="0"
      style={{
        borderCollapse: "collapse",
        background: "#084A7D",
        padding: "24px 26px 15px 26px",
        margin: "0 auto",
      }}
    >
      <tbody>
        <tr>
          <td align="center">
            <table width="588" align="center" cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td
                    align="center"
                    style={{
                      color: "#fff",
                      fontSize: 11,
                      fontFamily: "Calibri, Arial, sans-serif",
                      fontWeight: 400,
                      lineHeight: "20px",
                      paddingBottom: 10,
                    }}
                  >
                    {/* Addresses as HTML (can include <br />) */}
                    <span dangerouslySetInnerHTML={{ __html: addresses }} />
                  </td>
                </tr>
                <tr>
                  <td align="center" style={{ paddingBottom: 10 }}>
                    <img
                      width="515"
                      height="65"
                      src={imageUrl}
                      alt={imageAlt}
                      style={{ display: "block" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    style={{
                      color: "#fff",
                      fontSize: 16,
                      fontFamily: "Calibri, Arial, sans-serif",
                      fontWeight: 700,
                      lineHeight: "22px",
                      paddingBottom: 10,
                    }}
                  >
                    {linkedinUrl ? (
                      <a
                        href={linkedinUrl}
                        style={{ color: "#fff", textDecoration: "underline" }}
                      >
                        {linkedinText}
                      </a>
                    ) : (
                      linkedinText
                    )}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      color: "#fff",
                      fontSize: 8,
                      fontFamily: "Calibri, Arial, sans-serif",
                      fontWeight: 400,
                      lineHeight: "10px",
                      textAlign: "left",
                    }}
                  >
                    {disclosure}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
