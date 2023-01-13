function Dropdown({ options, onChange, className, children, value }) {
  const renderedOptions = options.map((option) => {
    return (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    );
  });

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <select onChange={handleChange} className={className} value={value}>
      {children}
      {renderedOptions}
    </select>
  );
}

export default Dropdown;
