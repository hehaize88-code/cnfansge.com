"use client";

import { useMemo, useState } from "react";

export default function ShippingCalculator({ labels }) {
  const [length, setLength] = useState(40);
  const [width, setWidth] = useState(30);
  const [height, setHeight] = useState(20);
  const [weight, setWeight] = useState(2.5);
  const volumeWeight = useMemo(
    () => Math.max(0, (Number(length) * Number(width) * Number(height)) / 6000),
    [length, width, height]
  );
  const chargeable = Math.max(Number(weight) || 0, volumeWeight);

  const fields = [
    [labels.length, length, setLength],
    [labels.width, width, setWidth],
    [labels.height, height, setHeight],
    [labels.weight, weight, setWeight],
  ];

  return (
    <div className="calculator">
      <div className="calculator-fields">
        {fields.map(([label, value, setter]) => (
          <label key={label}>
            <span>{label}</span>
            <input
              type="number"
              min="0"
              step="0.1"
              value={value}
              onChange={(event) => setter(event.target.value)}
            />
          </label>
        ))}
      </div>
      <div className="calculator-result">
        <span>{labels.volume}</span>
        <strong>{volumeWeight.toFixed(2)} kg</strong>
        <span>{labels.chargeable}</span>
        <strong>{chargeable.toFixed(2)} kg</strong>
      </div>
    </div>
  );
}
