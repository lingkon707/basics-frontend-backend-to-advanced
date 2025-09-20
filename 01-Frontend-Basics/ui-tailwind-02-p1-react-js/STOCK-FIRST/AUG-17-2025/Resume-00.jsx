import React from 'react';

const resumeData = {
  profileImage: "https://demo.casethemes.net/maiko/wp-content/uploads/2024/11/home5-s1-01.webp",
  name: "Robert William",
  role: "Architect Freelancer",
  email: "HelloWilliam@gmail.com",
  phone: "+8120-360-4027",
  location: "Based in Los Angeles, CA",
  buttonText: "Buy on",
  buttonLogo: "https://cdn.iconscout.com/icon/free/png-256/envato-2-282295.png",
  experiences: [
    {
      year: "2010 - 2012",
      position: "Framer Designer & Developer",
      company: "Brunodee Agency",
      description: "Maximus nulla natoque aliquet tincidunt sociosqu libero venenatis. Felis habitant etiam fames sodales fusce ante eu cursus. Sociosqu urna id vehicula.",
      responsibilities: [
        "Quisque parturient faucibus sit facilisis",
        "Elementum tortor posuere morbi sollicitudin",
        "Parturient aenean mollis turpis"
      ]
    },
    {
      year: "2012 - 2014",
      position: "Front-End WordPress Developer",
      company: "Envato Market",
      description: "Imperdiet suscipit aenean hendrerit cursus felis tellus nullam. Sodales ullamcorper elit blandit quisque etiam mi.",
      responsibilities: [
        "Designing and implementing responsive websites",
        "Optimizing front-end performance",
        "Collaborating with backend teams for integration"
      ]
    }
  ]
};

const ResumeSection = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-20">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column (Profile) */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <img 
            src={resumeData.profileImage} 
            alt="Profile" 
            className="w-32 h-32 rounded-full border-4 border-gray-400 mb-4"
          />
          <h2 className="text-3xl font-bold">{resumeData.name}</h2>
          <p className="text-xl text-gray-600 mb-4">{resumeData.role}</p>
          <p className="text-sm text-gray-600">{resumeData.email}</p>
          <p className="text-sm text-gray-600 mb-4">{resumeData.phone}</p>
          <p className="text-sm text-gray-600 mb-6">{resumeData.location}</p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 flex items-center transition">
            <img src={resumeData.buttonLogo} alt="envato" className="w-5 h-5 mr-2" />
            {resumeData.buttonText} Envato
          </button>
        </div>

        {/* Right Column (Resume) */}
        <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
          <h2 className="text-4xl font-extrabold mb-8 text-center lg:text-left">Resume.</h2>
          <p className="text-lg font-medium text-center lg:text-left mb-12">Education & Working Experience</p>

          {resumeData.experiences.map((exp, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start mb-12">
              <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                <div className="text-center lg:text-left">
                  <span className="text-lg font-bold text-gray-600">{exp.year}</span>
                </div>
              </div>
              <div className="w-full lg:w-3/4">
                <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                <p className="text-lg text-gray-700">{exp.company}</p>
                <p className="text-md text-gray-600 mb-4">{exp.description}</p>
                <ul className="list-disc ml-6 text-gray-600">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
