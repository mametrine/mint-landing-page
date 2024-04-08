const id = () => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
};

export const getId = id();
