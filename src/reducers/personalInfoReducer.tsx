import { SET_PERSONAL_DETAILS } from "../actions/personalInfoActions";
import { PersonalDetailsInterface } from "../types";

const initialState = {
  name: "",
  email: "",
  phone: "",
  location: "",
  website: "",
};

const personalInfoReducer = (
  state: PersonalDetailsInterface = initialState,
  action: { type: string; payload: PersonalDetailsInterface }
) => {
  switch (action.type) {
    case SET_PERSONAL_DETAILS:
      console.log(action.payload);
      return action.payload;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default personalInfoReducer;
