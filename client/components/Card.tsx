

type CardProps = {
    name: string
    pictureLink: string
}

export default function Card({name, pictureLink}: CardProps) {
  return (
    <div className="flex bg-white mx-auto rounded-lg flex-col overflow-hidden max-w-sm">
      <div className="bg-cover h-52 bg-center bg-[url('https://bit.ly/3NrymZ3')]">
      </div>
      <div className="flex flex-col text-center px-6 py-8">
        <h5 className="font-bold text-2xl mb-2">Venenatis Aenean</h5>
        <h5 className="font-bold text-sm mb-4 text-blue-700">
          Ullamcorper Justo Aenean
        </h5>
        <p>
          Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque
          nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur.
          Aenean lacinia bibendum nulla sed consectetur.
        </p>
      </div>
    </div>
  );
}
