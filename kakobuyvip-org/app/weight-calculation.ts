export function calculateWeight(actual:number,length:number,width:number,height:number,divisor:number){
 if(![actual,length,width,height,divisor].every(n=>Number.isFinite(n)&&n>0))return null;
 const volumetric=length*width*height/divisor;
 if(!Number.isFinite(volumetric))return null;
 return {volumetric,comparison:Math.max(actual,volumetric)};
}
