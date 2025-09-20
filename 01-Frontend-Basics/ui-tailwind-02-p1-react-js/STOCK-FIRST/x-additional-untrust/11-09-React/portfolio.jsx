"use client"

const Portfolio = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-900 to-black text-white py-12">
      <nav className="flex justify-between items-center max-w-[1200px] mx-auto px-6 mb-12">
        <h1 className="text-2xl font-bold">
          Port<span className="text-blue-400">folio</span>
        </h1>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#services" className="hover:text-blue-400">Services</a></li>
          <li><a href="#portfolio" className="hover:text-blue-400">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md text-sm hover:bg-pink-600">
          Download CV
        </button>
      </nav>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-[1200px] mx-auto px-6">
        {/* Image with blue glow */}
        <div className="relative">
          <div className="w-48 h-60 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 blur-xl opacity-70 absolute -top-6 -left-6"></div>
          <img
            src="https://i.pravatar.cc/300" // Replace with actual image URL or local import
            alt="Chandni Chauhan"
            className="rounded-full w-48 h-60 object-cover relative"
          />
        </div>

        {/* Text content */}
        <div className="max-w-xl">
          <p className="text-lg mb-1">Hello, I'm</p>
          <h2 className="text-3xl font-extrabold mb-2">Chandni Chauhan</h2>
          <p className="text-blue-400 text-xl font-semibold mb-4">
            And I'm a <span className="underline">Web Developer</span>
          </p>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus tempor possimus
            voluptates quis necessitatibus, cupiditate explicabo ad a perferendis!
          </p>

          {/* Social icons */}
          <div className="flex space-x-4 mb-6">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22,12A10,10,0,1,0,12,22V14.6H9v-3H12V9.8c0-3,1.8-4.6,4.5-4.6a18.5,18.5,0,0,1,2.7.2v3H17a1.7,1.7,0,0,0-1.9,1.8v2.1h3.4l-.4,3H15v7.4A10,10,0,0,0,22,12Z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.43 8.43 0 01-2.7 1.03 4.22 4.22 0 00-7.18 3.85A12 12 0 013 5.1a4.22 4.22 0 001.31 5.64 4.21 4.21 0 01-1.91-.53v.05a4.22 4.22 0 003.38 4.13 4.22 4.22 0 01-1.9.07 4.22 4.22 0 003.94 2.94A8.47 8.47 0 012 19.54a12 12 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18-.01-.36-.02-.53A8.36 8.36 0 0022.46 6z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5h.02a2.5 2.5 0 002.5-2.5A2.5 2.5 0 004.98 3.5zM2.5 21h5v-9.25h-5V21zM9.5 12.5h4.7v1.25h.06c.65-1.24 2.25-2.55 4.63-2.55 4.95 0 5.86 3.25 5.86 7.46V21h-5v-6.5c0-1.55-.03-3.55-2.17-3.55-2.18 0-2.5 1.68-2.5 3.42V21h-5V12.5z"/></svg>
            </a>
          </div>

          <div className="flex space-x-4">
            <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
              Hire Me
            </button>
            <button className="border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 flex justify-between max-w-[1200px] mx-auto text-center text-gray-300 px-6">
        <div>
          <h3 className="text-3xl font-bold">10+</h3>
          <p>Years of experience</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">30+</h3>
          <p>Projects completed</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">5+</h3>
          <p>Technologies mastered</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">100+</h3>
          <p>Clients satisfied</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
