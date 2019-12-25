export const formatDate = () => {
  const date = new Date();
  return date.toLocaleDateString() + '  ' + date.toLocaleTimeString();
};

export const getNullCountObject = (obj) => {
  let count = 0;
  for (const [i] of Object.entries(obj)) {
    if (obj[i] === null) {
      count++;
    }
  }
  return count;
};
