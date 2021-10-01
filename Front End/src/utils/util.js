export const validate = (field, value) => {
  switch (field) {
    case "fname":
      const res = value.length > 4 ? true : false;
      break;
    default:
      break;
  }

  // fname: "",
  // lname: "",
  // uname: "",
  // address: "",
  // email: "",
  // password: "",
  // confPassword: "",
};
