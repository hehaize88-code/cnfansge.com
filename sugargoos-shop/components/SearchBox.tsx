import { Search } from "lucide-react";

export function SearchBox({ placeholder, button }: { placeholder: string; button: string }) {
  return (
    <form className="search-box" method="get" action="https://cnfansge.com/search.html">
      <Search aria-hidden="true" /><label className="sr-only" htmlFor="keywords">{placeholder}</label>
      <input id="keywords" name="keywords" placeholder={placeholder} required />
      <input type="hidden" name="channelid" value="2" /><input type="hidden" name="method" value="1" />
      <button type="submit">{button}</button>
    </form>
  );
}
