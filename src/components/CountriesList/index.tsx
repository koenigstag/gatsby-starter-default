import * as React from 'react';
import { observer } from 'mobx-react';
import { CountriesStore } from '../../stores';

const CountriesList: React.FC = observer(() => {
  return (
    <div>
      <button onClick={() => CountriesStore.pop()}>Pop</button>
      <ul>
        {CountriesStore.countries.map(item => (
          <li>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
});

export default CountriesList;
