import React, { Component } from 'react';
import Header from "components/Header";
import Layout from "components/Layout";
import WriteMemo from "./WriteMemo";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header />
          <Layout.Main>
            <WriteMemo />
          </Layout.Main>
        </Layout>
      </div>
    );
  }
}

export default App;
