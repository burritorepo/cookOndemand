import React from "react";
import { Layout } from 'antd';
import './main.scss';

function Main(props) {
  const { children } = props;

  return (
    <Layout.Content className="main">{children}</Layout.Content>
  )
}

export {
  Main
}
