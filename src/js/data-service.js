const requestData = async () => {
  const url = "https://mametrine.github.io/tickets.json";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Response failed");
    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

const getTable = ({ tickets }) => tickets;

const getDate = ({ date }) => date;

const getTicketType = ({ type }) => type;

const getTier = ({ tier }) => tier;

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(amount);
};

const getPrice = ({ price }) => formatCurrency(price);

export { requestData, getTable, getDate, getTicketType, getTier, getPrice };
