import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Aplicaciones Web",
    text: [  
      "En el entorno empresarial siempre cambiante y cambiante de hoy, es esencial responder rápidamente a las expectativas del cliente y brindar una satisfacción excepcional al cliente. El mercado actual depende en gran medida de la tecnología y los medios digitales. Necesita encontrar el socio de soluciones adecuado para su empresa para mantenerse a la vanguardia de este mercado explotado digitalmente.",
      "El software de aplicación personalizado creado por mi lo ayuda a alinear sus procesos y flujos de trabajo. También le permite concentrarse en problemas y procesos comerciales importantes con la ayuda de la tecnología y un rendimiento mejorado.",
      "En estos escenarios comerciales complejos y ultrarrápidos del mundo actual, lo más importante es comprender los requisitos comerciales y los desafíos que enfrentan los clientes cuando interactúan con el negocio. Soy desarrollador de software personalizados altamente experimentados y profesional.",
      "Aplicaciones web, ofrezco la posibilidad de automatizar, evolucionar, entretener y educar, mediante una  ¡todo con una aplicación web! con tecnologia de punta, y asi poder automatizar futuras ideas.",
      "Aplicamos y sego un enfoque único y personalizado para el desarrollo de software, que me permite evaluar las necesidades comerciales en todas las etapas del ciclo de desarrollo de software. Hé implementado estrategias que me permiten satisfacer las demandas y desafíos del competitivo mercado actual.",
    ],
  },
  {
    id: 2,
    name: "Diseño y Desarrollo Web",
    text: [
      "Te ofrezco acompañarte en todo el proceso de tu marca a integrarse a espacio web que es una parte esencial del funcionamiento de un negocio hoy. Y tener una presencia web simple y escasa no es suficiente en estos días. Tu sitio web o presencia en la web tiene que ser impecable si quieres desarrollar una imagen de marca y aprovechar las innumerables oportunidades que ofrece el ecosistema online. Obviamente, esto solo es posible con servicios de desarrollo web experimentados.",
      "Soy un desarrollador con muchos años de experiencia y mi objetivo es proporcionarle un sitio web completamente funcional que obligue a los visitantes a permanecer e interactuar, convirtiéndolos así en ingresos. Me apasiona jugar con cada nueva tecnología de desarrollo web que llega y, con mi experiencia y conocimientos, crear innumerables historias de éxito.",
      "Sitios web de eCommerce",
      "Soluciones de comercio electrónico",
      "Desarrollo de aplicaciones personalizadas",
      "Consultoría tecnológica",
      "Desarrollo de aplicaciones web empresariales",
      "Integraciones de API de terceros",
      "Desarrollo de backend y frontend",

    ],
    image: "assets/img/news/2.jpg",
  },
  {
    id: 3,
    name: "Desarrollo Movil",
    text: [
      "Tarde o temprano, todas las empresas y organizaciones del mundo actual necesitan una aplicación móvil. Por este motivo mi Filosofia de desarrollo MVC con metodologia Frontend - Backend, guia a poder integrar soluciones web, escritorio y movil a la vez, lo cual es beneficioso a la integración de servicios en una aplicacion movil.",
    ],
    image: "assets/img/news/3.jpg",
  },
  
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Leer más</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;
