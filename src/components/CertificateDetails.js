import React from "react";
import { useParams, Link } from "react-router-dom";

const certificates = {
  "AI-ML-DS Internship": {
    title: "AI-ML-DS Internship",
    provider: "Blackbucks Engineers",
    year: 2024,
    image: `${process.env.PUBLIC_URL}/cert1.jpg`,
    description: "The AI-ML-DS Internship with the International Institute of Digital Technologies, Blackbuck Engineers, and APSCHE was an intensive 8-week program that provided hands-on experience in Artificial Intelligence, Machine Learning, and Data Science. Rated “Excellent” for performance, the internship helped in developing strong foundations in intelligent technologies, data analysis, and processing techniques."
  },
  "DevOps Workshop": {
    title: "DevOps Workshop",
    provider: "BrainOVision Solutions",
    year: 2025,
    image: `${process.env.PUBLIC_URL}/cert2.jpg`,
    description: "The DevOps Workshop and Flowthon Participation at SRKR Engineering College, organized in collaboration with Brainovision Solutions, included a 3-day workshop followed by a 24-hour Flowthon event held between February 10 and 14, 2025. This program fostered collaborative software development skills, introduced best practices in DevOps, and strengthened teamwork through a real-time competitive environment."
  },
  "Web Development Program": {
    title: "Web Development Program",
    provider: "CSI-SRKREC",
    year: 2024,
    image: `${process.env.PUBLIC_URL}/cert3.jpg`,
    description: "The Web Development Training conducted by the CSI Student Branch at SRKR Engineering College ran for 10 days from August 19 to August 28, 2024. Participants engaged in practical exercises on web development fundamentals, coding, and building functional web applications, gaining both conceptual and applied skills in modern web technologies."
  },
  "UI-UX Design Internship": {
    title: "UI-UX Design Internship",
    provider: "Blackbucks Engineers",
    year: 2025,
    image: `${process.env.PUBLIC_URL}/cert4.jpg`,
    description: "The UI/UX Design Internship with Blackbuck Engineers, held from May to July 2025 over 120 hours, focused on human-centered design principles. It provided expertise in tools like Figma and Adobe XD while teaching methods to create visually appealing, user-friendly digital experiences."
  },
  "Career Essentials in Generative AI Course": {
    title: "Career Essentials in Generative AI Course",
    provider: "Microsoft & Linkedin",
    year: 2024,
    image: `${process.env.PUBLIC_URL}/cert5.jpg`,
    description: "The Career Essentials in Generative AI course offered by Microsoft and LinkedIn Learning, completed on July 27, 2024, covered essential AI concepts, computer ethics, and responsible approaches to generative AI. Through a learning path lasting nearly five hours, it introduced practical AI use cases and ethical considerations for emerging technologies."
  },
  "Data Visualisation Course": {
    title: "Data Visualisation",
    provider: "TATA & FORAGE",
    year: 2023,
    image: `${process.env.PUBLIC_URL}/cert6.jpg`,
    description: "The Data Visualization: Empowering Business with Effective Insights virtual experience, offered by TATA and Forage and completed on September 10, 2023, taught strategies for framing business problems, choosing effective visualizations, and communicating insights for data-driven decision-making."
  },
  "Hardware and Operating Course": {
    title: "Hardware and Operating Course",
    provider: "IBM",
    year: 2024,
    image: `${process.env.PUBLIC_URL}/cert7.jpg`,
    description: "The IBM Hardware and Operating Systems certificate on edX provides foundational knowledge of computer hardware components, operating systems, and troubleshooting techniques. It covers identifying internal parts, connecting peripherals, configuring system settings, and performing basic repairs across Windows, Mac OS, and Linux. Hands-on labs and a practical project help build skills for IT support roles such as Help Desk or Technical Support."
  },
  "Network Addressing and Basic Troubleshooting Course": {
    title: "Network Addressing and Basic Troubleshooting Course",
    provider: "CISCO Networking Academy",
    year: 2024,
    image: `${process.env.PUBLIC_URL}/cert8.jpg`,
    description: "Cisco Networking Academy: Network Addressing and Basic Troubleshooting course, completed on December 26, 2024, built skills in network protocols, IPv4/IPv6 addressing, troubleshooting methods, and foundational Cisco router and switch usage. This training enhanced understanding of connectivity issues, protocol operations, and network configuration."
  }
// Add more certificate entries here
};

export default function CertificateDetails() {
  const { certId } = useParams();
  const cert = certificates[certId];

  if (!cert) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Certificate not found</h2>
        <Link to="/">Back to Profile</Link>
      </div>
    );
  }

  return (
    <section style={{ maxWidth: "700px", margin: "2rem auto", padding: "2rem", background: "white", borderRadius: "14px", boxShadow: "0 4px 32px rgba(0,0,0,.08)" }}>
      <h2>{cert.title}</h2>
      <p><em>{cert.provider} ({cert.year})</em></p>
      <img src={cert.image} alt={`${cert.title} Certificate`} style={{ width: "100%", maxHeight: "400px", objectFit: "contain", borderRadius: "8px", marginBottom: "1rem" }} />
      <p>{cert.description}</p>
      <Link to="/" style={{ color: "#69c9d3", textDecoration: "underline" }}>Back to Profile</Link>
    </section>
  );
}
