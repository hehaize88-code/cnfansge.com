export const categoryPages=['shoes','hoodies-sweaters','jersey'];
export interface Discovery {homeTitle:string;homeDescription:string;catalogTitle:string;catalogDescription:string;priceNote:string;photoNotice:string;catalogueSource:string;categoryHelp:string;categories:Record<string,{title:string;description:string;checks:string[];related:string[]}>}
const files=import.meta.glob('../content/discovery/*.json',{eager:true,import:'default'}) as Record<string,Discovery>;
export function discovery(locale:string):Discovery { const value=files[`../content/discovery/${locale}.json`];if(!value)throw new Error(`Missing discovery translation: ${locale}`);return value; }
