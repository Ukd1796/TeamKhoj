import React, {useEffect,useState} from 'react';
import { useUser} from '@auth0/nextjs-auth0';
import {RoughNotation} from "react-rough-notation";
import SideNavbar from "../components/SideNavbar";
import Card from "../components/Card";
import Layout from './layout';
import Head from 'next/head';


export default function workspace(){
    return (
        <Layout className="bg-orange-100">
          <SideNavbar />
          <div className="flex flex-col gradient h-screen items-center justify-center">
          <Card />
          </div>
          
        </Layout>
      );
}