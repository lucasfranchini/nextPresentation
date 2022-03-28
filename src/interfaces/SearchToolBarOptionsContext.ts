import { Dispatch, SetStateAction } from "react";
import toolFieldType from "../types/toolFieldType";

export default interface SearchToolBarOptionsContextInterface {
  SearchToolBarOptions: toolFieldType;
  setSearchToolBarOptions: Dispatch<SetStateAction<toolFieldType>>;
}
