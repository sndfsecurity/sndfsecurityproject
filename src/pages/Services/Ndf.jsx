import React, { useState, useEffect } from "react";
import "./Ndf.css";
import { FaUserSecret, FaBalanceScale, FaSearch, FaUserCheck } from "react-icons/fa";
import { Helmet } from "react-helmet-async";



import loyalty from "../../assets/images/course-bg.webp";
import prematrimonial from "../../assets/images/pre.jpg";
import asset from "../../assets/images/assetv.png";
import forensic from "../../assets/images/forensic.png";
import bgcheck from "../../assets/images/bgcheck.jpg";
import black from "../../assets/images/black.jpg";
import emp from "../../assets/images/emp.jpg";
import missing from "../../assets/images/missing.png";

import veri from "../../assets/images/emp.jpg";
import divorce from "../../assets/images/divorce.png";
import sting from "../../assets/images/emp.jpg";
import under from "../../assets/images/emp.jpg";



const services = [
  
  {
  title: "Prematrimonial Investigation",
  desc: "Verify background before marriage with confidentiality.",
  img: prematrimonial,

  full: (
    <div className="sndf-modal-details">

      <h3>About the Service</h3>
      <p>
        Prematrimonial investigation helps individuals verify the background,
        character, and personal details of a prospective partner before marriage.
        It ensures that decisions are based on truth, transparency, and trust,
        reducing the risk of fraud or hidden information.
      </p>

      <h3>Why This Service?</h3>
      <p>
        Marriage is a life-changing decision. Our investigation ensures that all
        important details about the individual are verified confidentially so you
        can move forward with confidence and peace of mind.
      </p>

      <h3>What We Check</h3>
      <ul>
        <li><strong>01 - Background Verification:</strong> Identity, past records, and personal history.</li>
        <li><strong>02 - Job & Financial Status:</strong> Employment details, income sources, and stability.</li>
        <li><strong>03 - Family Details:</strong> Family background and social reputation.</li>
        <li><strong>04 - Lifestyle & Habits:</strong> Daily behavior, addictions, and social activities.</li>
        <li><strong>05 - Relationship History:</strong> Any past or current relationships if required.</li>
      </ul>

      <h3>How We Help</h3>
      <ul>
        <li>✔ Confidential and discreet investigation</li>
        <li>✔ Accurate and verified information</li>
        <li>✔ Professional reporting</li>
        <li>✔ Trusted and experienced investigators</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>✔ Avoid fraud and hidden truths</li>
        <li>✔ Make informed marriage decisions</li>
        <li>✔ Ensure transparency and trust</li>
        <li>✔ Gain peace of mind</li>
      </ul>

    </div>
  ),
},

  {
  title: "Post Matrimonial Investigation",
  desc: "Resolve doubts in married life.",
  img: loyalty,
  full: (
    <div className="sndf-modal-details">

      <h3>Why This Service?</h3>
      <p>
        A post-matrimonial investigation is conducted after marriage when one
        partner has doubts or concerns about the other's behavior, financial
        activities, or loyalty. It helps uncover facts and bring clarity to the situation.
      </p>

      <h3>Key Aspects We Investigate</h3>

      <ul>
        <li><strong>01 - Behavioral Changes:</strong> Unexpected shifts in habits, addiction concerns, or personality changes.</li>

        <li><strong>02 - Safety & Custody Issues:</strong> Investigation related to child custody, safety, and suitability of the partner.</li>

        <li><strong>03 - Infidelity or Affairs:</strong> Confirm or rule out extramarital relationships.</li>

        <li><strong>04 - Hidden Financial Activity:</strong> Checking for undisclosed assets, debts, or secret spending.</li>

        <li><strong>05 - Legal or Criminal Issues:</strong> Unrevealed criminal records or ongoing legal matters.</li>

        <li><strong>06 - Social & Reputation Checks:</strong> Verifying social behavior, reputation, and background in workplace or community.</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>✔ Get clarity in your relationship</li>
        <li>✔ Make informed legal decisions</li>
        <li>✔ Protect your financial and emotional well-being</li>
        <li>✔ Ensure safety and transparency</li>
      </ul>

    </div>
  ),
},

  
  {
  title: "Loyalty Test Investigation",
  desc: "Test partner loyalty discreetly.",
  img: prematrimonial,
  full: (
    <div className="sndf-modal-details">

      <h3>Why This Service?</h3>
      <p>
        A loyalty test investigation helps determine whether a person you trust
        is honest and loyal. It is commonly used when there are doubts about a
        partner, spouse, or even a business associate. Our team discreetly
        observes behavior and interactions to uncover the truth.
      </p>

      <h3>Why Consider a Loyalty Test?</h3>

      <ul>
        <li><strong>01 - Suspicion of Affair:</strong> Sudden behavioral changes, secrecy, or unusual routines may raise doubts.</li>

        <li><strong>02 - Trust Issues:</strong> Helps confirm or clear doubts in relationships struggling with trust.</li>

        <li><strong>03 - Pre-marital Assessment:</strong> Test loyalty before marriage to ensure a safe future.</li>

        <li><strong>04 - Confirmation of Integrity:</strong> Reveal true intentions when honesty is in question.</li>

        <li><strong>05 - Long-distance Reassurance:</strong> Helps maintain trust in long-distance relationships.</li>

        <li><strong>06 - Behavioral Inconsistencies:</strong> Identify unusual actions or hidden activities.</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>✔ Get clarity in your relationship</li>
        <li>✔ Make confident personal decisions</li>
        <li>✔ Avoid emotional or financial risks</li>
        <li>✔ Ensure trust and transparency</li>
      </ul>

    </div>
  ),
},


 {
  title: "Extramarital Affairs Investigation",
 desc: "Confidential detection of extramarital affairs and hidden relationships.",
 img: loyalty, // keep your image for card only (not modal)

  full: (
    <div className="sndf-modal-details">

      <h3>About the Service</h3>
      <p>
        Extramarital affairs occur when a married person is involved in a
        romantic or physical relationship outside their marriage. Such
        relationships are usually kept secret and can damage trust,
        emotional stability, and family life.
      </p>

      <h3>Common Reasons Behind Extramarital Affairs</h3>

      <ul>
        <li><strong>01 - Lack of Physical Intimacy:</strong> When closeness is missing, partners may feel unsatisfied.</li>

        <li><strong>02 - Boredom in Relationship:</strong> Routine or dull relationships may lead someone to seek excitement outside.</li>

        <li><strong>03 - Opportunity & Temptation:</strong> Situations like workplace connections or friendships can create chances.</li>

        <li><strong>04 - Emotional Disconnect:</strong> Feeling lonely or emotionally distant can push someone away.</li>

        <li><strong>05 - Feeling Unappreciated:</strong> Lack of respect, love, or attention can lead to outside involvement.</li>

        <li><strong>06 - Revenge or Anger:</strong> Some engage in affairs due to hurt feelings or conflicts.</li>
      </ul>

      <h3>How We Help</h3>
      <ul>
        <li>✔ Discreet surveillance and monitoring</li>
        <li>✔ Evidence collection (photos, reports)</li>
        <li>✔ Complete confidentiality assured</li>
        <li>✔ Professional and ethical investigation methods</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>✔ Get clarity and truth</li>
        <li>✔ Take informed personal decisions</li>
        <li>✔ Protect emotional and financial interests</li>
      </ul>

    </div>
  ),
},



  {
  title: "Divorce Case Investigation",
  desc: "Professional investigation services to support divorce cases with strong evidence.",
  img: divorce, // keep image only for card

  full: (
    <div className="sndf-modal-details">

      <h3>About the Service</h3>
      <p>
        Divorce Case Investigation involves collecting accurate and reliable
        information about a married couple who are going through or planning a
        divorce. Our investigators gather evidence related to issues such as
        infidelity, financial fraud, abuse, or false claims to help in legal proceedings.
      </p>

      <h3>Why Conduct a Divorce Case Investigation?</h3>

      <ul>
        <li><strong>01 - To Gather Strong Proof:</strong> Collect solid evidence like photos, videos, and reports to support your case in court.</li>

        <li><strong>02 - To Find Hidden Property:</strong> Detect undisclosed assets, money, or property to ensure fair settlement.</li>

        <li><strong>03 - To Verify Claims:</strong> Check if statements related to income, behavior, or lifestyle are true.</li>

        <li><strong>04 - To Protect Children:</strong> Identify harmful habits or activities that may affect child custody decisions.</li>
      </ul>

      <h3>How We Help</h3>
      <ul>
        <li>✔ Surveillance and background checks</li>
        <li>✔ Evidence collection (photos, videos, reports)</li>
        <li>✔ Legal support documentation</li>
        <li>✔ Complete confidentiality assured</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>✔ Strong support in legal proceedings</li>
        <li>✔ Fair settlement outcomes</li>
        <li>✔ Protection of rights and interests</li>
        <li>✔ Peace of mind with verified truth</li>
      </ul>

    </div>
  ),
},


 {
  title: "Missing Person Investigation",
  desc: "Professional investigation services to trace and locate missing individuals.",
  img: missing, // use your image for card only

  full: (
    <div className="sndf-modal-details">

      <h3>About the Service</h3>
      <p>
        Missing Person Investigation involves locating individuals who have
        disappeared due to personal, financial, or unknown reasons. Our team
        uses advanced techniques, surveillance, and network resources to trace
        and find missing persons quickly and safely.
      </p>

      <h3>Reasons Why People Go Missing</h3>

      <ul>
        <li><strong>01 - Family Conflicts:</strong> Disputes or misunderstandings at home may lead someone to leave.</li>

        <li><strong>02 - Financial Problems:</strong> Debt or financial stress can cause individuals to disappear.</li>

        <li><strong>03 - Relationship Issues:</strong> Emotional distress or breakups may lead to sudden absence.</li>

        <li><strong>04 - Kidnapping or Crime:</strong> Some cases involve abduction or illegal activities.</li>

        <li><strong>05 - Mental Health Concerns:</strong> Stress, depression, or trauma can result in disappearance.</li>

        <li><strong>06 - Voluntary Disappearance:</strong> Some individuals leave intentionally for personal reasons.</li>
      </ul>

      <h3>How We Help</h3>
      <ul>
        <li>✔ Tracking and surveillance</li>
        <li>✔ Background and location analysis</li>
        <li>✔ Coordination with local sources</li>
        <li>✔ Confidential and fast investigation process</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>✔ Faster location of missing individuals</li>
        <li>✔ Reliable and verified information</li>
        <li>✔ Peace of mind for families</li>
        <li>✔ Professional handling of sensitive cases</li>
      </ul>

    </div>
  ),
},



  {
  title: "Background Check Investigation",
  desc: "Verify personal, professional, and financial history with complete accuracy.",
  img: bgcheck, // use image only for card

  full: (
    <div className="sndf-modal-details">

      <h3>About the Service</h3>
      <p>
        A Background Check Investigation involves reviewing a person’s past
        to gather important details before making decisions related to
        employment, marriage, business partnerships, or personal relationships.
        Our team verifies information from multiple reliable sources to ensure
        complete accuracy and transparency.
      </p>

      <h3>What We Verify</h3>

      <ul>
        <li><strong>01 - Identity Verification:</strong> Confirm personal details like name, address, and identity proof.</li>

        <li><strong>02 - Employment History:</strong> Check previous jobs, roles, and work experience.</li>

        <li><strong>03 - Criminal Records:</strong> Identify any past legal issues or criminal background.</li>

        <li><strong>04 - Financial Status:</strong> Review financial stability, debts, or liabilities.</li>

        <li><strong>05 - Social & Personal Behavior:</strong> Understand lifestyle, habits, and reputation.</li>

        <li><strong>06 - References Check:</strong> Verify information from friends, colleagues, or previous employers.</li>
      </ul>

      <h3>How We Help</h3>
      <ul>
        <li>✔ Detailed and accurate verification</li>
        <li>✔ Reliable data from trusted sources</li>
        <li>✔ Confidential and secure process</li>
        <li>✔ Quick and professional reporting</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>✔ Make informed decisions</li>
        <li>✔ Avoid risks in personal or business dealings</li>
        <li>✔ Ensure safety and trust</li>
        <li>✔ Gain complete peace of mind</li>
      </ul>

    </div>
  ),
},


 {
  title: "Pre & Post Employment Investigation",
  desc: "Ensure safe hiring and monitor employee integrity with professional verification.",
  img: emp, // use image only for card

  full: (
    <div className="sndf-modal-details">

      <h3>About the Service</h3>
      <p>
        Pre & Post Employment Investigation helps organizations verify candidates
        before hiring and monitor employee behavior after hiring. It ensures
        transparency, reduces risk, and helps maintain a secure and trustworthy workplace.
      </p>

      <h3>Pre-Employment Investigation (Before Hiring)</h3>
      <p>
        This investigation is conducted before hiring a candidate to verify the
        accuracy of their resume, qualifications, and background. It helps
        employers make safe and informed hiring decisions.
      </p>

      <ul>
        <li>✔ Verification of identity and documents</li>
        <li>✔ Employment history check</li>
        <li>✔ Criminal background screening</li>
        <li>✔ Education and qualification verification</li>
      </ul>

      <h3>Post-Employment Investigation (After Hiring)</h3>
      <p>
        This investigation is conducted after an employee is hired, especially
        when suspicious activities or misconduct are noticed. It helps
        organizations manage risks and maintain discipline.
      </p>

      <ul>
        <li>✔ Monitoring suspicious behavior</li>
        <li>✔ Internal fraud detection</li>
        <li>✔ Policy violation checks</li>
        <li>✔ Workplace misconduct investigation</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>✔ Hire trustworthy employees</li>
        <li>✔ Reduce organizational risks</li>
        <li>✔ Maintain workplace security</li>
        <li>✔ Improve overall productivity</li>
      </ul>

    </div>
  ),
},



 {
  title: "Blackmailing Investigation",
  desc: "Professional assistance to handle blackmail cases with confidentiality and strong evidence.",
  img: black, // use image only for card

  full: (
    <div className="sndf-modal-details">

      <h3>About the Service</h3>
      <p>
        Blackmailing Investigation deals with cases where someone threatens
        to reveal personal or sensitive information unless their demands are met.
        These cases can happen online or offline and may cause emotional,
        financial, and reputational damage. Our experts work discreetly to
        identify the blackmailer, collect evidence, and stop further threats.
      </p>

      <h3>What You Should Do If You Are Being Blackmailed</h3>

      <ul>
        <li><strong>01 - Stop Communication:</strong> Do not respond or comply with the blackmailer’s demands.</li>

        <li><strong>02 - Preserve Evidence:</strong> Save messages, emails, call logs, and any proof of threats.</li>

        <li><strong>03 - Report the Issue:</strong> Inform legal authorities or professionals immediately.</li>

        <li><strong>04 - Conduct Investigation:</strong> Allow experts to trace and identify the culprit.</li>

        <li><strong>05 - Seek Legal Support:</strong> Take proper legal action to protect yourself.</li>
      </ul>

      <h3>How We Help</h3>
      <ul>
        <li>✔ Identification of blackmailer</li>
        <li>✔ Digital and physical evidence collection</li>
        <li>✔ Confidential investigation process</li>
        <li>✔ Assistance with legal procedures</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>✔ Protection from threats</li>
        <li>✔ Strong evidence for legal action</li>
        <li>✔ Peace of mind and security</li>
        <li>✔ Quick and professional resolution</li>
      </ul>

    </div>
  ),
},

{
  title: "Surveillance & Sting Operation",
  desc: "Discreet monitoring and undercover operations to gather accurate evidence and expose illegal activities.",
  img: sting, // card image only

  full: (
    <div className="sndf-modal-details">

      <h3>About the Service</h3>
      <p>
        Surveillance involves discreet observation of individuals, locations,
        or activities to collect valuable information without alerting the target.
        It plays a crucial role in investigations by providing real-time insights
        and evidence. Sting operations, on the other hand, are strategic undercover
        operations designed to catch individuals involved in illegal or unethical activities.
      </p>

      <h3>Surveillance Methods</h3>
      <ul>
        <li><strong>01 - Physical Surveillance:</strong> Tracking movements and activities in person.</li>
        <li><strong>02 - Electronic Surveillance:</strong> Use of GPS tracking, cameras, and digital tools.</li>
        <li><strong>03 - Video Monitoring:</strong> Capturing visual evidence for proof.</li>
        <li><strong>04 - Background Observation:</strong> Monitoring behavior patterns over time.</li>
      </ul>

      <h3>Sting Operation Process</h3>
      <ul>
        <li><strong>01 - Planning:</strong> Careful strategy to ensure legal and effective execution.</li>
        <li><strong>02 - Undercover Setup:</strong> Agents pose as individuals to gain trust.</li>
        <li><strong>03 - Evidence Collection:</strong> Recording illegal or suspicious activities.</li>
        <li><strong>04 - Execution:</strong> Exposing the act with proper documentation.</li>
      </ul>

      <h3>How We Help</h3>
      <ul>
        <li>✔ Professional and discreet surveillance</li>
        <li>✔ Advanced tracking and monitoring tools</li>
        <li>✔ Legal and ethical sting operations</li>
        <li>✔ Strong evidence collection for cases</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>✔ Accurate and reliable information</li>
        <li>✔ Confidential investigation process</li>
        <li>✔ Strong legal support with evidence</li>
        <li>✔ Helps uncover hidden truths</li>
      </ul>

    </div>
  ),
},


{
  title: "Undercover Operation",
  desc: "Covert investigations where agents assume false identities to gather critical evidence and expose hidden crimes.",
  img: under, // only for card

  full: (
    <div className="sndf-modal-details">

      <h3>About the Service</h3>
      <p>
        An undercover operation is a specialized investigative technique where
        agents assume false identities to gather information or evidence about
        illegal or suspicious activities. This method is highly effective in
        uncovering crimes such as fraud, theft, corruption, and organized crime
        that are difficult to detect through regular investigations.
      </p>

      <h3>Key Aspects of Undercover Operations</h3>
      <p>
        Undercover agents blend into environments by creating believable
        identities and interacting with suspects without revealing their true
        purpose. These operations are carefully planned and executed to ensure
        safety, legality, and effectiveness.
      </p>

      <h3>Operation Process</h3>
      <ul>
        <li><strong>01 - Planning:</strong> Detailed strategy and risk assessment before operation.</li>
        <li><strong>02 - Identity Creation:</strong> Developing a strong cover story and background.</li>
        <li><strong>03 - Infiltration:</strong> Entering the target environment to gain trust.</li>
        <li><strong>04 - Evidence Collection:</strong> Gathering proof through observation and interaction.</li>
        <li><strong>05 - Exit Strategy:</strong> Safely concluding the operation with proper documentation.</li>
      </ul>

      <h3>How We Help</h3>
      <ul>
        <li>✔ Professional undercover agents</li>
        <li>✔ Secure and confidential operations</li>
        <li>✔ Advanced intelligence gathering</li>
        <li>✔ Legal and ethical investigation methods</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>✔ Reveals hidden criminal activities</li>
        <li>✔ Strong and reliable evidence</li>
        <li>✔ Maintains complete confidentiality</li>
        <li>✔ Effective in complex cases</li>
      </ul>

    </div>
  ),
},


  {
  title: "Document Verification Investigation",
  desc: "Accurate verification of documents to detect fraud and ensure authenticity with complete confidentiality.",
  img: veri, // only for card

  full: (
    <div className="sndf-modal-details">

      <h3>About the Service</h3>
      <p>
        Document verification involves checking whether a document is genuine,
        accurate, and legally valid. This service helps individuals and businesses
        avoid fraud, misrepresentation, and legal risks by ensuring that all
        provided documents are authentic and trustworthy.
      </p>

      <h3>What We Verify</h3>
      <ul>
        <li><strong>01 - Identity Documents:</strong> Aadhaar card, PAN card, passport, and ID proofs.</li>
        <li><strong>02 - Educational Certificates:</strong> School, college, and professional qualifications.</li>
        <li><strong>03 - Employment Records:</strong> Job history, experience letters, and company details.</li>
        <li><strong>04 - Property Documents:</strong> Ownership papers, agreements, and legal records.</li>
      </ul>

      <h3>Verification Process</h3>
      <ul>
        <li><strong>01 - Document Collection:</strong> Gathering documents securely.</li>
        <li><strong>02 - Cross Verification:</strong> Checking with official databases and authorities.</li>
        <li><strong>03 - Analysis:</strong> Identifying inconsistencies or forged details.</li>
        <li><strong>04 - Final Report:</strong> Providing a clear and detailed verification report.</li>
      </ul>

      <h3>How We Help</h3>
      <ul>
        <li>✔ Fast and accurate verification process</li>
        <li>✔ Confidential handling of sensitive documents</li>
        <li>✔ Professional and reliable investigation</li>
        <li>✔ Detailed reporting for decision making</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>✔ Prevents fraud and identity theft</li>
        <li>✔ Ensures authenticity and trust</li>
        <li>✔ Supports legal and business decisions</li>
        <li>✔ Provides peace of mind</li>
      </ul>

    </div>
  ),
}


];




