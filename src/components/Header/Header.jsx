import React, { useEffect, useState } from "react";
import { HeaderWrap, List } from "./Header.styled";

const Header = ({ baseCurrency }) => {
  const API_KEY = "dd3767f7553d65a03398bebbe4d7e2c9";
  const [exchangeRates, setExchangeRates] = useState({ USD: 0, EUR: 0 });

  useEffect(() => {
    fetch(
      `http://api.exchangeratesapi.io/latest?access_key=${API_KEY}&base=EUR`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.rates) {
          setExchangeRates({
            USD: (data.rates.USD * data.rates.UAH || 0).toFixed(2),
            EUR: (data.rates.EUR * data.rates.UAH || 0).toFixed(2),
          });
        } else {
          console.error(
            "Invalid response format or missing exchange rates:",
            data
          );
        }
      })
      .catch((error) => console.error("Error fetching exchange rates:", error));
  }, [baseCurrency]);

  return (
    <HeaderWrap>
      <List>
        <li>USD: {exchangeRates.USD}</li>
        <li>EUR: {exchangeRates.EUR}</li>
      </List>
    </HeaderWrap>
  );
};

export default Header;
