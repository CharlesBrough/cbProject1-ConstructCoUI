export const login = (user) => {
  //all actions should have a type
  return {type:"LOGIN", payload:user}
};
