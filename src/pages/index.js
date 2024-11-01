import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="pt-20 flex items-center px-32 min-h-dvh">
        <div className="w-1/2 flex flex-col  justify-center h-full space-y-8">
          <h1>Hi, My name is Azed</h1>
          <h1 className="text-7xl font-bold font-unigeo">Web Developer</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint sed
            quia magnam architecto iste cupiditate! Minima quas aperiam a
            blanditiis.
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center h-full">
          <Image src={"/avatar.jpg"} alt="avatar" width={300} height={400} />
        </div>
      </div>
    </>
  );
}
