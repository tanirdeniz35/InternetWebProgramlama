import React from "react";

const HavaDurumu = (props) => {
  let resim = "";

  if (props.durum === "karlı") {
    resim =
      "https://media.istockphoto.com/id/1367375319/tr/foto%C4%9Fraf/a-stylish-girl-wrapped-herself-in-a-scarf-and-mittens-and-walks-along-the-sea-or-ocean.jpg?s=2048x2048&w=is&k=20&c=I7he3mrS58tALyvd2ebzjmW669lIvmhu3VDk-2NQQi4=";
  }

  return (
    props.aktiflik && (
      <div>
        <p style={props.style}>
          Bugün hava {props.durum}{" "}
          {resim && <img width={50} src={resim} alt="Hava durumu" />}
        </p>
      </div>
    )
  );
};

export default HavaDurumu;
