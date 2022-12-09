import { AiFillHeart, AiFillDislike } from "react-icons/ai";
import { BsFillSkipForwardCircleFill } from "react-icons/bs"


type CardProps = {
    name: string
    idx: string
}

export default function Card({name, idx}: CardProps) {
  return (
    <div className="flex bg-white mx-auto rounded-lg flex-col overflow-hidden max-w-sm">
      <div className="flex flex-col text-center px-6 py-8">
        <h5 className="font-bold text-2xl mb-2">{name}</h5>
        <div className="flex flex-row justify-between mt-12">
          <AiFillDislike size={60} color="red" />
          <BsFillSkipForwardCircleFill size={60} color="gray"/>
          <AiFillHeart size={60} color="green" />
        </div>
      </div>
    </div>
  );
}
