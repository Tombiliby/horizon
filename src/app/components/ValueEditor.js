"use client";
import React, { useState } from "react";

const ValueEditor = () => {
  const [sliderValues, setSliderValues] = useState({
    perspective: 500,
    variable2: 30,
    variable3: 70,
  });

  const handleSliderChange = (variable, value, unit) => {
    setSliderValues((prevValues) => ({
      ...prevValues,
      [variable]: value,
    }));

    // Modifier la variable CSS correspondante
    document.documentElement.style.setProperty(
      `--${variable}`,
      `${value}${unit}`
    );
  };

  return (
    <div className="confZone">
      <div>
        <label htmlFor="variable1">
          Variable 1:{" "}
          {document.documentElement.style.getPropertyValue(`--perspective`)}
        </label>
        <input
          id="variable1"
          type="range"
          min="0"
          max="1000"
          value={sliderValues.perspective}
          onChange={(e) =>
            handleSliderChange("perspective", parseInt(e.target.value), "px")
          }
        />
      </div>
      <div>
        <label htmlFor="variable2">Variable 2:</label>
        <input
          id="variable2"
          type="range"
          min="0"
          max="100"
          value={sliderValues.variable2}
          onChange={(e) =>
            handleSliderChange("variable2", parseInt(e.target.value))
          }
        />
      </div>
      <div>
        <label htmlFor="variable3">Variable 3:</label>
        <input
          id="variable3"
          type="range"
          min="0"
          max="100"
          value={sliderValues.variable3}
          onChange={(e) =>
            handleSliderChange("variable3", parseInt(e.target.value))
          }
        />
      </div>
    </div>
  );
};

export default ValueEditor;
