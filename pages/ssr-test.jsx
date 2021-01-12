import { Component } from 'react';
import Layout from '../components/Layout';

// * The value that returns from the method run by getInitialProps is passed to the props of the component.
// * The parameter contains the 'req' on the server side. So the 'req' in the client is undefined.

// * If you go directly to the address, it says it was run on the server,
// * but if you press the link component and enter it, it's run on the client.

class SSRTest extends Component {
  static async getInitialProps({ req }) {
    return req ? { from: 'server' } : { from: 'client' };
  }

  render() {
    return <Layout>Executed from the {this.props.from}.</Layout>;
  }
}

export default SSRTest;
