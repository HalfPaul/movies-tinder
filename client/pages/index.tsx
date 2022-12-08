import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <button className="py-3 px-4 text-white duration-100 rounded-xl text-lg font-semibold bg-violet-700 hover:bg-violet-400" onClick={() => {router.push("/selection")}}>
        Start
      </button>
    </div>
  );
}
