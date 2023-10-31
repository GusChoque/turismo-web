import Logo from "../assets/icons/whatsapp.svg";

const Whatsapp = () => {
  return (
    <div className="fixed rounded-lg z-10 bottom-10 right-10">
      <a href="https://web.whatsapp.com/send?phone=5493517011557" target="_blank" rel="noreferrer">
        <img src={Logo} alt="Whatsapp" className="h-20 hover:scale-125 duration-500" />
      </a>
    </div>
  );
};

export default Whatsapp;
