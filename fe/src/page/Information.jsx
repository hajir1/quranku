import { Icon } from "@iconify/react";
import React from "react";

const Information = () => {
  return (
    <div className="w-full h-full">
      <div className="p-4 flex items-center justify-center w-full">
        <p className="mx-5 text-2xl">Hallo Pengunjung </p>
        <Icon className="text-2xl" icon="fluent:hand-wave-24-regular" />
      </div>
      <div className="p-2">
        <p>
          website ini dibangun dengan technology express , react-js ,
           tailwindcss dan Sass ,dan react-query sebagai state management ,ini adalah website open sources ,
          saya menyadari begitu banyak fitur fitur yang belum tersedia di
          website ini , mohon maaf dan terima kasih
        </p>
      </div>
    </div>
  );
};

export default Information;
