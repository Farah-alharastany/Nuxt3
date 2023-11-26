export default defineEventHandler(async (event) => {
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_DKb4o4HOdQ1cdjRGH7ZgdeLLBy4jaOi2U1OE8FRK"
  );
  return data;
});
