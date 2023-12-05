import { useContext, useEffect, useRef } from "react";
import { ModalContainerCreate } from "./StyleModalCreat";
import { AiOutlineClose } from "react-icons/ai";
import { ContactConext } from "../../../Providers/User/ContactsContext";
import { FormModalCreateContact } from "./FormModalCreate";
// import { TitleTwo } from "../../../Styles/typography";

export const ModalNewPost = () => {
  const { setCreateOpen } = useContext(ContactConext);
  const buttonRef = useRef(null as any);
  const modalRef = useRef(null as any);

  useEffect(() => {
    const handleOutclick = (e: { target: any }) => {
      if (!modalRef.current?.contains(e.target)) {
        setCreateOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutclick);
    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  useEffect(() => {
    const handleKeydow = (e: { key: string }) => {
      if (e.key === "Escape") {
        buttonRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeydow);
    return () => {
      window.removeEventListener("keydown", handleKeydow);
    };
  });

  return (
    <ModalContainerCreate role="dialog">
      <div ref={modalRef}>
        <header>
          <h2>Novo contato</h2>
        </header>
        <FormModalCreateContact />
        <button className="btn-close" ref={buttonRef} onClick={() => setCreateOpen(false)}>
          <AiOutlineClose size={28} color={"#0000007f"} />
        </button>
      </div>
    </ModalContainerCreate>
  );
};
