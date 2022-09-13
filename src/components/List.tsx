import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectSearch } from '../reducers/SearchSlice';
import { filterCompanies } from '../helpers/CompanyFilter';
import Card from './Card';

const List = () => {
  const [companies, setCompanies] = useState([]);
  const [companiesInView, setCompaniesInView] = useState([]);
  const { query, filter } = useSelector(selectSearch);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:8000/companies`);
      const json = await data.json();
      setCompanies(json);
    };
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    if (companies.length) {
      setCompaniesInView(filterCompanies(companies, filter, query));
    }
  }, [companies, query, filter]);

  return (
    <div>
      {companiesInView.length ? (
        companiesInView.map((company) => (
          <div key={company.id}>
            <Card companyData={company} />
          </div>
        ))
      ) : (
        <h2 className='text-black'>
          Oops!! No result Found try again with another string
        </h2>
      )}
    </div>
  );
};

export default List;
