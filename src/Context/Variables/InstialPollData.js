export const initialState = {
  data: [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      optionValues: [23, 10, 35, 32],
      correctOption: 1,
      id: crypto.randomUUID(),
    },
    {
      question: "Which element has the atomic number 1?",
      options: ["Helium", "Oxygen", "Carbon", "Hydrogen"],

      optionValues: [20, 25, 25, 20],
      correctOption: 4,
      id: crypto.randomUUID(),
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["CO2", "H2O", "O2", "NaCla"],
      optionValues: [18, 48, 20, 14],
      correctOption: 2,
      id: crypto.randomUUID(),
    },
    {
      question: "Largest planet in Solar?",
      options: ["Venus", "Mars", "Jupiter", "Earth"],
      optionValues: [5, 10, 80, 5],
      correctOption: 3,
      id: crypto.randomUUID(),
    },
    {
      question: "Who wrote `Romeo and Juliet`?",
      options: [
        "William Shakespeare",
        "Mark Twain",
        "Jane Austen",
        "Charles Dickens",
      ],
      optionValues: [40, 10, 30, 20],
      correctOption: 1,
      id: crypto.randomUUID(),
    },
  ],
};
