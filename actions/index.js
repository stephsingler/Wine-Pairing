export const getReds = (redWine) => {
  return {
    type: "GET_RED_WINE",
    payload: redWine
  }
};

export const getWhites = (whiteWine) => {
  return {
    type: "GET_WHITE_WINE",
    payload: whiteWine
  }
};

export const getCheese = (cheeseList) => {
  return {
    type: "GET_CHEESE_LISt",
    payload: cheeseList
  }
};
