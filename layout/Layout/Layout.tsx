import { FunctionComponent } from "react";
import cn from "classnames";

import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { LayoutProps } from "./Layout.props";

import styles from "./Layout.module.css";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>
        <div>{children}</div>
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
