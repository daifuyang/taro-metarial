export const getPrevPath = (item: any) => {
  let prevPath = item?.src;
  if (prevPath) {
    prevPath = `${item._BASE_URL}${item.src}`;
  }
  return prevPath
};
