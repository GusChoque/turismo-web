import React from "react";
import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import Twitter from "../assets/icons/twitter.svg";

function Footer() {
  return (
    <footer className="p-4 grid grid-cols-4 gap-4 items-center footer">
      <div className="flex flex-col">
        <h2 className="pb-3 font-bold">Company Name</h2>
        <p className="w-2/3 p-2 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
          voluptates et, id aliquam officia sunt quasi temporibus maxime
          incidunt asperiores excepturi non minus deleniti esse, accusantium
          nostrum quidem veniam fuga?
        </p>
      </div>
      <div>
        <span>Col dos</span>
        <p className="w-2/3 p-2 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
          voluptates et, id aliquam officia sunt quasi temporibus maxime
          incidunt asperiores excepturi non minus deleniti esse, accusantium
          nostrum quidem veniam fuga?
        </p>
      </div>
      <div>
        <span>Col tres</span>
        <p className="w-2/3 p-2 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
          voluptates et, id aliquam officia sunt quasi temporibus maxime
          incidunt asperiores excepturi non minus deleniti esse, accusantium
          nostrum quidem veniam fuga?
        </p>
      </div>
      <div>
        <span>Cuatrooo</span>
        <p className="w-2/3 p-2 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
          voluptates et, id aliquam officia sunt quasi temporibus maxime
          incidunt asperiores excepturi non minus deleniti esse, accusantium
          nostrum quidem veniam fuga?
        </p>
      </div>

      <div className="flex flex-col">
        <span className="p-2">Ale, Marquitos, Guty</span>
        <div className="inline-flex gap-3 p-2">
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Facebook" />
          <img src={Twitter} alt="Facebook" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
