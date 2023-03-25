import React, {useEffect,useState} from 'react';
import Layout from './layout';
import { useUser} from '@auth0/nextjs-auth0';
import styles from "styles/App.module.css";
import Card from "../components/Card";
import posts from "./data";
import SideNavbar from "../components/SideNavbar";
import Modal from "../components/Modal"

const workspace = () => {

  const [showModal,setShowModal] =useState(false);
  return (
    <Layout className="bg-orange-100">
    <main className={styles.section}>
          <SideNavbar />
      
      <section className="flex flex-col gradient h-screen items-center justify-center" onClick={()=> setShowModal(true)}>
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
 
    <Modal isVisible={showModal} onClose={()=>setShowModal(false)}>
        <form className="m-8">
        <h3 className="mb-4 text-xl font-medium text-gray-900">
          Create a new Workspace
        </h3>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Title
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Description
      </label>
      <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline h-32" id="description" type="text" placeholder="Description"/>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
    </div>
  </form>
    </Modal>
    </Layout>
  );
};

export default workspace;