import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import Banner from "../components/Tailwind/Banner";


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`עמוד ראשי`}
      description="Description will go into a meta tag in <head />"
    >
      <Banner />
      <main>
        
      </main>
    </Layout>
  );
}
