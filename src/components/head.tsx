import Head from "next/head";
import React from "react";

interface Props {
  title: String;
}

const DynamicHead: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default DynamicHead;
