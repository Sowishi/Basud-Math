import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Modal } from "flowbite-react";

const properties = [
  {
    name: "Closure",
    description:
      "For any two integers a and b, the results of a + b and a × b are also integers. Division does not guarantee this, as a / b may yield a non-integer.",
    exampleQuestion: "Is the result of 5 + 3 an integer? What about 5 / 3?",
    exampleSolution:
      "5 + 3 = 8, which is an integer. However, 5 / 3 ≈ 1.67, which is not an integer.",
  },
  {
    name: "Associativity",
    description:
      "The order of grouping in addition and multiplication does not affect the result: (a + b) + c = a + (b + c) and (a × b) × c = a × (b × c).",
    exampleQuestion:
      "Evaluate (2 + 3) + 4 and 2 + (3 + 4). Are the results the same?",
    exampleSolution:
      "(2 + 3) + 4 = 9 and 2 + (3 + 4) = 9. Both results are the same, demonstrating associativity.",
  },
  {
    name: "Commutativity",
    description:
      "Allows rearranging terms in addition or multiplication: a + b = b + a and a × b = b × a.",
    exampleQuestion: "Is 4 + 5 equal to 5 + 4? What about 4 × 5 and 5 × 4?",
    exampleSolution:
      "4 + 5 = 9 and 5 + 4 = 9, so they are equal. Also, 4 × 5 = 20 and 5 × 4 = 20, showing that the result is the same for both orders.",
  },
  {
    name: "Distributive Property",
    description:
      "Links multiplication and addition, allowing expansion of expressions: a × (b + c) = (a × b) + (a × c).",
    exampleQuestion:
      "Calculate 3 × (4 + 2) and (3 × 4) + (3 × 2). Are the results the same?",
    exampleSolution:
      "3 × (4 + 2) = 3 × 6 = 18, and (3 × 4) + (3 × 2) = 12 + 6 = 18. The results are the same, showing distributivity.",
  },
  {
    name: "Identity Elements",
    description:
      "In addition, the identity is 0 (a + 0 = a); in multiplication, the identity is 1 (a × 1 = a).",
    exampleQuestion: "What is the result of 7 + 0 and 7 × 1?",
    exampleSolution:
      "7 + 0 = 7, and 7 × 1 = 7, showing that 0 and 1 are the identity elements for addition and multiplication, respectively.",
  },
  {
    name: "Inverse Elements",
    description:
      "Each integer a has an additive inverse -a such that a + (-a) = 0. Only 1 and -1 have multiplicative inverses within integers.",
    exampleQuestion:
      "What is the additive inverse of 8? Does 8 have a multiplicative inverse in integers?",
    exampleSolution:
      "The additive inverse of 8 is -8, because 8 + (-8) = 0. However, 8 does not have an integer multiplicative inverse because no integer multiplied by 8 equals 1.",
  },
];

const IntegerProperties = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExample, setSelectedExample] = useState(null);

  const handleClick = (example) => {
    setSelectedExample(example);
    setModalOpen(true);
  };

  // Function to convert text to speech
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
      <h2>Properties of Integer Operations</h2>
      {properties.map((property, index) => (
        <motion.div
          key={index}
          style={{
            marginBottom: "15px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          initial={{ x: -200, opacity: 0 }} // Start off-screen to the left
          animate={{ x: 0, opacity: 1 }} // Animate to the center with full opacity
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 8px rgba(0, 122, 204, 0.5)",
          }} // Hover effect
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
      <div style={{ marginTop: "20px", fontWeight: "bold" }}>
        <p>Key Takeaway:</p>
        <p>
          The set of integers is structured by closure, associativity,
          commutativity, distributivity, identity, and inverse properties. These
          properties are essential for simplifying calculations, understanding
          equations, and building more complex mathematical systems.
        </p>
      </div>

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

export default IntegerProperties;
