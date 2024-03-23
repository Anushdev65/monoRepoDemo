import { Animal } from "../schemasModel/schemas/animalModel";

export const AnimalCreateService = async ({ body }) => {
  Animal.create(body);
};

export const readAllCategoryService = async ({
  find = {},
  sort = "",
  limit = "",
  skip = "",
  select = "",
}) => Animal.find(find).sort(sort).limit(limit).skip(skip).select(select);

export const readSpecificAnimalServices = async ({ id }) => {
  Animal.findById(id);
};
