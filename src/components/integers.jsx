import React from "react";

const properties = [
  {
    name: "Closure",
    description:
      "For any two integers a and b, the results of a + b and a × b are also integers. Division does not guarantee this, as a / b may yield a non-integer.",
  },
  {
    name: "Associativity",
    description:
      "The order of grouping in addition and multiplication does not affect the result: (a + b) + c = a + (b + c) and (a × b) × c = a × (b × c).",
  },
  {
    name: "Commutativity",
    description:
      "Allows rearranging terms in addition or multiplication: a + b = b + a and a × b = b × a.",
  },
  {
    name: "Distributive Property",
    description:
      "Links multiplication and addition, allowing expansion of expressions: a × (b + c) = (a × b) + (a × c).",
  },
  {
    name: "Identity Elements",
    description:
      "In addition, the identity is 0 (a + 0 = a); in multiplication, the identity is 1 (a × 1 = a).",
  },
  {
    name: "Inverse Elements",
    description:
      "Each integer a has an additive inverse -a such that a + (-a) = 0. Only 1 and -1 have multiplicative inverses within integers.",
  },
];

const IntegerProperties = () => {
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
        <div
          key={index}
          style={{
            marginBottom: "15px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ color: "#007acc" }}>{property.name}</h3>
          <p>{property.description}</p>
        </div>
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
    </div>
  );
};

export default IntegerProperties;
