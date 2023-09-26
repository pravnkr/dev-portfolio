import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";
import {useCursorChange} from "../../hooks/useCursorChange";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const cursorChange = useCursorChange();
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="html-tag"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="html-tag">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills" {...cursorChange}>
                Skills
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" {...cursorChange}>
                Work Experiences
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource" {...cursorChange}>
                Open Source
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements" {...cursorChange}>
                Achievements
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs" {...cursorChange}>
                Blogs
              </a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" {...cursorChange}>
                Talks
              </a>
            </li>
          )}
          <li>
            <a href="#contact" {...cursorChange}>
              Contact Me
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
