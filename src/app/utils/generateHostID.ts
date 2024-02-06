export const generateHostID = async () => {
  const number = (
    Math.random() *
    10000 *
    Math.random() *
    10000 *
    Math.random() *
    10000 *
    Math.random() *
    1000
  ).toString();
  const newNumber = parseInt(number);
  const newID = newNumber.toString(16).toUpperCase();
  return 'HOST-' + newID;
};
