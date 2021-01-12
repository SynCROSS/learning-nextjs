import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <style jsx>
      {`
        h1 {
          color: #dc143c;
        }
      `}
    </style>
    <h1>About</h1>
    <p>The inside of the Link Component must be a component or element.</p>
  </Layout>
);

export default About;
