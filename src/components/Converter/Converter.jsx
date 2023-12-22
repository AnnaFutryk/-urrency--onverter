import { Input, Select } from "./Converter.styled";

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
      <Input type="number" value={amount} onChange={onChangeAmount} />
      <Select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOpts.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </>
  );
};

export default Converter;
