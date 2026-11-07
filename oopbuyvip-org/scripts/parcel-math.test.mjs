import assert from "node:assert/strict";
import { parcelWeights } from "../app/parcel-math.mjs";
assert.deepEqual(parcelWeights(2000,40,30,20,6000), { volume:24000, actual:2, volumetric:4, comparison:4 });
assert.equal(parcelWeights(2000,40,30,15,6000).volumetric,3);
assert.equal(parcelWeights(5000,40,30,20,6000).comparison,5);
assert.equal(parcelWeights(2500,40,30,20,5000).volumetric,4.8);
for (const invalid of [0,-1,NaN,Infinity,"6000",undefined]) {
  for (let i=0;i<5;i++) { const values=[2000,40,30,20,6000]; values[i]=invalid; assert.equal(parcelWeights(...values),null); }
}
assert.equal(parcelWeights(2000,1e300,1e300,20,6000),null);
console.log("Parcel worksheet passed: unit conversion, dimensional divisor, dominant weight, reduced volume and invalid inputs.");
