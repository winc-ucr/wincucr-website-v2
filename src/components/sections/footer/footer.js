import React, { useState, useEffect } from "react";
import { Link, navigate, graphql, useStaticQuery } from "gatsby";
import { FaDiscord, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import { VscGithubInverted } from "react-icons/vsc";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footerBg">
      <div className="footer">
        <div>
          <h1>WINC;</h1>
        </div>
        <div>
          <h3>People</h3>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about#team">Team</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Join</h3>
          <ul>
            <li>
              <Link to="/#programs">Programs</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Stay in Touch</h3>
          <ul>
            <li>
              <a href="" target="_blank">
                Newsletter
              </a>
            </li>
            <li>
              <a href="mailto:wincucr@gmail.com">wincucr@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="socials"
        style={{
          display: "flex",
          marginTop: "1.25rem",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <a href="https://discord.gg/RH53n2dCFn" target="_blank">
          <FaDiscord size="2em" />
        </a>
        <a
          href="https://www.linkedin.com/company/ucr-women-in-computing/"
          target="_blank"
        >
          <FaLinkedin size="2em" />
        </a>
        <a href="https://github.com/winc-ucr" target="_blank">
          <VscGithubInverted size="2em" />
        </a>
        <a href="https://www.instagram.com/wincucr/" target="_blank">
          <AiFillInstagram size="2em" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCpg9Xu-WaFM3KRN35f6hPNA"
          target="_blank"
        >
          <FaYoutube size="2em" />
        </a>
      </div>
    </div>
  );
};

export default Footer;