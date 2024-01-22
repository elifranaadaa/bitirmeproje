import React from "react";
import BannerImage from "../assets/slider-img-2.jpg";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi giriniz..."
          />
          <label>Kurs ve Mesaj</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Başvurmak istediğiniz kurs ve kendinizi açıklayan bir mesaj giriniz..."
          ></textarea>
          <button>Gönder</button>
        </form>
      </div>
    </div>
  );
};
