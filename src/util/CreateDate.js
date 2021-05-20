const CreateDate = (storedDate, month, year) => {
  const d = new Date();
  const today = d.getDate();
  const yesterday = today - 1;
  const strToday = today.toString();
  const strYesterday = yesterday.toString();
  console.log(typeof storedDate);
  console.log(strToday);

  if (strToday === storedDate) {
    return 'Today';
  } if (strYesterday === storedDate) {
    return 'Yesterday';
  }
  return `${month}/${storedDate}/${year}`;
};

export default CreateDate;
