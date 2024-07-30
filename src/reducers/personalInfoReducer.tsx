import { SET_EXPERIENCE } from "../actions/experienceActions";
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
    case SET_EXPERIENCE:
      return action.payload;

    default:
      return state;
  }
};

export default personalInfoReducer;
