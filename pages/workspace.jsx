import React, {useEffect,useState} from 'react';
import Layout from './layout';
import styles from "styles/App.module.css";
import Card from "../components/Card";
import posts from "./data";
import SideNavbar from "../components/SideNavbar";

const workspace = () => {
  return (
    
    <main className={styles.section}>
      <Layout className="bg-orange-100">
          <SideNavbar />
        </Layout>
      <section className="flex flex-col gradient h-screen items-center justify-center">
        <div className={styles.layout}>
          {posts.map((element, index) => (
            <Card
              key={index}
              title={element.title}
              likes={element.likes}
              order={index + 1}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default workspace;