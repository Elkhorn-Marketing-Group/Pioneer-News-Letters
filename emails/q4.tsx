import { Html, Img } from "@react-email/components";
import MyHeader from "./myHeader";
import SectionDivider from "./sectiondivider";
import OneColOneImg from "./OneColOneImg";
import TwoImgOnly from "./TwoImgOnly";
import OneImgCentered from "./OneImgCentered";
import TwoColOneImg from "./TwoColOneImg";
import Footer from "./footer";

export default function Q4() {
  return (
    <Html>
      <MyHeader
        headerImg="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/HeaderImage.png?raw=true"
        letterTitle="Fall Newsletter"
        letterHeading="Hello from Pioneer Financial!"
        letterIntro="Welcome to our Q4 Newsletter! We’re excited to share some updates from our team with you, from professional achievements to memorable events. We hope you enjoy catching up with us — and as always, we’re grateful to be part of your journey."
      />
      <SectionDivider sectionHeading="Celebrating 20 years!" />
      <OneColOneImg
        image="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/20years-img.png?raw=true"
        paragraphs={[
          {
            text: "This year marks Pioneer Financial's 20th anniversary! Since 2003, our founders, Kevin Luchetta, CFP®, AEP®, Stephen Schwartz, CFP®, AEP®, Paul Tortorella, and Jim DiNardo, CFP®, ChFC®, CLU®, MSFS®, RICP® have been dedicated to providing holistic financial planning culminating in the official establishment of Pioneer Financial in 2005. What started with a vision to integrate insurance, investment, and financial advice has grown into a thriving firm.",
            isBullet: false,
          },
          {
            text: "Today, with a new generation of leaders like Brandon Luke CFP®, CIMA®, ChFC®, CLU®, RICP® and Rita Konnov, we continue to innovate and serve our clients with integrity. Thank you to our amazing team, loyal clients, and supportive partners for being part of our journey. Here's to many more years of pioneering solutions and exceptional service!",
            isBullet: false,
          },
        ]}
      />
      <SectionDivider sectionHeading="Meet our New Partners" />
      <OneColOneImg
        image="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/Newpartners.png?raw=true"
        paragraphs={[
          {
            text: "As a monumental update to the firm, we are proud to announce the addition of new partners Brandon Luke, CFP®, CIMA®, ChFC®, CLU®, RICP®, and Rita Konnov.",
            isBullet: false,
          },
          {
            text: "Brandon will continue to empower our team and serve top clients. Since joining in 2010, he's been instrumental in fostering growth and excellence. A Columbia University graduate, he resides in the Bronx, NY.",
            isBullet: false,
          },
          {
            text: "Rita will lead internal control and process innovation. Since 2006, she's driven firmwide efficiency and development. She holds a B.A. in Economics from Hunter College and lives in Merrick, NY.",
            isBullet: false,
          },
        ]}
      />
      <SectionDivider sectionHeading="We're #1" />
      <OneColOneImg
        image="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/Pathfinder-img.png?raw=true"
        paragraphs={[
          "Pioneer Financial had the distinct honor of being recognized as the #1 Pathfinder Firm within Northwestern Mutual! This marks the inaugural year of this prestigious award, and we are incredibly humbled to be honored to have been acknowledged. ",
          "For two decades, our dedicated team has worked tirelessly to ensure our clients receive the highest level of excellence and care in planning their financial futures. Being acknowledged on stage as an ensemble further solidifies our commitment and deepens our relationship with our clients, Northwestern Mutual, and the entire Pioneer team. ",
          "A heartfelt thank you to everyone involved in making this achievement possible — here's to 20 years of success and forging even brighter financial futures together! We invite you to celebrate with us.",
          <>
            Watch the video{" "}
            <a
              href="https://www.youtube.com/watch?v=0vD54VDq2iE&themeRefresh=1"
              style={{ color: "#084A7D", textDecoration: "underline" }}
            >
              here
            </a>
            !
          </>,
        ]}
      />
      <SectionDivider sectionHeading="We're #1" />
      <OneImgCentered image="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/Forbes-BestInState.png?raw=true" />
      <TwoImgOnly
        Img1="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/Forbes-bestInStateTeams.png?raw=true"
        Img2="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/Forbes-BestInStateSecurity.png?raw=true"
        paragraphs={[
          "Congratulations to our partners Jim DiNardo, CFP®, ChFC®, CLU®, MSFS®, RICP®, Kevin Luchetta, CFP®, AEP®, and Stephen Schwartz, CFP®, AEP®, along with team members John Parisi and Alex Klein, for being recognized by Forbes as Top Financial Security Professionals and Best-in-State Financial Security Professionals.",
          "Additionally, we’re thrilled to celebrate Jim DiNardo, CFP®, ChFC®, CLU®, MSFS®, RICP®, Kevin Luchetta, CFP®, AEP®, and Stephen Schwartz, CFP®, AEP®, for also being named to Forbes’ 2025 Best-in-State Wealth Advisors list.",
          "We’re equally honored that Pioneer Financial has been recognized among Forbes’ 2025 Best-In-State Wealth Management Teams. These distinctions highlight the exceptional dedication, expertise, and client-first commitment that define our firm. Thank you to our incredible team and valued clients for your continued trust and support. We look forward to serving you with excellence in the year ahead!",
          {
            text: "Forbes Best-in-State Top Financial Security Professionals  list (July 2025), based upon data as of December 31st of the preceding year. Forbes Best-in-State Wealth Advisors list (April 2025), based upon data as of June 30th of the preceding year. Forbes Best-In-State Wealth Management Teams (January 2025), based upon data as March 31st of preceding year. Research and rankings developed by SHOOK Research, LLC. Northwestern Mutual & its advisors do not pay for placement on 3rd party rating lists, but do pay marketing fees to these organizations to promote the rating(s). Rankings and recognitions are no guarantee of future investment success.",
            isBullet: false,
            style: {
              fontSize: "8px",
              lineHeight: "1.2",
              color: "#666",
              marginTop: 4,
            },
          },
        ]}
      />
      <SectionDivider sectionHeading="Team Updates" />
      <TwoImgOnly
        Img1="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/JenEvanko-headshot.jpg?raw=true"
        Img2="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/ReaanSarker-Headshot.jpg?raw=true"
      />
      <TwoImgOnly
        Img1="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/JonathanClay-headshot.jpg?raw=true"
        Img2="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/DasiyCrystal-headshot.jpg?raw=true"
        paragraphs={[
          {
            text: "We’re excited to announce the continued growth of our team at Pioneer Financial with the addition of several talented professionals who bring a wealth of experience and dedication to our clients and firm.",
            isBullet: false,
          },
          {
            text: "Please Join us in Welcoming",
            isBullet: false,
          },
          {
            text: "Jonathan Clay, Associate Director – Practice Integration (top left)",
            isBullet: true,
          },
          {
            text: "Daisy Crystal, Service Associate (top right)",
            isBullet: true,
          },
          {
            text: "Jennifer Evanko, Service Associate (bottom left)",
            isBullet: true,
          },
          {
            text: "Reaan Sarker, Investment Client Service Associate (bottom right)",
            isBullet: true,
          },
        ]}
      />
      <TwoImgOnly
        Img1="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/PhilipCoffmam-Headshot.png?raw=true"
        Img2="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/ErikConstantino-Headshot.png?raw=true"
        paragraphs={[
          {
            text: "Advisor Affiliates",
            isBullet: false,
          },
          {
            text: "Philip Coffman CFP®, ChFC®, CLU®, Wealth Management Advisor (on the left)",
            isBullet: true,
          },
          {
            text: "Erik Constantino CFP®, CLU®, ChFC®, Wealth Management Advisor (on the right)",
            isBullet: true,
          },
          {
            text: "",
            isBullet: false,
          },
          {
            text: "Each brings valuable expertise and a shared commitment to delivering exceptional service and supporting our mission of helping clients achieve financial confidence and success. We're thrilled to have them on board and look forward to the positive impact they'll make across our team and client community.",
            isBullet: false,
          },
        ]}
      />
      <SectionDivider sectionHeading="Culture and Community" />
      <TwoImgOnly
        Img1="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/ALSF-teamphoto.png?raw=true"
        Img2="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/ALSF-stand.png?raw=true"
        paragraphs={[
          {
            text: "Our team had a fantastic day at The Country Club Of Darien for our 12th annual golf outing in support of Alex's Lemonade Stand Foundation! Pioneer Financial was truly honored to sponsor the pickleball activities and serve refreshing lemonade at our stand, contributing to an unforgettable experience.",
            isBullet: false,
          },
          {
            text: "Together, we made a meaningful impact in backing Alex's Lemonade Stand Foundation and their vital mission to combat childhood cancer. Your dedication and enthusiasm drive change, and we’re proud to be part of this incredible community effort.",
            isBullet: false,
          },
        ]}
      />

      <TwoColOneImg
        img="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/IleneMedian-headshot.png?raw=true"
        paragraphs={[
          {
            text: "Earlier this year, Ilene Medina was appointed to lead our Network Office’s Hispanic & Latinx Affinity Group. The group is excited for this new chapter and for the thoughtfulness she has already brought to the organization for Hispanic Heritage month. Congratulations, Ilene!",
            isBullet: false,
          },
        ]}
      />
      <TwoColOneImg
        imgLeft={true}
        img="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/KelseyRauber-Headshot.jpg?raw=true"
        paragraphs={[
          {
            text: "We are delighted to announce that Kelsey Rauber has joined our Diversity, Equity, and Inclusion (DEI) Committee at Pioneer Financial. Our commitment to building a culture where everyone belongs is strengthened through intentional connections and open dialogue, enhancing both our team and client service. ",
            isBullet: false,
          },
          {
            text: "We are delighted to announce that Kelsey Rauber has joined our Diversity, Equity, and Inclusion (DEI) Committee at Pioneer Financial. Our commitment to building a culture where everyone belongs is strengthened through intentional connections and open dialogue, enhancing both our team and client service. Our D&I Committee, dedicated to understanding our shared humanity, conducts annual heritage interviews to celebrate and appreciate our diverse backgrounds. These conversations enrich our understanding and highlight how our differences shape our journey, making us better coworkers and advocates for our clients. Welcome, Kelsey, to this exciting journey of growth and inclusivity!",
            isBullet: false,
          },
        ]}
      />
      <SectionDivider sectionHeading="Market Commentary" />
      <OneColOneImg
        image="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/Image.png?raw=true"
        paragraphs={[
          <>
            Check out the latest market commentary from Northwestern Mutual's
            Chief Investment Officer, Brent Schutte,{" "}
            <a
              href="https://www.northwesternmutual.com/life-and-money/market-commentary/weekly-market-commentary/"
              style={{ color: "#084A7D", textDecoration: "underline" }}
            >
              here
            </a>
            !
          </>,
        ]}
      />
      <Footer
        addresses={`New York Office<br/>300 Madison Ave, 26th Floor, New York, NY 10017<br/>Farmingdale Office<br/>500 Bi County Blvd, Ste 200E, Farmingdale, NY 11735<br/>Paramus Office<br/>80 W Century Road, Ste 300, Paramus, NJ 07652<br/>Norwalk Office<br/>50 Washington St, Ste 600W, Norwalk, CT 06854`}
        linkedinText="Follow us on LinkedIn"
        linkedinUrl="https://www.linkedin.com/company/pioneer-financial/"
        imageUrl="https://github.com/Elkhorn-Marketing-Group/Pioneer-News-Letters/blob/main/Q4-Photos/Logo.png?raw=true"
        imageAlt="Footer Image"
        disclosure=""
      />
    </Html>
  );
}
