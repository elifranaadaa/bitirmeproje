import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/slider-img-1.jpg";
import BannerImage8 from "../assets/about-img.18bf2ff46b4677d35ae4.jpg";

import "../styles/Home.css";

export const Home = () => {
  return (
    <div>
      <div
        className="mainPage"
        style={{
          backgroundImage: `url(${BannerImage})`,
        }}
      >
        <div className="order">
          <p>Meram Belediyesi Ev Hanımları için </p>
          <p>Ücretsiz El Sanatları Kursu Düzenliyor</p>
          <Link to="/contact">
            <button>KURSA BAŞVUR</button>
          </Link>
        </div>
      </div>
      <div className="yazi">
        <div className="imgbaskan">
          <img src={BannerImage8} alt="" />
        </div>
        <div className="yazibaskan">
          <p>Sevgili Hemşehrilerim,</p>
          <p>
            Sizlerin yeteneklerini keşfetmeye ve el becerilerinizi
            geliştirmenize yardımcı olmak amacıyla, belediyemiz tarafından el
            sanatları kursları düzenleniyor. Ev hanımlarımızın boş zamanlarını
            değerlendirebilecekleri, yeni beceriler kazanabilecekleri bu kurslar
            sayesinde, hem keyifli vakit geçirecekler hem de el emeği göz nuru
            eserler ortaya çıkaracaklar.
          </p>
          <p>
            El sanatları kurslarımızda; el nakışı, dikiş-nakış, ahşap boyama,
            seramik gibi birçok farklı alanda eğitimler verilecek. Siz de bu
            fırsattan yararlanarak kendinizi geliştirebilir, yeni arkadaşlıklar
            edinebilirsiniz.
          </p>
          <p>
            Kurslarımıza katılmak isteyen tüm ev hanımlarını bekliyoruz. Detaylı
            bilgi ve kayıt için belediyemizin resmi web sitesini ziyaret
            edebilir veya belediye binamıza uğrayabilirsiniz.
          </p>
          <p>Sizleri el sanatları kurslarında görmekten mutluluk duyacağım.</p>
          <p>Saygılarımla,</p>
          <p>Meram Belediye Başkanı Mustafa Kavuş</p>
        </div>
      </div>
    </div>
  );
};
