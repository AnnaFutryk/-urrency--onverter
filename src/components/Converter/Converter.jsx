const Converter = (props) => {
  const {
    currencyOpts,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;
  return (
    <>
      <input type="number" value={amount} onChange={onChangeAmount} />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOpts.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Converter;
