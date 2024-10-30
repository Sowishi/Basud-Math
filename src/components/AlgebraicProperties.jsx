import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Modal } from "flowbite-react";

const algebraProperties = [
  {
    name: "Monomial",
    description: "An expression with a single term (e.g., 5x).",
    exampleQuestion: "Simplify 3x + 5x.",
    exampleSolution: "3x + 5x = 8x.",
  },
  {
    name: "Binomial",
    description: "An expression with two terms (e.g., x + 3).",
    exampleQuestion: "Evaluate (x + 2)(x - 3).",
    exampleSolution: "(x + 2)(x - 3) = x^2 - 3x + 2x - 6 = x^2 - x - 6.",
  },
  {
    name: "Polynomial",
    description: "An expression with multiple terms (e.g., 2x^2 + 3x - 5).",
    exampleQuestion: "Simplify 2x^2 + 4x - x.",
    exampleSolution: "2x^2 + 4x - x = 2x^2 + 3x.",
  },
  {
    name: "Multiplication of Algebraic Expressions",
    description: "Use distributive property (a(b + c) = ab + ac) to expand.",
    exampleQuestion: "Expand 3(x + 4).",
    exampleSolution: "3(x + 4) = 3x + 12.",
  },
];

const AlgebraicProperties = () => {
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

  const handleCloseModal = () => {
    window.speechSynthesis.cancel(); // Stop any ongoing speech synthesis
    setModalOpen(false);
  };

  return (
    <div
      style={{
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h2>Properties of Algebraic Expressions</h2>
      {algebraProperties.map((property, index) => (
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
      <Modal show={modalOpen} onClose={handleCloseModal}>
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

export default AlgebraicProperties;
