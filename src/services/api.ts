import axios from "axios";
import Tool from "../interfaces/Tool";

const createTool = ({ title, link, description, tags }: Tool) =>
  axios.post("http://localhost:3000/tools", { title, link, description, tags });

export { createTool };
