const experiencesData = [
  {
    id: 1,
    date: "2018 - 2019",
    designation: "Desarrollador Fronted con AngularJs y servicios de Backend en Python",
    company: "Proyectos y sistemas ISARQ C.A",
    link: "https://www.linkedin.com/company/isarq?originalSubdomain=ve",
  },
  {
    id: 2,
    date: "2018 - 2018",
    designation: "Desarrollador Fronted - MAPFRE Segero Vehiculos",
    company: "Megasoft Computacion C.A.",
    link: "https://www.linkedin.com/company/mega-soft-computaci-n-c.-a?originalSubdomain=ve",
  },
  {
    id: 3,
    date: "2016 - 2018",
    designation: "Desarrollador Full Stack",
    company: "Soluciones MedianeT",
    link: "https://www.linkedin.com/company/soluciones-medianet-c-a-/",
  }, 
];
const educationData = [
  {
    id: 1,
    date: "2022 - Ahora",
    degree: "Desarrollador Full Stack - App Web Educativa",
    institute: "Instituto Gosen - Panama",
    link: "https://institutogosen.edu.pa",
  },
  {
    id: 2,
    date: "2018 - Ahora",
    degree: "Desarrollador Full Stack - Varios",
    institute: "Freelance",
    link: "",
  },
  {
    id: 3,
    date: "2019 - 2020",
    degree: "Desarrollador Fronted - Exchange de Criptomoneda",
    institute: "Ennovasis",
    link: "",
  },
];

const EducationExperience = () => {
  return (
    <div className="tokyo_tm_resumebox w-full h-auto clear-both float-left bg-white py-[93px] px-0">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Experiencia</h3>
            </div>
            <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none relative inline-block pt-[10px]">
                {educationData.map((edu, i) => (
                  <li
                    className={`m-0 w-full float-left relative pl-[20px] ${
                      i == educationData.length - 1 ? "" : "pb-[45px]"
                    }`}
                    key={edu.id}
                  >
                    <div className="list_inner  w-full h-auto clear-both float-left relative flex">
                      <div className="time w-1/2 pr-[20px]">
                          <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                            {edu.date}
                          </span>
                      </div>
                      <div className="place w-1/2 pl-[20px]">
                        <a href={edu.link} target="__blank">
                          <h3 className="text-[16px] mb-[2px] font-semibold">
                            {edu.institute}
                          </h3>
                          </a>  
                        <span className="text-[14px]">{edu.degree}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold hidden">Experiencia</h3>
              <br />
            </div>
            <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none relative inline-block pt-[10px]">
                {experiencesData.map((exp, i) => (
                  <li
                    className={`m-0 w-full float-left relative pl-[20px] ${
                      i == experiencesData.length - 1 ? "" : "pb-[45px]"
                    }`}
                    key={exp.id}
                  >
                    <div className="list_inner  w-full h-auto clear-both float-left relative flex">
                      <div className="time w-1/2 pr-[20px]">
                        <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          {exp.date}
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[20px]">
                        <a href={exp.link} target="__blank">
                          <h3 className="text-[16px] mb-[2px] font-semibold">
                            {exp.company} 
                          </h3>
                        </a> 
                        <span className="text-[14px]">{exp.designation}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationExperience;
