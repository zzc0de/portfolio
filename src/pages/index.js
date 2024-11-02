import Card from "@/components/Card";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export default function Home() {
  const frontEnd = [
    {
      name: "HTML",
      level: "Experienced",
    },
    {
      name: "CSS",
      level: "Experienced",
    },
    {
      name: "Javascript",
      level: "Experienced",
    },
    {
      name: "React.js",
      level: "Intermediate",
    },
    {
      name: "Next.js",
      level: "Intermediate",
    },
    {
      name: "Tailwind",
      level: "Experienced",
    },
  ];

  const backEnd = [
    {
      name: "Node.js",
      level: "Basic",
    },
    {
      name: "Express.js",
      level: "Basic",
    },
    {
      name: "MongoDB",
      level: "Basic",
    },
    {
      name: "Firebase",
      level: "Basic",
    },
  ];

  return (
    <>
      <Container className={"min-h-dvh flex items-center"}>
        <div className="w-1/2 flex flex-col  justify-center h-full space-y-8">
          <h1>Hi, My name is Azed</h1>
          <h1 className="text-8xl font-extrabold">Web Developer</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint sed
            quia magnam architecto iste cupiditate! Minima quas aperiam a
            blanditiis.
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center h-full">
          <Image src={"/avatar.jpg"} alt="avatar" width={300} height={400} />
        </div>
      </Container>
      <Container className={"flex justify-center flex-col items-center"}>
        <div className="w-full flex flex-col text-center p-8">
          <h1 className="text-slate-600">Explore My</h1>
          <h1 className="text-4xl font-bold">Experience</h1>
        </div>
        <div className="w-full flex flex-row space-x-4 justify-around">
          <Card
            className={"w-full flex flex-col items-center justify-center p-4"}
          >
            <h1 className="text-2xl font-bold p-6">Frontend Development</h1>
            <div className="grid grid-cols-2 w-full">
              {frontEnd.map((item) => (
                <div className="flex flex-col text-start space-y-1 m-2">
                  <h1 className="font-semibold text-xl">{item.name}</h1>
                  <h1 className="text-lg">{item.level}</h1>
                </div>
              ))}
            </div>
          </Card>
          <Card
            className={"w-full flex flex-col items-center justify-center p-4"}
          >
            <h1 className="text-2xl font-bold p-6">Backend Development</h1>
            <div className="grid grid-cols-2 w-full">
              {backEnd.map((item) => (
                <div className="flex flex-col text-start space-y-1 m-2">
                  <h1 className="font-semibold text-xl">{item.name}</h1>
                  <h1 className="text-lg">{item.level}</h1>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
      <Container>
        <div className="w-full flex flex-col text-center p-8 mt-10">
          <h1 className="text-slate-600">Browse My</h1>
          <h1 className="text-4xl font-bold">Projects</h1>
        </div>
        <div className="w-full flex space-x-6">
          <Card className={"flex flex-col p-4 space-y-2 w-1/2"}>
            <Image
              src={"/nutrilens.png"}
              className="object-cover w-full"
              alt="banner"
              width={400}
              height={300}
            />
            <h1 className="text-2xl font-bold">Nutrilens</h1>
            <p>
              A website that allows users to scan food or drinks and get results
              in the form of the content and nutrition of the object
            </p>
          </Card>
          <Card className={"flex flex-col space-y-2 p-4 w-1/2"}>
            <Image
              src={"/machine-learning.png"}
              className="object-cover w-full h-full"
              alt="banner"
              width={400}
              height={300}
            />
            <h1 className="text-2xl font-bold">Object Detection</h1>
            <p>
              Website that allows users to scan objects on the camera, and guess
              the name of the object
            </p>
          </Card>
        </div>
      </Container>
      <Container>
        <div className="w-full flex flex-col text-center p-8 mt-10">
          <h1 className="text-slate-600">Get In Touch</h1>
          <h1 className="text-4xl font-bold">Contact Me</h1>
        </div>
        <Card className={"flex justify-center space-x-6 p-4"}>
          <Link href={"https://www.linkedin.com/in/azedmuhammad/"} passHref>
            <FaLinkedin
              size={75}
              className="hover:text-[#0072b1] hover:cursor-pointer hover:scale-105 transition-all duration-300"
            />
          </Link>
          <FaGithubSquare
            size={75}
            className=" hover:cursor-pointer hover:scale-105 transition-all duration-300"
          />
          <SiGmail
            size={75}
            className="hover:text-[#c71610] hover:cursor-pointer hover:scale-105 transition-all duration-300"
          />
          <FaInstagram
            size={75}
            className="hover:text-[#e95950] hover:cursor-pointer hover:scale-105 transition-all duration-300"
          />
        </Card>
      </Container>
    </>
  );
}
