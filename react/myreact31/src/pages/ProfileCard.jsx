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

function ProfileCard(profileimage, name, role, facebookUrl, email) {
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

            <h1>{coponents.profileimage}</h1>
            <h2>{coponents.name}</h2>
            <a href="#" class="btnView">
              {" "}
              {coponents.role}
            </a>
          </article>

          <ul class="contact">
            <li>
              <i>
                <FontAwesomeIcon icon={faCoffee} />{" "}
              </i>
              <span>{coponents.fackbookUrl}</span>
            </li>
            <li>
              <i>
                <FontAwesomeIcon icon={faSpinner} />{" "}
              </i>
              <span>{coponents.email}</span>
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
