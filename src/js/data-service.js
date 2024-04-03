export const requestData = async () => {
  const url = "https://mametrine.github.io/tickets.json";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Response failed");
    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};
