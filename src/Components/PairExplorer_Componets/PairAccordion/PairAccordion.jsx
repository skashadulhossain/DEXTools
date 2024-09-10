// PairAccordion.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './PairAccordion.css';

const PairAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "How much is 1 DEXT?",
      answer: "The price of 1 DEXT is $0.417 USD."
    },
    {
      question: "Where can I buy DEXT coins?",
      answer: "You can buy DEXT (DEXTools) with the DEXTswap on the DEXT/WETH pool page. DEXTools is the most trusted place for people to trade, follow and manage DEXT token. It's fast and secure."
    },
    {
      question: "Which is DEXT token distribution?",
      answer: "The top 1 holders of DEXT own the 30.58% of the tokens."
    },
    {
      question: "Which is the DEXT (DEXTools) contract on Ethereum?",
      answer: "0xfb7b4564402e5500db5bb6d63ae671302777c75a is DEXT (DEXTools) token contract address on Ethereum. The pair DEXT/WETH contract address is 0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d."
    },
    {
      question: "How much DEXT can I buy with 100 USD?",
      answer: "Based on the current price of $0.417 USD per DEXT, you can buy approximately 239.81 DEXT with 100 USD. (100 / 0.417 ≈ 239.81)"
    },
    {
      question: "How can I buy DEXT tokens?",
      answer: [
        "Connect your wallet to the DEXTswap using Metamask",
        "Enter the amount of DEXT you want to buy.",
        "Sign with your wallet the Approve and Swap actions.",
        "Add DEXT token to Metamask."
      ]
    }
  ];

  return (
    <div className="PairAccordion-container">
      <div className="PairAccordion-header">
        <h2 className="PairAccordion-title">DEXTools Live Price and Buy Information</h2>
        <div className="PairAccordion-controls">
          <button className="PairAccordion-update">Update</button>
          <img className="PairAccordion-logo" src="/api/placeholder/24/24" alt="DEXT Logo" />
          <button className="PairAccordion-toggle">
            {expandedIndex !== null ? '−' : '+'}
          </button>
        </div>
      </div>
      <p className="PairAccordion-info">
        The DEXTools live price is $0.415 USD with a market cap of $34.46M USD, a 24-hour trading volume of $166.33K USD, a 0.0059% increase in the last 24 hours, and a circulating supply of 84.38M DEXT coins out of a maximum of 127.55M.
      </p>
      <div className="PairAccordion-questions">
        {accordionData.map((item, index) => (
          <div key={index} className="PairAccordion-question">
            <div className="PairAccordion-question-header" onClick={() => toggleAccordion(index)}>
              <span className={`PairAccordion-arrow ${expandedIndex === index ? 'rotated' : ''}`}>
                <ChevronDown size={20} />
              </span>
              <span>{item.question}</span>
            </div>
            <div className={`PairAccordion-answer ${expandedIndex === index ? 'expanded' : ''}`}>
              <div className="PairAccordion-answer-content">
                {Array.isArray(item.answer) ? (
                  <ol>
                    {item.answer.map((step, stepIndex) => (
                      <li key={stepIndex}>{step}</li>
                    ))}
                  </ol>
                ) : (
                  <p>{item.answer}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PairAccordion;