var format = require("date-format");

export const formatData = (time) => {
  return format("dd.MM.yyyy", new Date(time));
};
