import { useEffect, useState } from "react";
import Converter from "./components/Converter/Converter";
import Header from "./components/Header/Header";
import { Equal, SpanFirst, SpanSecond } from "./App.styled";

const API_KEY = "dd3767f7553d65a03398bebbe4d7e2c9";
const BASE_URL = `http://api.exchangeratesapi.io/latest?access_key=${API_KEY}`;

function App() {
  const [currencyOpts, setCurrencyOpts] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (exchangeRate && amount) {
    if (amountInFromCurrency) {
      toAmount = amount * exchangeRate;
      fromAmount = amount;
    } else {
      fromAmount = amount / exchangeRate;
      toAmount = amount;
    }
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOpts([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(`${BASE_URL}&base=${fromCurrency}&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.rates && data.rates[toCurrency] !== undefined) {
            setExchangeRate(data.rates[toCurrency]);
          }
        })
        .catch((error) =>
          console.error("Error fetching exchange rate:", error)
        );
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <>
      <Header />
      <SpanFirst>Converter</SpanFirst>
      <SpanSecond>Converter</SpanSecond>
      <Converter
        currencyOpts={currencyOpts}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount || 0}
      />
      <Equal>=</Equal>
      <Converter
        currencyOpts={currencyOpts}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount || 0}
      />
    </>
  );
}

export default App;
