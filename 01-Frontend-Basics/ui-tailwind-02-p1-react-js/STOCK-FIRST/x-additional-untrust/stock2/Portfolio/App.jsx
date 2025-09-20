import Header from "./Header";
import Projects from "./projects";
import Resume from "./resume";
import Exp from "./experience";
import Edu from "./education";
import Skills from "./skills";
import Testi from "./testimonials";
import Blog from "./blog";
import AboutMe from "./About";


export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-tr from-rgbdark via-rgbblue to-rgbmid flex flex-col items-center justify-center px-6 lg:px-20 text-white">
        <h1 className="text-6xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 text-transparent bg-clip-text drop-shadow-lg max-w-4xl">
          The Future is RGB | USE Dark
        </h1>
        <p className="mt-6 max-w-2xl text-gray-300 text-center text-lg">
          Experience a bold, vibrant UI that blends creativity and cutting-edge
          design. This page is designed with a unique RGB aesthetic, perfect for
          visionaries and tech lovers.
        </p>
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-3 text-sm font-bold rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:opacity-90 transition">
            Explore Colors
          </button>
          <button className="px-6 py-3 text-sm font-semibold rounded-full border border-white text-white hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>
      </main>
      <AboutMe/>

      <Projects />
      <Skills />
      <Resume />
      <Exp/>
      <Edu/>
      <Testi/>
      <Blog/>
    </>
  );
}
