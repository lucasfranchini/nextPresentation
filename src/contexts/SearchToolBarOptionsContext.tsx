import { createContext, useState } from "react";
import SearchToolBarOptionsContextInterface from "../interfaces/SearchToolBarOptionsContext";
import toolFieldType from "../types/toolFieldType";

const SearchToolBarOptionsContext =
  createContext<SearchToolBarOptionsContextInterface | null>(null);
export default SearchToolBarOptionsContext;

export function SearchToolBarOptionsProvider({ children }: { children: any }) {
  const [SearchToolBarOptions, setSearchToolBarOptions] =
    useState<toolFieldType>("all");

  return (
    <SearchToolBarOptionsContext.Provider
      value={{ SearchToolBarOptions, setSearchToolBarOptions }}
    >
      {children}
    </SearchToolBarOptionsContext.Provider>
  );
}
