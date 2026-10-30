// Generic weight arithmetic, never a live carrier price or a route eligibility check.
export function calculateWeight({weight,length,width,height,divisor,increment,rule}) {
  const values=[weight,length,width,height,divisor,increment];
  if(values.some(v=>typeof v!=='number'||!Number.isFinite(v)||v<=0)||!['higher','actual'].includes(rule))throw new RangeError('Invalid weight inputs');
  const volumetric=length*width*height/divisor;
  const raw=rule==='actual'?weight:Math.max(weight,volumetric);
  // Remove floating-point noise at an exact billing boundary, not a billable fraction.
  const units=raw/increment;
  const billable=Math.ceil(units-Number.EPSILON*Math.max(1,units)*4)*increment;
  if(!Number.isFinite(volumetric)||!Number.isFinite(billable))throw new RangeError('Weight overflow');
  return {volumetric,billable};
}
