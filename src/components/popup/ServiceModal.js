import { TokyoContext } from "@/src/Context";
import { useContext } from "react";
import ModalContainer from "./ModalContainer";
const ServiceModal = () => {
  const { serviceModal, setServiceModal } = useContext(TokyoContext);
  return (
    <ModalContainer nullValue={setServiceModal}>
      <div className="service_popup_informations w-full h-auto clear-both float-left">
        
        <div className="main_title">
          <h3>{serviceModal.name}</h3>
        </div>
        <div className="descriptions w-full float-left">
          {serviceModal.text.map((text, i) => (
            <p
              className={serviceModal.text.length - 1 == i ? "" : "mb-[15px]"}
              key={i}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </ModalContainer>
  );
};
export default ServiceModal;
