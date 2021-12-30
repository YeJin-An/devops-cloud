import React from "react";
import "./ProfileCard.css";
import profile from "./member1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faStickyNote,
  faCoffee,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

function ProfileCard() {
  const Mycomponents = {
    profile: function profileCard(props) {
      return (
        <>
          {props.profileimage}
          {props.name}
          {props.role}
          {props.facebookUrl}
          {props.email}
        </>
      );
    },
  };
  return (
    <>
      <body class="member1">
        <section>
          <nav class="menu">
            <a href="#">
              <FontAwesomeIcon icon={faBars} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faStickyNote} />
            </a>
          </nav>

          <article class="profile">
            <img src={profile} />

            <h1>{profile}</h1>
            <h2>UI/UX INTERACTIVE DEVELOER</h2>
            <a href="#" class="btnView">
              {" "}
              VIEW MORE
            </a>
          </article>

          <ul class="contact">
            <li>
              <i>
                <FontAwesomeIcon icon={faCoffee} />{" "}
              </i>
              <span>Visit My Facebook page.</span>
            </li>
            <li>
              <i>
                <FontAwesomeIcon icon={faSpinner} />{" "}
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
