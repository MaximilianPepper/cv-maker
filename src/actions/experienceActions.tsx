import { ExperienceInterface } from "../types";

export const SET_EXPERIENCE = "SET_EXPERIENCE";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";
export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE";

export const setExperience = (obj: ExperienceInterface) => ({
  type: SET_EXPERIENCE,
  payload: obj,
});
export const deleteExperience = (obj: ExperienceInterface) => ({
  type: DELETE_EXPERIENCE,
  payload: obj,
});
export const updateExperience = (obj: ExperienceInterface) => ({
  type: UPDATE_EXPERIENCE,
  payload: obj,
});
