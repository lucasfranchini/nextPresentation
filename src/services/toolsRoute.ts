import axios from "axios";
import Tool from "../interfaces/Tool";
import ToolFieldType from "../types/toolFieldType";

const createTool = ({ title, link, description, tags }: Tool) =>
  axios.post("http://localhost:3000/tools", { title, link, description, tags });

const deleteTool = (toolId: string | string[] | undefined) =>
  axios.delete(`http://localhost:3000/tools/${toolId}`);

const getTool = (toolId: string | string[] | undefined) =>
  axios.get(`http://localhost:3000/tools/${toolId}`);

const searchTools = async (searchText: string, field: ToolFieldType) =>
  axios.post("http://localhost:3000/tools/search", { searchText, field });

export { createTool, getTool, deleteTool, searchTools };
