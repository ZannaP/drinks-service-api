export const getTea = (name = "English Breakfast", milk = "cow") => {
  return {
    drinkType: "Tea",
    name,
    milk,
  };
};
