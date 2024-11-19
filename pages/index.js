import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
// import me from "../public/patrik_final_BW.webp";
import AnimatedButton from "../components/AnimatedButton";
import { WordRotate } from "../components/WordRotate";

export default function Home() {
  return (
    <>
      <Head>
        <title>Patrik Laszlo</title>
        <meta
          name="description"
          content="Creating beautiful products that make people's lives easier."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col-reverse lg:flex-row lg:h-screen">
        <div className="h-[450px] md:h-[700px] lg:h-[95%] lg:w-[48%] shrink-0 p-6 lg:pl-12 lg:self-center">
          <div className="bg-gray-100 rounded-[32px] h-full flex overflow-hidden relative object-cover">
            <img
              className="mt-auto block w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src={"/patrik_final_BW.webp"}
              alt="Photo of Patrik Laszlo"
            ></img>
          </div>
        </div>
        <div className="my-2 mb-2 md:my-8 lg:mt-32 lg:w-[52%] flex flex-col p-6 lg:p-12 xl:p-16 text-black">
          <div className="flex gap-3 items-center text-xl lg:text-2xl">
            <h2 className="">Patrik Laszlo</h2>
            <span>·</span>
            <WordRotate
              words={[
                "Full Stack Developer",
                "Product Designer",
                "Product Manager",
                "Project Manager",
                "Photographer",
              ]}
              className={"text-black/50"}
            />
          </div>
          <h1 className="tracking-tight whitespace-nowrap text-4xl md:text-7xl lg:text-[clamp(20px,4.9vw,72px)] leading-[1] font-bold my-2 mb-7 md:my-4 md:mb-8 lg:my-8 lg:mb-12">
            Creating beautiful <br />
            products that make
            <br /> people&apos;s lives easier.
          </h1>
          <div className="flex items-stretch gap-4 xs:gap-6">
            <AnimatedButton />
            <div className="flex gap-2 items-center">
              <Link
                href="https://www.instagram.com/iampatriklaszlo"
                prefetch={false}
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="h-full aspect-square flex items-center justify-center bg-gray-100 group hover:bg-black duration-200 cursor-pointer rounded-full"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 sm:h-7 sm:w-7 lg:h-7 lg:w-7 fill-gray-900 duration-200 group-hover:fill-white"
                  viewBox="0 0 512 512"
                >
                  <title>Logo Instagram</title>
                  <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                  <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/patriklaszlo/"
                prefetch={false}
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="h-full aspect-square flex items-center justify-center bg-gray-100 group hover:bg-black cursor-pointer duration-200 rounded-full"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  strokeWidth="2"
                  className="ai ai-LinkedinFill h-6 w-6 sm:h-7 sm:w-7 lg:h-7 lg:w-7 fill-gray-900 duration-200 group-hover:fill-white"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02 3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969zM2.57 21.83h4V8.799h-4V21.83zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802A2.573 2.573 0 0 1 4.57 7.1a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747.482.478.753 1.126.753 1.803z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
