
import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 space-y-8">
      <header className="flex flex-col items-center text-center space-y-4">
        <img
          src="/IMG_6879.jpeg"
          alt="Thilak Kumar Akula"
          className="w-40 h-40 rounded-full shadow-lg border-4 border-gray-700"
        />
        <h1 className="text-3xl font-bold">Thilak Kumar Akula</h1>
        <p className="text-lg text-gray-300">
          Cloud Engineer | Python Developer | React.js Enthusiast | Power BI Analyst
        </p>
        <div className="flex gap-4 justify-center text-sm text-gray-400">
          <p>Email: thilakkumarakula@gmail.com</p>
          <p>|</p>
          <a href="https://www.linkedin.com/in/akulathilakkumar" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <p>|</p>
          <a href="https://github.com/thilakkumar" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Customer Support Dashboard (React + AWS)",
            tech: "React, Flask, AWS Lambda, DynamoDB",
            desc: "Integrated GPT-4 for NLP queries, hosted securely on AWS with API Gateway.",
          },
          {
            title: "Cloud-Based Text Summarization App",
            tech: "React, Python, SQS, S3",
            desc: "Summarizes long articles with FastAPI backend and async queue system.",
          },
          {
            title: "House Price Prediction Web App",
            tech: "Python, Flask, EC2, MySQL",
            desc: "Real-time price predictions with secure retraining endpoints.",
          },
          {
            title: "E-Commerce Analytics Dashboard",
            tech: "Power BI, Athena, React",
            desc: "Dynamic dashboard built from AWS S3 data using Power BI and filters."
          },
        ].map((project, i) => (
          <div key={i} className="bg-gray-800 text-white border border-gray-700 p-4 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-400 mb-1">Tech: {project.tech}</p>
            <p>{project.desc}</p>
          </div>
        ))}
      </section>

      <div className="text-center">
        <a
          href="/thilakkumarakula_cv00001%20(1).pdf"
          download
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow"
        >
          Download Resume (PDF)
        </a>
      </div>
    </div>
  );
}
