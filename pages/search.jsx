import Layout from '../components/Layout';

// * It can access localhost:3000/search?keyword=keyword and view contents.
const Search = ({ url }) => {
  return <Layout>You're Search KeyWord is "{url.query.keyword}".</Layout>;
};

export default Search;
