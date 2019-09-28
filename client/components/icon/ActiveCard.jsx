import React, { useEffect } from "react";
import {
  DiReact,
  DiJavascript1,
  DiBootstrap,
  DiSass,
  DiLess,
  DiCss3,
  DiHtml5,
  DiGithubBadge,
  DiGit,
  DiNodejsSmall,
  DiMysql,
  DiPostgresql
} from "react-icons/di";

export default function ActiveCard({ activeSkill }) {
  return (
    <div className="container">
      <div style={activeSkill.name === "Redux" ? { marginTop: "2.75%" } : null}>
        <div className="header">
          <div className="titles">
            <h2>{activeSkill.name}</h2>
            <h4>{activeSkill.subtitle}</h4>
          </div>
          <div className="icon">
            {activeSkill.icon === "DiGit" ? (
              <DiGit style={{ fontSize: "6rem", color: "#F34F29" }} />
            ) : activeSkill.icon === "DiGithubBadge" ? (
              <DiGithubBadge style={{ fontSize: "6rem", color: "#181616" }} />
            ) : activeSkill.icon === "DiHtml5" ? (
              <DiHtml5 style={{ fontSize: "6rem", color: "#E54D26" }} />
            ) : activeSkill.icon === "DiCss3" ? (
              <DiCss3 style={{ fontSize: "6rem", color: "#3D8FC6" }} />
            ) : activeSkill.icon === "DiLess" ? (
              <DiLess style={{ fontSize: "6rem", color: "#2A4D80" }} />
            ) : activeSkill.icon === "DiSass" ? (
              <DiSass style={{ fontSize: "6rem", color: "#CC6699" }} />
            ) : activeSkill.icon === "DiBootstrap" ? (
              <DiBootstrap style={{ fontSize: "6rem", color: "#5B4282" }} />
            ) : activeSkill.icon === "DiJavascript1" ? (
              <DiJavascript1 style={{ fontSize: "6rem", color: "#F0DB4F" }} />
            ) : activeSkill.icon === "DiReact" ? (
              <DiReact style={{ fontSize: "6rem", color: "#61DAFB" }} />
            ) : activeSkill.icon ===
              "img src='../static/redux.png' alt='Redux Icon'" ? (
              <img
                src="../static/redux.png"
                alt="Redux Icon"
                style={{ width: "75px", maxHeight: "70px", marginRight: "2%" }}
              />
            ) : activeSkill.icon ===
              "img src='../static/next-text.png' alt='Next Icon'" ? (
              <img
                src="../static/next-text.png"
                alt="Next Icon"
                style={{
                  width: "100px",
                  maxHeight: "100px",
                  marginRight: "5%"
                }}
              />
            ) : activeSkill.icon === "iNodejsSmall" ? (
              <DiNodejsSmall style={{ fontSize: "6rem", color: "#83CD29" }} />
            ) : activeSkill.icon ===
              "img src='../static/expressFinal.png' alt='Express Icon'" ? (
              <img
                src="../static/expressFinal.png"
                alt="Express Icon"
                style={{
                  width: "75px",
                  height: "75px",
                  marginTop: "2%",
                  paddingLeft: "2%"
                }}
              />
            ) : activeSkill.icon ===
              "img src='../static/knexjs.png' alt='Knex.js Icon'" ? (
              <img
                src="../static/knexjs.png"
                alt="Knex.js Icon"
                style={{
                  width: "60px",
                  height: "60px",
                  marginTop: "2%",
                  paddingLeft: "2%"
                }}
              />
            ) : activeSkill.icon === "DiMysql" ? (
              <DiMysql
                style={{
                  fontSize: "6rem",
                  color: "#00618A",
                  marginLeft: "14%"
                }}
              />
            ) : activeSkill.icon === "DiPostgresql" ? (
              <DiPostgresql
                style={{
                  fontSize: "6rem",
                  color: "#336791",
                  marginRight: "12%"
                }}
              />
            ) : activeSkill.icon === "Netlify" ? (
              <img
                src="../static/netlify.png"
                alt="Netlify Icon"
                style={{
                  width: "75px",
                  height: "75px",
                  marginTop: "2.25%",
                  paddingLeft: "2%"
                }}
              />
            ) : activeSkill.icon === "Heroku" ? (
              <img
                className="heroku"
                src="../static/herokuu.png"
                alt="Heroku Icon"
                style={{
                  width: "90px",
                  height: "90px",
                  marginTop: "1%",
                  paddingLeft: "2%"
                }}
              />
            ) : null}
          </div>
        </div>
        <p
          className="description"
          style={activeSkill.name === "Redux" ? { marginTop: "5%" } : null}
        >
          {activeSkill.description}
        </p>
        <div
          style={activeSkill.name === "Redux" ? { marginTop: "4.5%" } : null}
        >
          {activeSkill && (
            <p className="date">
              <span>Date Learned:</span> {activeSkill.date_learned}
            </p>
          )}
        </div>
      </div>
      <style jsx>{`
        .container {
          // color: #b7b5b3;
          // font-size: 2.5rem;
          // margin-top: 35px;
          // border: 1px solid red;
          font-family: "Raleway", sans-serif;

          -webkit-user-select: none; /* Webkit */
          -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* IE 10  */
          -o-user-select: none;
          user-select: none;
        }
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .titles {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
        }
        .date {
          margin-top: 4%;
        }
        .description {
          line-height: 1.25;
        }
        h2 {
          font-size: 3rem;
          color: #000c1f;
        }
        h4 {
          font-size: 1rem;
        }
        p {
          color: #000c1f;
          margin: 2% 0;
        }
        span {
          font-weight: bold;
        }
      `}</style>
    </div>
  );

  function newFunction() {
    return "img src='../static/expressFinal.png' alt='Express Icon'";
  }
}