// cyber services ..............

const cyberServices = [
  {
    title: "Assets Verification",
    desc: "Verify financial and property details with accuracy.",
    img: asset,
    full: (
      <>
        <p>We verify assets, properties, and financial claims with complete confidentiality.</p>
        <ul>
          <li>Property verification</li>
          <li>Financial background check</li>
          <li>Ownership validation</li>
        </ul>
      </>
    ),
  },
  {
    title: "Mobile & PC Forensics",
    desc: "Analyze digital devices for hidden evidence.",
    img: forensic,
    full: (
      <>
        <p>Recover and analyze data from mobile phones, laptops, and digital devices.</p>
        <ul>
          <li>Deleted data recovery</li>
          <li>Chat & call analysis</li>
          <li>Device tracking</li>
        </ul>
      </>
    ),
  },
  {
    title: "Cyber Fraud Investigation",
    desc: "Track online scams and fraud activities.",
    img: prematrimonial,
    full: (
      <>
        <p>We investigate cyber frauds, scams, and online financial crimes.</p>
        <ul>
          <li>UPI & banking fraud</li>
          <li>Online scam tracking</li>
          <li>Fraud identity tracing</li>
        </ul>
      </>
    ),
  },
  {
    title: "Data Recovery",
    desc: "Recover lost or deleted data securely.",
    img: loyalty,
    full: (
      <>
        <p>We retrieve lost data from damaged or corrupted devices.</p>
        <ul>
          <li>Hard disk recovery</li>
          <li>Pen drive recovery</li>
          <li>Secure data restore</li>
        </ul>
      </>
    ),
  },
  {
    title: "Financial Fraud",
    desc: "Investigate financial crime cases.",
    img: prematrimonial,
    full: (
      <>
        <p>We analyze and track financial fraud cases professionally.</p>
        <ul>
          <li>Transaction tracking</li>
          <li>Fraud analysis</li>
          <li>Evidence reporting</li>
        </ul>
      </>
    ),
  },
  {
    title: "Digital Forensics",
    desc: "Collect and preserve digital evidence.",
    img: loyalty,
    full: (
      <>
        <p>Professional digital forensic investigation for legal and corporate cases.</p>
        <ul>
          <li>Data extraction</li>
          <li>Evidence preservation</li>
          <li>Legal reporting</li>
        </ul>
      </>
    ),
  },
  {
    title: "Honey Trapping",
    desc: "Handle honey trap threats securely.",
    img: prematrimonial,
    full: (
      <>
        <p>We help detect and manage honey trapping cases confidentially.</p>
        <ul>
          <li>Identity verification</li>
          <li>Threat analysis</li>
          <li>Safe resolution</li>
        </ul>
      </>
    ),
  },
];



