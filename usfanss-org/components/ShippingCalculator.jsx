"use client";

import { useMemo, useState } from "react";
import { calculateShippingWeight } from '../lib/shipping-weight';

export default function ShippingCalculator({ labels }) {
  const [length, setLength] = useState(40);
  const [width, setWidth] = useState(30);
  const [height, setHeight] = useState(20);
  const [weight, setWeight] = useState(2.5);
  const [divisor, setDivisor] = useState(6000);
  const result = useMemo(
    () => calculateShippingWeight({length, width, height, weight, divisor}),
    [length, width, height, weight, divisor]
  );

  const fields = [
    [labels.length, length, setLength],
    [labels.width, width, setWidth],
    [labels.height, height, setHeight],
    [labels.weight, weight, setWeight],
    [labels.divisor, divisor, setDivisor],
  ];

  return (
    <div className="calculator">
      <div className="calculator-fields">
        {fields.map(([label, value, setter]) => (
          <label key={label}>
            <span>{label}</span>
            <input
              type="number"
              min="0.1"
              step="0.1"
              value={value}
              onChange={(event) => setter(event.target.value)}
            />
          </label>
        ))}
      </div>
      <div className="calculator-result" aria-live="polite">
        <span>{labels.volume}</span>
        <strong>{result ? `${result.volume.toFixed(2)} kg` : '—'}</strong>
        <span>{labels.chargeable}</span>
        <strong>{result ? `${result.comparison.toFixed(2)} kg` : '—'}</strong>
      </div>
      {!result && <p role="status">{labels.invalid}</p>}
      <p className="calculator-note">{labels.calculationNote}</p>
    </div>
  );
}
