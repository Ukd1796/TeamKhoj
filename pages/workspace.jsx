import React, {useEffect,useState} from 'react';
import Layout from './layout';
import { useUser} from '@auth0/nextjs-auth0';
import styles from "styles/App.module.css";
import Card from "../components/Card";
import posts from "./data";
import SideNavbar from "../components/SideNavbar";

const workspace = () => {
  return (
    <Layout className="bg-orange-100">
    <main className={styles.section}>
          <SideNavbar />
      
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
    </Layout>
  );
};

export default workspace;