const Ndf = () => {

    const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedService ? "hidden" : "auto";
  }, [selectedService]);

  const closeModal = () => {
    setSelectedService(null);
  };


  const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};





  return (

    <>

    <Helmet>
      <title>NDF Services | Professional Investigation Solutions</title>
      <meta name="description" content="Explore NDF investigation services offering accurate, confidential, and professional solutions across India." />
    </Helmet>
    
    <section className="sndf-services-hero">

      <div className="sndf-services-hero-container">
        <div className="sndf-services-hero-content">

          <span className="sndf-services-hero-tag">
            PROFESSIONAL SERVICES
          </span>

          <h1 className="sndf-services-hero-title">
            Detective & Cyber Crime <br />
            <span>Investigation Services</span>
          </h1>

          <div className="sndf-services-hero-divider"></div>

          <p className="sndf-services-hero-text">
            SNDF delivers confidential, accurate, and result-driven investigation
            solutions across India. From personal investigations to advanced cyber
            crime analysis, we ensure complete discretion and professional execution.
          </p>

          <div className="sndf-services-hero-buttons">
            <a href="#sndf-enquiry-section" className="sndf-services-hero-btn-primary">
              Get Consultation
            </a>
            <a href="#servicess" className="sndf-services-hero-btn-outline">
              Explore Services
            </a>
          </div>

        </div>

        {/* FLOATING STATS */}
        <div className="sndf-services-hero-stats">
          <div className="sndf-services-hero-stat-box">
            <h3>3500+</h3>
            <p>Cases Solved</p>
          </div>

          <div className="sndf-services-hero-stat-box">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>

          <div className="sndf-services-hero-stat-box">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>

      </div>
    </section>


    {/* our investigation services........................... */}
    <section className="sndf-investigation-top" id="servicess">
      <div className="sndf-investigation-container">

        {/* HEADER */}
        <div className="sndf-investigation-header">
          <h2>Our Investigation Services</h2>
          <p>
            Confidential, professional and result-oriented solutions across all domains.
          </p>
        </div>

        {/* CARDS */}
        <div className="sndf-investigation-cards" 
                
        onClick={(e) => {
          e.stopPropagation();
          console.log("Detective clicked");
          scrollToSection("detective-services-section");
        }}
        >

          {/* CARD 1 */}
          <div className="sndf-investigation-card">
            <div className="sndf-investigation-icon">
              <FaUserSecret />
            </div>
            <h3>Detective Services</h3>
            <p>
              Personal and corporate investigations handled discreetly.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="sndf-investigation-card" 
          
            onClick={(e) => {
              e.stopPropagation();  // 🔥 VERY IMPORTANT
              console.log("Cyber clicked");
              scrollToSection("cyber-services-section");
            }}
          >
            <div className="sndf-investigation-icon">
              <FaBalanceScale />
            </div>
            <h3>Cyber Crime & Forensic Investigation</h3>
            <p>
              Cyber crime, digital forensics and legal investigation services.
            </p>
          </div>

        </div>

      </div>
    </section>

    {/* services section............................. */}
    
     <section className="sndf-services-section" id="detective-services-section">
      <div className="sndf-services-container">
        <h2 className="sndf-services-title">Detective Services</h2>

        <div className="sndf-services-grid">
          {services.map((service, index) => (
            <div className="sndf-service-card" key={index}>
              <img
                src={service.img}
                alt={service.title}
                className="sndf-service-img"
              />

              <div className="sndf-service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <button
                  className="sndf-view-btn"
                  onClick={() => setSelectedService(service)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {/* ===== MODAL ===== */}
{selectedService && (
  <div className="sndf-modal-overlay" onClick={closeModal}>
    <div
      className="sndf-modal-box"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="sndf-modal-content">
        
        <h2>{selectedService.title}</h2>

        {selectedService.full ? (
          selectedService.full
        ) : (
          <p>
            Detailed information for this service is currently not
            available. Please contact us for more details.
          </p>
        )}

        <button
          className="sndf-close-btn"
          onClick={closeModal}
        >
          Close
        </button>

      </div>
    </div>
  </div>
)}
</section>

{/* cyber crime and forensic investigation */}

   {/* cyber crime and forensic investigation */}

<section className="cyber"  id="cyber-services-section">
  <div className="container">
    <h2 className="cyber-title">
      Cyber Crime & Forensic Investigation
    </h2>

    <div className="sndf-services-grid">
      {cyberServices.map((service, index) => (

        <div className="sndf-service-card" key={index}>
          <img
            src={service.img}
            alt={service.title}
            className="sndf-service-img"
          />

          <div className="sndf-service-content">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            <button
              className="sndf-view-btn"
              onClick={() => setSelectedService(service)}
            >
              View Details
            </button>
          </div>
        </div>

      ))}
    </div>
  </div>
</section>

    
{/* enquiry..................................... */}
<section className="sndf-enquiry" id="sndf-enquiry-section">
  <div className="sndf-enquiry-container">

    {/* LEFT CONTENT */}
    <div className="sndf-enquiry-left">
      <h2 className="sndf-enquiry-title">
        Request a Confidential Consultation
      </h2>

      <p className="sndf-enquiry-sub">
        Share your concern with complete privacy. Our experts will connect with you shortly.
      </p>

      <ul className="sndf-enquiry-points">
        <li>✔ 100% Confidential</li>
        <li>✔ Trusted Professionals</li>
        <li>✔ Fast Response</li>
      </ul>
    </div>

    {/* RIGHT FORM */}
    <div className="sndf-enquiry-formBox">
      <form className="sndf-enquiry-form">

        <input type="text" placeholder="Your Name" required />
        <input type="tel" placeholder="Phone Number" required />

        <select required>
          <option value="">Select Service</option>
          <option>Prematrimonial Investigation</option>
          <option>Corporate Investigation</option>
          <option>Surveillance</option>
          <option>Cyber Crime</option>
          <option>Forensic Investigation</option>
        </select>

        <textarea placeholder="Your Message" rows="4"></textarea>

        <button type="submit" className="sndf-enquiry-btn">
          Submit Enquiry
        </button>

      </form>
    </div>

  </div>
</section>
    

</>

  );
};

export default Ndf;