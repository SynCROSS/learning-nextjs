import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (
  <Layout id="root">
    <h1>Hello, Next.js</h1>
    <p>
      We don't need{' '}
      <span
        style={{
          fontFamily:
            'SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace',
          lineHeight: 'normal',
          background: 'rgba(135,131,120,0.15)',
          color: '#EB5757',
          borderRadius: '3px',
          fontSize: '85%',
          padding: '0.2em 0.4em',
        }}
        data-token-index="0">
        <Link href="/create-react-app">
          <a style={{ color: 'inherit', textDecoration: 'none' }}>CRA</a>
        </Link>
      </span>
      &nbsp; and&nbsp;
      <span
        style={{
          fontFamily:
            'SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace',
          lineHeight: 'normal',
          background: 'rgba(135,131,120,0.15)',
          color: '#EB5757',
          borderRadius: '3px',
          fontSize: '85%',
          padding: '0.2em 0.4em',
        }}
        data-token-index="0">
        import React from 'react';
      </span>
    </p>
  </Layout>
);

export default Index;
