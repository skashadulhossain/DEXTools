import React, { useState } from 'react';
import './CreateToken.css';
import { Lock, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import TokenHeader from '../TokenHeader/TokenHeader';
import Footer from '../../Layouts/Admin-Layout/Admin-Footer/AdminFooter';


const TokenCreationInterface = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);

  const questions = [
    {
      question: "What are the benefits of using your platform?",
      answer: "Easily develop a more secure token for your investors. Build trust by creating a smart contract that is designed to limit the possibility of scams by preventing malicious functionality. In addition, get more visibility for your project on the most used online platform by DeFi traders."
    },
    { question: "How much does token creation cost?", answer: "Cost details would go here." },
    { question: "Which chains are supported?", answer: "Supported chains would be listed here." },
    { question: "What should I do once I've created a token?", answer: "Next steps after token creation would be described here." },
    { question: "How can I get help?", answer: "Information on getting help would be provided here." }
  ];

  return (
    <>
    
    <TokenHeader/>
    <div className="token-creation-interface">
      <div className="container">
        <div className="mode-toggle">
          <button className="active">BASIC</button>
          <button>ADVANCED</button>
        </div>

        <div className="progress-bar">
          <div className="step active">
            <div className="step-number">1</div>
            <div className="step-name">TOKEN INFO</div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-name">VERIFY & CREATE</div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-name">DONE</div>
          </div>
        </div>

        <div className="content">
          <div className="token-info">
            <h2>1. INFO</h2>
            <div className="form-group">
              <label>Name*</label>
              <input type="text" placeholder="Ethereum" />
            </div>
            <div className="form-group">
              <label>Symbol*</label>
              <div className="input-with-icon">
                <Lock size={16} />
                <input type="text" placeholder="ETH" disabled />
              </div>
              <button className="connect-button">CONNECT</button>
            </div>
            <div className="form-group">
              <label>Blockchain*</label>
              <select>
                <option>Select blockchain</option>
              </select>
            </div>
            <div className="form-group">
              <label>Total Supply*</label>
              <input type="number" placeholder="0" />
            </div>
          </div>
          
          <div className="faq">
            {questions.map((q, index) => (
              <div key={index} className={`faq-item ${activeQuestion === index ? 'active' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => setActiveQuestion(activeQuestion === index ? -1 : index)}
                >
                  {q.question}
                  {activeQuestion === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {activeQuestion === index && (
                  <div className="faq-answer">
                    {q.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="next-button-container">
          <button className="next-button">
          <ArrowRight size={20} /> Next 
          </button>
        </div>
      </div>

      <style jsx>{`
        .token-creation-interface {
          background-color: #111827;
          color: white;
          min-height: 100vh;
          padding: 2rem;
          font-family: Arial, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .mode-toggle {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .mode-toggle button {
          background-color: #1f2937;
          color: #a0aec0;
          padding: 0.5rem 1rem;
          border: none;
          cursor: pointer;
        }

        .mode-toggle button.active {
          background-color: #06b6d4;
          color: white;
        }

        .mode-toggle button:first-child {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }

        .mode-toggle button:last-child {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }

        .progress-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .step {
          text-align: center;
          flex: 1;
        }

        .step-number {
          width: 2rem;
          height: 2rem;
          background-color: #1f2937;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
        }

        .step.active .step-number {
          background-color: #06b6d4;
        }

        .step-name {
          color: #a0aec0;
        }

        .step.active .step-name {
          color: #06b6d4;
        }

        .content {
          display: flex;
          gap: 2rem;
        }

        .token-info{
          flex: 1;
          background-color: #1f2937;
          padding: 1.5rem;
          border-radius: 0.5rem;
        }

        .faq {
          flex: 1;
          gap: 5px,
          display: flex,
          padding: 1.5rem;
          flex-direction: column
          border-radius: 0.5rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
        }

        .form-group input, .form-group select {
          width: 100%;
          padding: 0.5rem;
          background-color: #111827;
          border: none;
          border-radius: 0.25rem;
          color: white;
        }

        .input-with-icon {
          position: relative;
        }

        .input-with-icon svg {
          position: absolute;
          left: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
          color: #a0aec0;
        }

        .input-with-icon input {
          padding-left: 2rem;
        }

        .connect-button {
          background-color: #06b6d4;
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          margin-top: 0.5rem;
        }

        .faq-item {
          margin-bottom: 0.5rem;
        }

        .faq-question {
          width: 100%;
          text-align: left;
          padding: 1rem;
          background-color: #1f2937;
          border: none;
          border-radius: 0.25rem;
          color: white;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-answer {
          padding: 1rem;
          background-color: #1f2937;
          border-radius: 0 0 0.25rem 0.25rem;
        }

        .next-button-container {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .next-button {
          background-color: #06b6d4;
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .next-button svg {
          margin-left: 0.5rem;
        }
      `}</style>
    </div>
    <Footer/>

    </>
  );
};

export default TokenCreationInterface;