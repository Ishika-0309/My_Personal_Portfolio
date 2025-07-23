const baseURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;

const URL = `${baseURL}/${fromCurrency}.json`;
const dropdown = document.querySelectorAll(".dropdown select");
console.log(dropdown);

for (let select of dropdown) {
  for (let code in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = code;
    newOption.value = code;
    if (select.name === "from" && code === "USD") {
      newOption.selected = " selected";
    }
    select.append(newOption);
  }
}

const getRate = async (fromCurrency, toCurrency) => {
  try {
    let response = await fetch(URL);
    if (!response.ok) {
      throw new Error(
        `Status : ${response.status}\n Status Text : ${response.statusText}`
      );
    }
    let responseJSON = await response.json();

    let rate = responseJSON[fromCurrency][toCurrency];
  } catch (error) {
    msg.innerHTML = `Failed to fetch exchange rate. Please try again later.`;
    console.error("Fetch error:", error);
    return;
  }
};
