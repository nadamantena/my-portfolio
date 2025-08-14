import React from 'react';
import './Academics.css';

const academics = [
  { institution: "Abhyas the Global School-CBSE(Peddameram)", year: "2020", score: "84%" },
  { institution: "The Vishnu School-CBSE(Kovvada)", year: "2022", score: "81%" },
  { institution: "SRKR Engineering College-JNTUK(Bhimavaram)", year: "2026", score: "8.52 CGPA" }
];

function Academics() {
  return (
    <section className="academics">
      <h2>Academics</h2>
      <ul>
        {academics.map((item, index) => (
          <li key={index} className="academic-item">
            <span className="institution">{item.institution}</span>
            <span className="year">Year: {item.year}</span>
            <span className="score">Score: {item.score}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Academics;
