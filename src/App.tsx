import * as React from 'react';
import { Provider } from 'react-redux';
import store from './config/store';

import Search from 'components/Search';
import List from 'components/List';

import './css/App.css';
import SpecialityCheckBox from 'components/SpecialityCheckBox';

export default function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1 className='mb-2 mt-3'>Companies List</h1>
        <Search />
        <SpecialityCheckBox />
        <List />
      </div>
    </Provider>
  );
}
