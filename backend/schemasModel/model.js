import { model } from "mongoose";
import authSchema from "./schemas/auth.schema.js";
import animalSchema from "./schemas/animalModel.js";

export const Auth = model("Auth", authSchema);
export const Animal = model("Animal", animalSchema)