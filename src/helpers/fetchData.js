export const fetchData = async () => {
  const data = fetch('http://localhost:8000/companies')
    .then((response) => response.json())
    .then((data) => data);
  return await data;
};
