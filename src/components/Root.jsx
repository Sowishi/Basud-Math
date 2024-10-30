import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Modal } from "flowbite-react";

const rootProperties = [
  {
    name: "Rational Roots",
    description:
      "Rational roots are the principal roots that result in a rational number, e.g., √4 = 2.",
    exampleQuestion: "What is the square root of 9?",
    exampleSolution: "√9 = 3, which is a rational number.",
  },
  {
    name: "Irrational Roots",
    description:
      "Irrational roots are principal roots that result in an irrational number, e.g., √2.",
    exampleQuestion: "Is √7 a rational or irrational number?",
    exampleSolution:
      "√7 is an irrational number because it cannot be expressed as a fraction.",
  },
  {
    name: "Perfect Squares",
    description:
      "Perfect squares are numbers with rational square roots, e.g., √16 = 4.",
    exampleQuestion: "What is the square root of 25?",
    exampleSolution: "√25 = 5, a rational number.",
  },
  {
    name: "Non-perfect Squares",
    description:
      "Numbers that are not perfect squares have irrational square roots, e.g., √3.",
    exampleQuestion: "Is √10 rational or irrational?",
    exampleSolution:
      "√10 is irrational because it has a non-repeating, non-terminating decimal form.",
  },
];

const PrincipalRoots = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExample, setSelectedExample] = useState(null);

  const handleClick = (example) => {
    setSelectedExample(example);
    setModalOpen(true);
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      style={{
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h2>Principal Roots of Rational and Irrational Numbers</h2>
      {rootProperties.map((property, index) => (
        <motion.div
          key={index}
          style={{
            marginBottom: "15px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 8px rgba(0, 122, 204, 0.5)",
          }}
          onClick={() =>
            handleClick({
              question: property.exampleQuestion,
              solution: property.exampleSolution,
            })
          }
        >
          <h3 style={{ color: "#007acc" }}>{property.name}</h3>
          <p>{property.description}</p>
        </motion.div>
      ))}

      {/* Modal for displaying the example question and solution */}
      <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header>Example Question and Solution</Modal.Header>
        <Modal.Body>
          {selectedExample && (
            <div>
              <p>
                <strong>Question:</strong> {selectedExample.question}
              </p>
              <p>
                <strong>Solution:</strong> {selectedExample.solution}
              </p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="flex items-center justify-between w-full">
            <button className="btn" onClick={() => setModalOpen(false)}>
              Close
            </button>
            <Button
              className="btn"
              onClick={() =>
                speak(
                  selectedExample
                    ? `${selectedExample.question} ${selectedExample.solution}`
                    : ""
                )
              }
            >
              Read Aloud
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PrincipalRoots;
