import Head from "next/head";
import { FC } from "react";
type MetaData = {
  title: string;
  description: string;
  keywords: string;
};

const Meta: FC<MetaData> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Simple - Blog",
  description: "It is a blog site",
  keywords: "php,react,vue",
  //   OGImage: "",
};

export default Meta;
