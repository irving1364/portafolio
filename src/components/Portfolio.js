import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { TokyoContext } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
const detailData = [
  {
    id: 1,
    thumbnail: "assets/img/portfolio/1.png",
    title: "ThatLifeStudio",
    text: [
      "Sitio Web con integracion con tienda, backend con Woocomerce e integrado con el gestor de productos Printify automatico. Estructura en frontend con React, NextJs y SSR en rutas dinamicas de Productos.",
      "Integracion con Pasarela de Pagos, Paypal, Mastercard, Visa y Google Pay. Header con Video dinamico.",
    ],
    link: "https://thatslifestudio.com",
    client: "ThatLifeStudio",
    date: "2023",
    category: "Tienda Web",
    share: [
     
    ]
  },
  {
    id: 2,
    thumbnail: "assets/img/portfolio/2.png",
    title: "Fadimet",
    text: [
      "Sitio Web con integracion con tienda, backend con Interfuerza sistema administrativo, financiero y contable, el pedido creado al finalizar la compra por el cliente, se crea automaticamente en el sistema administrativo, asi agilizando y aprovechando los sistemas tecnologicos. Estructura en frontend con React, NextJs y SSR en rutas dinamicas de Productos.",
    ],
    link: "https://fadimeet.com.pa",
    client: "Fadimet",
    date: "2023",
    category: "Tienda Web",
    share: [
      {
        id: 1,
        iconName: "icon-instagram-1",
        link: "https://www.instagram.com/fadimet.pa/",
      },
    ]
  },
  {
    id: 3,
    thumbnail: "assets/img/portfolio/3.png",
    title: "World Furniture Panamá",
    text: [
      "Sitio Web con integracion con tienda, backend con Woocomerce integracion con Codeigniter, Frontend con angular es una web SPA, posee tambien un sistema tipo punto en la web, para uso de los vendedores fuera de la oficina y el pedido llegue al mismo sistema.",
    ],
    link: "https://worldfurniturepanama.com",
    client: "World Furniture Panamá",
    date: "2023",
    category: "Tienda Web",
    share: [
      {
        id: 1,
        iconName: "icon-instagram-1",
        link: "https://www.instagram.com/worldfurniture507/?hl=es",
      },
    ]
  },
  {
    id: 4,
    thumbnail: "assets/img/portfolio/4.png",
    title: "Instituto Politécnico Gosén",
    text: [
      "Sitio Web Frontend creado con Angular y backend en Codeigniter, creado apartir de un Mockup PSD y realizado exactamente a la medida del cliente, poseo un formulario de prematricula de los alumnos, donde la data llega al sistema de administracion estudiantil.",
    ],
    link: "https://institutogosen.edu.pa",
    client: "Instituto Politécnico Gosén",
    date: "2023",
    category: "Web",
    share: [
      {
        id: 1,
        iconName: "icon-instagram-1",
        link: "https://www.instagram.com/institutogosen/?hl=es",
      },
    ]
  },
  {
    id: 5,
    thumbnail: "assets/img/portfolio/5.png",
    title: "Proinservi",
    text: [
      "Sitio Web con integracion con tienda, backend con Woocomerce integracion con Codeigniter, Frontend con angular es una web SPA.",
    ],
    link: "https://www.proinservi.com",
    client: "Proinservi",
    date: "2023",
    category: "Tienda Web",
    share: [
      {
        id: 1,
        iconName: "icon-instagram-1",
        link: "https://www.instagram.com/proinservi/",
      },
    ]
  },

  {
    id: 6,
    thumbnail: "assets/img/portfolio/6.png",
    title: "Dorisec",
    text: [
      "Sitio Web tipo Landing Page, creado totalmente a medida del Mockup Psd entregado por el cliente. En dos idiomas, Español e Ingles. ",
    ],
    link: "https://dorisec.com",
    client: "Dorisec",
    date: "2023",
    category: "Tienda Web",
    share: [
      {
        id: 1,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/in/andreacabrera27/?originalSubdomain=ec",
      },
    ]
  },

  {
    id: 7,
    thumbnail: "assets/img/portfolio/7.png",
    title: "Logihelpsolutions",
    text: [
      "Sitio Web, realizado con Angular en dos idiomas, Español e Ingles.",
    ],
    link: "https://logihelpsolutions.com",
    client: "logihelpsolutions",
    date: "2022",
    category: "Web",
    share: [
      {
        id: 1,
        iconName: "icon-instagram-1",
        link: "https://www.instagram.com/logihelp_solutions/?hl=es-la",
      },
    ]
  },

  {
    id: 8,
    thumbnail: "assets/img/portfolio/8.png",
    title: "Maquidebar",
    text: [
      "Sitio Web, realizado completamente Wordpress, con Elemtor tienda con Woocommerce, apartado de deseos.",
    ],
    link: "https://maquidebar.com",
    client: "Maquidebar",
    date: "2022",
    category: "Tienda Web",
    share: [
      
    ]
  },

  {
    id: 9,
    thumbnail: "assets/img/portfolio/10.png",
    title: "integralseguros",
    text: [
      "Sitio Web, Desarrollado a la medida del cliente, Frontend con Angular.",
    ],
    link: "https://integralseguros.com.pa",
    client: "integralseguros",
    date: "2020",
    category: "Web",
    share: [
      {
        id: 1,
        iconName: "icon-instagram-1",
        link: "https://www.instagram.com/logihelp_solutions/?hl=es-la",
      },
    ]
  },

  {
    id: 10,
    thumbnail: "assets/img/portfolio/11.png",
    title: "Okey - Plataforma Estudiantil",
    text: [
      "Sistema Web donde se crea el seguimiento, a maestros, materias, alumnos, clases, evaluacion, actividades, ingtegrado con whatsapp para notificaciones en tiempo real a alumnos, calendario de informacion, integracion con google meet para videoconferencias o clases online dentro de la app web.",
    ],
    link: "https://institutogosen.okey.com.pa",
    client: "Instituto Gosen",
    date: "2022 - 2023",
    category: "Web App",
    share: [
      {
        id: 1,
        iconName: "icon-instagram-1",
        link: "https://www.instagram.com/logihelp_solutions/?hl=es-la",
      },
    ]
  },

  

  {
    id: 11,
    thumbnail: "assets/img/portfolio/12.png",
    title: "App Movil Profit",
    text: [
      "App movil integrada al sistema contable profit, donde vendendor y cliente pueden ingresar y crear pedidos, ver el inventario, ver su estado de cuenta directamente desde su equipo telefonico.",
    ],
    link: "https://institutogosen.okey.com.pa",
    client: "Privado",
    date: "2022 - 2023",
    category: "Web App",
    share: [
      
    ]
  },
  
  

];
const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
        });
      }, 3000);
    }
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });
  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Portfolio"}
                title={"Portafolio Creativo"}
              />
              <div className="portfolio_filter">
                <ul className="list-none">
                  <li className="mr-[25px] inline-block">
                    <a
                      href="#"
                      className="current text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      onClick={handleFilterKeyChange("*")}
                    >
                      Todos
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("Tienda")}
                    >
                      Tienda Web
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("Web")}
                    >
                      Web
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("Webapp")}
                    >
                      Web App
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("App")}
                    >
                      App Movil
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="list_wrapper w-full h-auto clear-both float-left">
            <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
              <li className="Tienda mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Thatslifestudio"
                    data-category="Tienda"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[0]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/1-black.png"
                      />
                    </a>
                  </div>
                </div>
              </li>

              <li className="Tienda mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Fadimet"
                    data-category="Tienda"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[1]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/2-black.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="Tienda mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="worldfurniturepanama"
                    data-category="Tienda"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[2]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/3-black.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="Web mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Instituto Gosen"
                    data-category="Web"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[3]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/4-black.png"
                      />
                    </a>

                    
                  </div>
                </div>
              </li>
              <li className="Tienda mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Proinservi"
                    data-category="Tienda"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[4]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/5-black.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="Web mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Dorisec"
                    data-category="Web"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[5]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/6-black.png"
                      />
                    </a>
                  </div>
                </div>
              </li>

              <li className="Web mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Logihelp"
                    data-category="Web"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[6]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/7-black.png"
                      />
                    </a>
                  </div>
                </div>
              </li>

              <li className="Tienda mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Maquidebar"
                    data-category="Tienda"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[7]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/8-black.png"
                      />
                    </a>
                  </div>
                </div>
              </li>


              <li className="Web mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Integralseguros"
                    data-category="Web"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[8]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/10-black.png"
                      />
                    </a>
                  </div>
                </div>
              </li>


              <li className="Webapp mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Okey"
                    data-category="Webapp"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[9]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/11-black.png"
                      />
                    </a>
                  </div>
                </div>
              </li>

              <li className="App mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Profit"
                    data-category="App"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[10]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/12-black.png"
                      />
                    </a>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
