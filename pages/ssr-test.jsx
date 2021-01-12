import { Component } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

// * The value that returns from the method run by getInitialProps is passed to the props of the component.
// * The parameter contains the 'req' on the server side. So the 'req' in the client is undefined.

// * If you go directly to the address, it says it was run on the server,
// * but if you press the link component and enter it, it's run on the client.

class SSRTest extends Component {
  static async getInitialProps({ req }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    return {
      users: response.data,
    };
  }

  render() {
    const { users } = this.props;
    const userList = users.map(user => <li key={user.id}>{user.username}</li>);
    return (
      <Layout>
        <ul>{userList}</ul>
      </Layout>
    );
  }
}

export default SSRTest;
