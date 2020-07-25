export const toQuery = value => {

  return value.trim().split(' ').join('+');

};
