import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, {useEffect, useState} from 'react';
import Card from "../components/Card";

export default function Selection() {

    useEffect(() => {

    }, [])
    return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-200">
        <Card name="a" pictureLink="b"/>
    </div>
    );
}
