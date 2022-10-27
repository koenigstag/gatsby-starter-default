import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import useInput from '../../hooks/useInput';
import { createCountryLink } from '../../utils';
import { Link } from 'gatsby';

export type SearchProps = {
  placeholder?: string;
  autocompliteList: any[];
  filterField: string;
};

const SearchInput: React.FC<SearchProps> = observer(
  ({ placeholder = 'Search...', filterField, autocompliteList }) => {
    const [showList, setShowList] = useState<boolean>(false);

    const [filteredCountries, setFilteredCountries] = useState<any[]>([]);

    const filterCountries = useCallback((newValue: string) => {
      setFilteredCountries(
        autocompliteList.filter(item => {
          return (
            newValue &&
            item?.[filterField]?.toLowerCase().includes(newValue.toLowerCase())
          );
        })
      );
    }, []);

    const input = useInput({
      onChange: filterCountries,
      onFocus: () => {
        setShowList(true);
      },
      onBlur: () => {
        setTimeout(() => {
          setShowList(false);
        }, 100);
      },
    });

    return (
      <div style={{ position: 'relative', maxWidth: 'fit-content' }}>
        <input
          style={{ outline: 'none', padding: '3px 5px', minWidth: '250px' }}
          placeholder={placeholder}
          {...input}
        />
        {showList && (
          <div
            onClick={e => {
              e.stopPropagation();
            }}
            style={{
              position: 'absolute',
              top: '99%',
              background: 'white',
              width: '100%',
              padding: '3px 5px',
              border: '1px solid black',
              fontSize: '12px',
            }}
          >
            {filteredCountries.length
              ? filteredCountries.slice(0, 10).map(item => (
                  <div key={item.code}>
                    <Link
                      to={createCountryLink(item)}
                      style={{
                        display: 'block',
                        textDecoration: 'none',
                        color: 'black',
                      }}
                    >
                      {item.emoji} {item.name}
                    </Link>
                  </div>
                ))
              : 'Nothing found'}
          </div>
        )}
      </div>
    );
  }
);

export default SearchInput;
