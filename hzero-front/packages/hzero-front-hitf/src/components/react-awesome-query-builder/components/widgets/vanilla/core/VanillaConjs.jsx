import React from 'react';

export default ({
  id,
  not,
  setNot,
  conjunctionOptions,
  setConjunction,
  disabled,
  readonly,
  config,
}) => {
  const renderOptions = () =>
    Object.keys(conjunctionOptions).map((key) => {
      const { id, name, label, checked } = conjunctionOptions[key];
      let postfix = setConjunction.isDummyFn ? '__dummy' : '';
      return [
        <input
          key={id + postfix}
          type="radio"
          id={id + postfix}
          name={name + postfix}
          checked={checked}
          value={key}
          onChange={onChange}
          disabled={disabled}
        />,
        <label key={id + postfix + 'label'} htmlFor={id + postfix}>
          {label}
        </label>,
      ];
    });

  const renderNot = () => {
    return [
      <input
        key={id}
        type="checkbox"
        id={id + '__not'}
        checked={not}
        disabled={disabled}
        onChange={onNotChange}
      />,
      <label key={id + 'label'} htmlFor={id + '__not'}>
        {config.settings.notLabel || 'NOT'}
      </label>,
    ];
  };

  const onChange = (e) => setConjunction(e.target.value);

  const onNotChange = (e) => setNot(e.target.checked);

  return [config.settings.showNot && renderNot(), renderOptions()];
};
