import React, { useEffect, useState } from 'react';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import { addFilter, removeFilter } from '../reducers/SearchSlice';
import { useDispatch } from 'react-redux';

const SpecialityCheckBox = () => {
  const [companies, setCompanies] = useState([]);
  const [specialityArray, setSpecialityArray] = useState([]);

  const dispatch = useDispatch();

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
      const specialities = new Set();
      companies.forEach((company: { specialties: string }) =>
        specialities.add(company.specialties)
      );
      setSpecialityArray(Array.from(specialities));
    }
  }, [companies]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(addFilter(e.target.value));
    } else {
      dispatch(removeFilter(e.target.value));
    }
  };

  return (
    <>
      {specialityArray.map((speciality: string, i) => (
        <MDBCheckbox
          key={speciality + i}
          className='text-black'
          name={speciality}
          id={speciality}
          value={speciality}
          onChange={(e) => handleChange(e)}
          label={speciality}
          inline
        />
      ))}
    </>
  );
};

export default SpecialityCheckBox;
