import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, {useEffect, useState} from 'react';
import Card from "../components/Card";
import axios from "axios";

export default function Selection() {
    
    
    return (
      <div className="flex justify-center items-center w-full h-screen bg-gray-200">
        <Card />
      </div>
    );
}
