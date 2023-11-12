import { Icon } from "@iconify/react";
import React from "react";

const Information = () => {
  return (
    <div className="w-full h-full">
      <div className="p-4 flex items-center justify-center w-full">
        <p className="mx-5 text-2xl">Hallo Pengunjung </p>
        <Icon className="text-2xl" icon="fluent:hand-wave-24-regular" />
      </div>
      <div className="p-4">
        <p>
          <b>pendahuluan : </b>sebelumnya saya ucapkan terima kasih banyak
          kepada{" "}
          <a href="https://github.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA">
            <u>fariz dotid</u>
          </a>{" "}
          yang telah menyediakan daftar daftar data api dan saya ucapkan terima
          kasih kepada{" "}
          <a href="https://github.com/renomureza/quran-api-id">
            <u>mas renoMuza</u>
          </a>{" "}
          yang telah memberikan data api Alquran dengan fromat Json secara open
          sources , website ini dibangun selama -+ 10 hari dan saya menyadari
          begitu banyak fitur fitur yang belum tersedia di website ini dan
          mungkin bug bug yang tanpa saya sadari terjadi di website ini. dan
          saya meminta maaf apabila terjadi kesalahan di penulisan teks arab ,
          penulisan arti , atau apapun itu apabila ada debugging yang belum saya
          ketahui.
        </p>
        <p>
          website ini dibangun dengan technology expressJs sebagai BackEnd,
          reactJs sebagai Frontend , tailwindCss dan Sass sebagai desain ,dan
          react-query sebagai state management ini adalah website yang open
          source , saya ucapkan terima kasih telah mengunjungi website ini.
        </p>
        <p className="text-center">
          kunjungi lebih lanjut tentang{" "}
          <a className="text-blue-700" href="http://">
            <u>
              <i><a href="https://hajir1.github.io/portofolio" target="_blank">developer</a></i>
            </u>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Information;
