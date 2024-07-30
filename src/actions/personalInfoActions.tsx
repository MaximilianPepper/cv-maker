import { PersonalDetailsInterface } from "../types";

export const SET_PERSONAL_DETAILS = "SET_PERSONAL_DETAILS";

export const setPersonalDetails = (obj: PersonalDetailsInterface) => ({
  type: SET_PERSONAL_DETAILS,
  payload: obj,
});
