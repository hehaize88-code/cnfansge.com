import assert from 'node:assert/strict';
import {calculateWeight} from '../src/scripts/shipping.mjs';
const base={weight:3,length:40,width:30,height:20,divisor:5000,increment:0.5,rule:'higher'};
assert.deepEqual(calculateWeight(base),{volumetric:4.8,billable:5});
assert.deepEqual(calculateWeight({...base,height:15}),{volumetric:3.6,billable:4});
assert.equal(calculateWeight({...base,rule:'actual'}).billable,3);
assert.equal(calculateWeight({...base,weight:6.01}).billable,6.5);
assert.equal(calculateWeight({...base,weight:5,increment:0.1}).billable,5);
assert.ok(Math.abs(calculateWeight({...base,rule:'actual',weight:0.3,increment:0.1}).billable-0.3)<1e-12);
for(const key of ['weight','length','width','height','divisor','increment']){
  for(const value of [0,-1,NaN,Infinity,'3'])assert.throws(()=>calculateWeight({...base,[key]:value}),RangeError);
}
assert.throws(()=>calculateWeight({...base,rule:'unknown'}),RangeError);
assert.throws(()=>calculateWeight({...base,length:Number.MAX_VALUE}),RangeError);
console.log('Shipping calculator: examples, actual-only billing, rounding and invalid inputs passed.');
