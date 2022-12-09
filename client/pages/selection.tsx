import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, {useEffect, useState} from 'react';
import Card from "../components/Card";
import axios from "axios";

export default function Selection() {
    const [likedIdxs, setLikedIdxs] = useState([])
    const [currentMovie, setCurrentMovie] = useState("")
    const [currentIdx, setCurrentIdx] = useState("");
    useEffect(() => {
        const data = axios
          .get("http://127.0.0.1:8000/getRandomMovie")
          .then((res) => {
            setCurrentMovie(res.data.title);
            setCurrentIdx(res.data.movie_idx);
          });
    }, [])
    return (
      <div className="flex justify-center items-center w-full h-screen bg-gray-200">
        <Card name={currentMovie} idx={currentIdx} />
      </div>
    );
}
