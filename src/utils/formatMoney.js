export const formatmoney = (money) => {
  const formattedNumber = money.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  });

  return formattedNumber;
};
