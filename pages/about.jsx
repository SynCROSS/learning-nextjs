import Layout from '../components/Layout';

// * First, styled-jsx is styled on the client side by default.
// * The flush() function pre-work this on the server side,
// * which doesn't matter if you don't have to run it on the server side,
// * but it saves the computation that clients need to style,
// * even though it doesn't have to.

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
