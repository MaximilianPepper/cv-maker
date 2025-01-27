import {
  DELETE_EXPERIENCE,
  SET_EXPERIENCE,
  UPDATE_EXPERIENCE,
} from "../actions/experienceActions";
import { ExperienceInterface } from "../types";

const initialState: ExperienceInterface[] = [];

const experienceReducer = (
  state: ExperienceInterface[] = initialState,
  action: { type: string; payload: ExperienceInterface }
) => {
  switch (action.type) {
    case SET_EXPERIENCE: {
      const id = action.payload.id ? action.payload.id : generateRandomId();
      const exists = state.some((s) => s.id === id);
      if (!exists) {
        return [...state, { ...action.payload, id: id }];
      }
      return state;
    }
    //this was before id was introuced , rememember to change
    case DELETE_EXPERIENCE:
      return state.filter(
        (exp) => JSON.stringify(exp) !== JSON.stringify(action.payload)
      );
    case UPDATE_EXPERIENCE:
      return state.map((exp) =>
        exp.id === action.payload.id ? action.payload : exp
      );
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default experienceReducer;

function generateRandomId() {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1e8);

  return `${timestamp}-${randomNum}`;
}
