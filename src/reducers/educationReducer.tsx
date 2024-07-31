import {
  DELETE_EDUCATION,
  SET_EDUCATION,
  UPDATE_EDUCATION,
} from "../actions/educationAction";
import { EducationInterface, ExperienceInterface } from "../types";

const initialState: EducationInterface[] = [];

const educationReducer = (
  state: ExperienceInterface[] = initialState,
  action: { type: string; payload: EducationInterface }
) => {
  switch (action.type) {
    case SET_EDUCATION: {
      const id = action.payload.id ? action.payload.id : generateRandomId();
      const exists = state.some((s) => s.id === id);
      if (!exists) {
        return [...state, { ...action.payload, id: id }];
      }
      return state;
    }
    //this was before id was introuced , rememember to change
    case DELETE_EDUCATION:
      return state.filter(
        (edu) => JSON.stringify(edu) !== JSON.stringify(action.payload)
      );
    case UPDATE_EDUCATION:
      return state.map((edu) =>
        edu.id === action.payload.id ? action.payload : edu
      );
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default educationReducer;

function generateRandomId() {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1e8);

  return `${timestamp}-${randomNum}`;
}
