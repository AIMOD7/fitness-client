import React, { useState } from "react";
import "./diet.css";

const Diet = () => {
  const [activeTab, setActiveTab] = useState("Cutting");

  const plans = {
    Cutting: {
      macros: { Calories: 1800, Protein: "150g", Carbs: "120g", Fat: "50g" },
      meals: [
        {
          name: "Lean Morning Start",
          calories: 400,
          protein: "25g",
          carbs: "30g",
          fat: "10g",
          ingredients: ["Oats", "Egg Whites", "Blueberries"]
        },
        {
          name: "Light Power Lunch",
          calories: 450,
          protein: "30g",
          carbs: "40g",
          fat: "12g",
          ingredients: ["Grilled Chicken", "Quinoa", "Spinach"]
        },
        {
          name: "Brunch",
          calories: 350,
          protein: "20g",
          carbs: "35g",
          fat: "8g",
          ingredients: ["Greek Yogurt", "Nuts", "Honey"]
        },
        {
          name: "Dinner",
          calories: 500,
          protein: "40g",
          carbs: "15g",
          fat: "20g",
          ingredients: ["Salmon", "Broccoli", "Olive Oil"]
        }
      ]
    },
    Bulking: {
      macros: { Calories: 2800, Protein: "200g", Carbs: "300g", Fat: "80g" },
      meals: [
        {
          name: "Power Morning Start",
          calories: 600,
          protein: "40g",
          carbs: "70g",
          fat: "15g",
          ingredients: ["Whole Eggs", "Avocado Toast", "Banana"]
        },
        {
          name: "Muscle Gain Lunch",
          calories: 700,
          protein: "50g",
          carbs: "80g",
          fat: "20g",
          ingredients: ["Meat/Chicken", "Brown Rice", "Green Beans"]
        },
        {
          name: "Bulking Brunch",
          calories: 550,
          protein: "35g",
          carbs: "65g",
          fat: "18g",
          ingredients: ["Peanut Butter", "Smoothie", "Granola"]
        },
        {
          name: "Heavy Dinner",
          calories: 800,
          protein: "60g",
          carbs: "85g",
          fat: "25g",
          ingredients: ["Steak", "Sweet Potato", "Asparagus"]
        }
      ]
    }
  };

  const currentPlan = plans[activeTab];

  return (
    <div className="diet-planner">
      <div className="tabs">
        {["Bulking", "Cutting"].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="macro-section">
        <h2>{activeTab} Plan</h2>
        <div className="macros">
          {Object.entries(currentPlan.macros).map(([key, value]) => (
            <div key={key} className="macro-card">
              <h3>{key}</h3>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="meals">
        {currentPlan.meals.map((meal, index) => (
          <div key={index} className="meal-card">
            <h3>{meal.name}</h3>
            <p><strong>Calories:</strong> {meal.calories}</p>
            <p><strong>Protein:</strong> {meal.protein} | <strong>Carbs:</strong> {meal.carbs} | <strong>Fat:</strong> {meal.fat}</p>
            <h4>Ingredients:</h4>
            <ul>
              {meal.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diet;
