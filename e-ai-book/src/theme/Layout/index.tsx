import React from 'react';
import Layout from '@theme-original/Layout';
import Chatbot from '@site/src/components/Chatbot';
// REMOVE: import { AuthProvider } from '@site/src/components/Auth/AuthContext'; // Import AuthProvider

export default function LayoutWrapper(props) {
  return (
    // REMOVE: <AuthProvider> {/* Wrap the entire layout with AuthProvider */}
      <>
        <Layout {...props}>
          {props.children}
        </Layout>
        <Chatbot />
      </>
    // REMOVE: </AuthProvider>
  );
}
