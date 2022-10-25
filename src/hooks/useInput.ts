import { useCallback, useState } from 'react';

const useInput = ({
  initialValue = '',
  type = 'text',
  onChange: outerOnChange,
  onFocus,
  onBlur,
}: {
  initialValue?: string | number;
  type?: string;
  onChange?(value: string | number | boolean): void;
  onFocus?(): void;
  onBlur?(): void;
} = {}) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: any) => {
    const target = e.target ?? e.currentTarget;

    if (target) {
      const type = target.type;
      const value = type === 'checkbox' ? target.checked : target.value;

      setValue(value);
      outerOnChange?.(value);
    }
  }, []);

  return {
    value,
    changed: (!!value).toString(),
    type,
    onChange,
    onFocus,
    onBlur,
  };
};

export default useInput;
