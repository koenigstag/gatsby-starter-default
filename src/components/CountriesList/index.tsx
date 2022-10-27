import { Link } from 'gatsby';
import * as React from 'react';
import { observer } from 'mobx-react';
import { createCountryLink } from '../../utils';

export type CountryListProps = {
  list: any[];
};

const CountryList: React.FC<CountryListProps> = observer(({ list }) => {
  return (
    <div style={{ marginTop: '10px' }}>
      <ul>
        {list.slice(0, 10).map(item => (
          <li key={item.code}>
            <Link to={createCountryLink(item)}>
              {item.emoji} {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CountryList;
