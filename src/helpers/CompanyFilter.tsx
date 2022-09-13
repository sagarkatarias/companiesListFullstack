export const filterCompanies = (
  Companies: any[],
  filter: string[],
  query: string
) => {
  if (query && !filter.length) {
    const searchResults = Companies.filter((company) =>
      company.name.toLowerCase().startsWith(query)
    );
    return searchResults;
  }
  if (query && filter.length) {
    const searchAndFilterResults = Companies.filter(
      (company: { name: string; specialties: string }) =>
        company.name.toLowerCase().startsWith(query) &&
        filter.includes(company.specialties)
    );
    return searchAndFilterResults;
  }
  if (!query && filter.length) {
    const filteredCompanies = Companies.filter(
      (company: { specialties: string }) => filter.includes(company.specialties)
    );
    return filteredCompanies;
  }
  if (!query && !filter.length) {
    return Companies;
  }
};
