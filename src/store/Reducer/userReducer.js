/* eslint-disable default-case */
const INITIAL_STATE = {
  FirstName: "Jennifer",
  LastName: "Lopez",
  StartDate: 2004,
  Department: "California",
  DateOfBirth: "BeverlyHills",
  City: "LosAngeles",
  State: "USA",
  ZipCode: 1234,
};

function getUsers() {
  return 12;
}

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDUSER":
      const newArr = [...state.FirstName];
      newArr.unshift(action.payload);
      return {
        FirstName: newArr,
      };
  }

  return state;
}

export { getUsers, userReducer };
