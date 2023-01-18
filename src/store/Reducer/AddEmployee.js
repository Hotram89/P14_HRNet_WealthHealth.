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

function AddUserReducer(state = INITIAL_STATE, action) {
  return state;
}

export default AddUserReducer;
