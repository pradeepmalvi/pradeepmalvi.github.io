import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const data = [
  { url: "https://github.com/pradeepmalvi", icon: <BsGithub /> },
  { url: "https://www.linkedin.com/in/pradeep-malviya", icon: <BsLinkedin /> },
  { url: "https://www.instagram.com/pradeep_malviya", icon: <BsInstagram /> },
];

const SocialMedia = () => (
  <div className="app__social">
    {data.map((social) => (
      <a href={social.url} target="_blank">
        {social.icon}
      </a>
    ))}
  </div>
);

export default SocialMedia;
