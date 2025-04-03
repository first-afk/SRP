const skinRoutines = {
  oily: {
    morning: [
      {
        step: 1,
        product: "Gentle Foaming Cleanser",
        description: "Start with a water-based cleanser to remove excess oil",
      },
      {
        step: 2,
        product: "Alcohol-free Toner",
        description: "Balance pH levels and control oil",
      },
      {
        step: 3,
        product: "Lightweight Serum",
        description: "Use niacinamide or salicylic acid serum",
      },
      {
        step: 4,
        product: "Oil-free Moisturizer",
        description: "Light, non-comedogenic moisturizer",
      },
      {
        step: 5,
        product: "Sunscreen",
        description: "Oil-free SPF 30+ sunscreen",
      },
    ],
    evening: [
      {
        step: 1,
        product: "Double Cleanse",
        description: "Oil cleanser followed by foam cleanser",
      },
      {
        step: 2,
        product: "Exfoliating Toner",
        description: "BHA/AHA toner (2-3 times a week)",
      },
      {
        step: 3,
        product: "Treatment",
        description: "Spot treatment for acne if needed",
      },
      {
        step: 4,
        product: "Lightweight Moisturizer",
        description: "Oil-free night moisturizer",
      },
    ],
  },
  dry: {
    morning: [
      {
        step: 1,
        product: "Cream Cleanser",
        description: "Gentle, hydrating cleanser",
      },
      {
        step: 2,
        product: "Hydrating Toner",
        description: "Alcohol-free hydrating toner",
      },
      {
        step: 3,
        product: "Hyaluronic Acid Serum",
        description: "For deep hydration",
      },
      {
        step: 4,
        product: "Rich Moisturizer",
        description: "Cream-based moisturizer",
      },
      {
        step: 5,
        product: "Sunscreen",
        description: "Moisturizing SPF 30+ sunscreen",
      },
    ],
    evening: [
      { step: 1, product: "Cream Cleanser", description: "Gentle cleansing" },
      {
        step: 2,
        product: "Hydrating Essence",
        description: "Extra hydration layer",
      },
      {
        step: 3,
        product: "Treatment",
        description: "Night repair cream or face oil",
      },
      {
        step: 4,
        product: "Rich Night Cream",
        description: "Heavy moisturizer",
      },
    ],
  },
  sensitive: {
    morning: [
      {
        step: 1,
        product: "Cream Cleanser",
        description: "Gentle, hydrating cleanser",
      },
      {
        step: 2,
        product: "Hydrating Toner",
        description: "Alcohol-free hydrating toner",
      },
      {
        step: 3,
        product: "Hyaluronic Acid Serum",
        description: "For deep hydration",
      },
      {
        step: 4,
        product: "Rich Moisturizer",
        description: "Cream-based moisturizer",
      },
      {
        step: 5,
        product: "Sunscreen",
        description: "Moisturizing SPF 30+ sunscreen",
      },
    ],
    evening: [
      { step: 1, product: "Cream Cleanser", description: "Gentle cleansing" },
      {
        step: 2,
        product: "Hydrating Essence",
        description: "Extra hydration layer",
      },
      {
        step: 3,
        product: "Treatment",
        description: "Night repair cream or face oil",
      },
      {
        step: 4,
        product: "Rich Night Cream",
        description: "Heavy moisturizer",
      },
    ],
  },
  normal:{
    morning: [
      {
        step: 1,
        product: "Cream Cleanser",
        description: "Gentle, hydrating cleanser",
      },
      {
        step: 2,
        product: "Hydrating Toner",
        description: "Alcohol-free hydrating toner",
      },
      {
        step: 3,
        product: "Hyaluronic Acid Serum",
        description: "For deep hydration",
      },
      {
        step: 4,
        product: "Rich Moisturizer",
        description: "Cream-based moisturizer",
      },
      {
        step: 5,
        product: "Sunscreen",
        description: "Moisturizing SPF 30+ sunscreen",
      },
    ],
    evening: [
      { step: 1, product: "Cream Cleanser", description: "Gentle cleansing" },
      {
        step: 2,
        product: "Hydrating Essence",
        description: "Extra hydration layer",
      },
      {
        step: 3,
        product: "Treatment",
        description: "Night repair cream or face oil",
      },
      {
        step: 4,
        product: "Rich Night Cream",
        description: "Heavy moisturizer",
      },
    ],
  }
};

const generateRoutine = (formAnswers) => {
  // Logic to determine skin type based on form answers
  let skinType = "";

  if (formAnswers[1] === "oily/shiny") {
    skinType = "oily";
  } else if (formAnswers[1] === "dry/tight") {
    skinType = "dry";
  } else if (formAnswers[1] === "balanced") {
    skinType = "normal";
  } else if (formAnswers[1] === "sensitive") {
    skinType = "sensitive";
  }
  // Add more conditions based on your form answers

  return {
    skinType,
    routine: skinRoutines[skinType] || skinRoutines.normal,
  };
};

export { skinRoutines, generateRoutine };
