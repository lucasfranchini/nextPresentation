import axios from "axios";
import Tool from "../interfaces/Tool";
import ToolFieldType from "../types/toolFieldType";

const createTool = ({ title, link, description, tags }: Tool) =>
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/tools`, {
    title,
    link,
    description,
    tags,
  });

const deleteTool = (toolId: string | string[] | undefined) =>
  axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/tools/${toolId}`);

const getTool = (toolId: string | string[] | undefined) =>
  axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tools/${toolId}`);

const searchTools = async (searchText: string, field: ToolFieldType) =>
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/tools/search`, {
    searchText,
    field,
  });
export { createTool, getTool, deleteTool, searchTools };
