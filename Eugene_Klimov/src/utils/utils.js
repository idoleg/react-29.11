export const formatDate = () => {
  const date = new Date();
  return date.toLocaleDateString() + '  ' + date.toLocaleTimeString();
};
