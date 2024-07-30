import { useSelector } from "react-redux";
import { StateInterface } from "../types";

function Output() {
  const header = useSelector((state: StateInterface) => state.personalInfo);
  return <div>{header.name}</div>;
}

export default Output;
