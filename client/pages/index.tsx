import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-[url('/background.jpg')] bg-cover bg-center">
      <h1 className="text-8xl text-black font-bold">Movies Tinder</h1>
      <h3 className="text-4xl text-black font-bold">
        Press start to get reccomendations!
      </h3>
      <button
        className="py-3 px-4 mt-5 text-white duration-100 rounded-xl text-lg font-semibold bg-violet-700 hover:bg-violet-400"
        onClick={() => {
          router.push("/selection");
        }}
      >
        Start
      </button>
    </div>
  );
}
