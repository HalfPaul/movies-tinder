import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiFillHeart, AiFillDislike } from "react-icons/ai";
import { BsFillSkipForwardCircleFill } from "react-icons/bs"


/* type CardProps = {
    name: string
    idx: string
} */

export default function Card() {
  const router = useRouter();

  
  const [likedIdxs, setLikedIdxs] = useState<string[]>([]);
  const [currentMovie, setCurrentMovie] = useState("");
  const [currentIdx, setCurrentIdx] = useState("");

  const [results, setResults] = useState<string[]>([])

  const getRandomMovie = () => {
    axios
      .get("http://127.0.0.1:8000/getRandomMovie")
      .then((res) => {
        setCurrentMovie(res.data.title);
        setCurrentIdx(res.data.movie_idx);
      });
  }
  const filmWasLiked = async () => {
    
    if (likedIdxs.length === 5) {
      const query = likedIdxs.join("_")
      const response = await axios.get(`http://127.0.0.1:8000/${query}`);
      setResults(response.data.movies);
      
    } else {
      setLikedIdxs((likedIdxs) => [...likedIdxs, currentIdx]);
    }
  }
  const filmWasNotLiked = () => {
    if (likedIdxs.length !== 5) getRandomMovie();
  };
  useEffect(() => {
    getRandomMovie();
  }, [likedIdxs]);
  useEffect(() => {
    console.log(results);
  }, [results])
  return (
    <div>
      {results.length === 0 ? (
        <div className="flex bg-white mx-auto rounded-lg flex-col overflow-hidden max-w-sm">
          <div className="flex flex-col text-center px-6 py-8">
            <h5 className="font-bold text-2xl mb-2">{currentMovie}</h5>
            <div className="flex flex-row justify-between mt-12">
              <AiFillDislike size={60} color="red" onClick={filmWasNotLiked} />
              <BsFillSkipForwardCircleFill
                size={60}
                color="gray"
                onClick={filmWasNotLiked}
              />
              <AiFillHeart size={60} color="green" onClick={filmWasLiked} />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="font-bold text-3xl">Recommendations:</h1>
          {results.map((item, i) => (
            <div
              key={i}
              className="flex bg-white mx-auto rounded-lg flex-col overflow-hidden max-w-sm m-5"
            >
              <div className="flex flex-col text-center px-6 py-8">
                <h5 className="font-bold text-2xl mb-2">{item}</h5>
              </div>
            </div>
          ))}
          <button
            className="py-3 px-4 text-white duration-100 rounded-xl text-lg font-semibold bg-black"
            onClick={() => {
              router.push("/");
            }}
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
}
