import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsRss,
  BsTelegram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="container">
          <ul>
            <li>Сайт ҳақида</li>
            <li>RSS</li>
            <li>Алоқа</li>
            <li>Реклама</li>
            <li>Кун мавзулари</li>
            <li>Kun.uz жамоаси</li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="footer-text">
            <p>
              «KUN.UZ» сайтида эълон қилинган материаллардан нусха кўчириш,
              тарқатиш ва бошқа шаклларда фойдаланиш фақат таҳририят ёзма
              розилиги билан амалга оширилиши мумкин. <br />
              Гувоҳнома: №0987. Берилган санаси: 22.06.2015 йил. Муассис: «WEB
              EXPERT» МЧЖ. Таҳририят манзили: 100043, Тошкент шаҳри, К. Ёрматов
              кўчаси, 12-уй. Электрон манзил: info@kun.uz. <br />
              Сайтда эълон қилинаётган муаллифлик мақолаларида келтирилган
              фикрлар муаллифга тегишли ва улар Kun.uz таҳририяти нуқтаи
              назарини ифода этмаслиги мумкин. <br />Ⓣ - мақола ва материалларда
              қўйилган мазкур белги уларнинг тижорат ва реклама ҳуқуқлари
              асосида эълон қилинганлигини билдиради.
            </p>
          </div>
          <ul className="footer-links">
            <li>
              <BsYoutube />
            </li>
            <li>
              <BsTelegram />
            </li>
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsTwitter />
            </li>
            <li>
              <BsInstagram />
            </li>
            <li>
              <BsRss />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
