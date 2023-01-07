import React from "react";
import rek from "../assests/optimize.webp";
import { Link } from "react-router-dom";
import kunuzLogo from "../assests/kun-uz-logo.svg";
import { RxHamburgerMenu } from "react-icons/rx"
import { SlClose } from "react-icons/sl"
import { useState } from "react";

function Nav() {
  const [seeMenu, setSeeMenu] = useState(true);
  const menu = () => {
    setSeeMenu(!seeMenu)
  }
  return (
    <header>
      <div className="container">
        <a href="https://ads.adfox.ru/367651/clickURL?ad-session-id=6330871673073189628&duid=1664868451352008977&hash=c735dc60c2577db8&sj=LYgDdxie7B820L2yA3TwJ0ekQ1q125ljjZLnKnGu1IkY7co_4pDAqFkTbvjuyQ%3D%3D&rand=kxlqzpu&rqs=RV_rrdEJA0MnErlj8zBSZNi81zGsW_cb&pr=cuidmha&p1=cqdyh&ytt=6598680510469&p5=nfafq&ybv=0.699404&p2=hhiz&ylv=0.699404&pf=http%3A%2F%2Fsas-serene.uz%2F%3Futm_source%3Dkun%26utm_medium%3Dcpm%26utm_campaign%3Dbanner_reach%26utm_content%3Dsas">
          <img src={rek} alt="Reklama" className="ads" />
        </a>
        <div className="page-header">
          <Link to="/" className="page-header-logo">
            <img src={kunuzLogo} alt="Kun uz logo" />
          </Link>
          <ul className={`${seeMenu === false && "active"}`}>
            <li className="menu-item">ЎЗБЕКИСТОН</li>
            <li className="menu-item">ЖАҲОН</li>
            <li className="menu-item">ИҚТИСОДИЁТ</li>
            <li className="menu-item">Жамият</li>
            <li className="menu-item">Фан-техника</li>
            <li className="menu-item">Спорт</li>
            <li className="menu-item">Business class</li>
            <li className="menu-item">Аудио</li>
          </ul>
          {seeMenu ? <RxHamburgerMenu className="menu" onClick={menu} /> : <SlClose className="menu" onClick={menu}/>}
        </div>
        <div className="countries">
          <div className="regions">Ҳудудлар</div>
          <ul>
            <li>Тошкент ш.</li>
            <li>Қорақалпоғистон</li>
            <li>Андижон</li>
            <li>Фарғона</li>
            <li>Наманган</li>
            <li>Самарқанд</li>
            <li>Бухоро</li>
            <li>Хоразм</li>
            <li>Сурхондарё</li>
            <li>Қашқадарё</li>
            <li>Жиззах</li>
            <li>Сирдарё</li>
            <li>Тошкент вил.</li>
            <li>Навоий</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav;
