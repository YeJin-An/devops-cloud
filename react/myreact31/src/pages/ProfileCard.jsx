import React from "react";
import "./ProfileCard.css";
import profile from "./member1.jpg";
import { IoMdPerson } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { AiFillPhone, AiFillFolder } from "react-icons/ai";

function ProfileCard() {
  return (
    <>
      <body class="member1">
        <section>
          <nav class="menu">
            <a href="#">
              <IoMdPerson />
            </a>
            <a href="#">
              <VscAccount />
            </a>
          </nav>

          <article class="profile">
            <img src={profile} />

            <h1>DOCODELAB</h1>
            <h2>UI/UX INTERACTIVE DEVELOER</h2>
            <a href="#" class="btnView">
              {" "}
              VIEW MORE
            </a>
          </article>

          <ul class="contact">
            <li>
              <i>
                <AiFillPhone />{" "}
              </i>
              <span>Visit My Facebook page.</span>
            </li>
            <li>
              <i>
                <AiFillFolder />{" "}
              </i>
              <span>hadaboni80@naver.com</span>
            </li>
          </ul>
          <nav class="others">
            <a href="" class="on"></a>
          </nav>
        </section>
      </body>
    </>
  );
}
export default ProfileCard;
