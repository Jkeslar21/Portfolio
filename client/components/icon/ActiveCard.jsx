import React from 'react'
import { DiReact, DiJavascript1, DiBootstrap, DiSass, DiLess, DiCss3, DiHtml5, DiGithubBadge, DiGit, DiNodejsSmall, DiMysql, DiPostgresql } from "react-icons/di";

export default function ActiveCard({ activeSkill }) {
    return (
        <div>
            <div className="header">
                <div className="icon">
                {activeSkill.icon === "DiGit" ? <DiGit style={{ fontSize: '6rem', color: '#F34F29'}} /> :
                activeSkill.icon === "GiGithubBadge" ? <DiGithubBadge style={{ fontSize: '6rem', color: '#181616'}} /> :
                activeSkill.icon === "DiHtml5" ? <DiHtml5 style={{ fontSize: '6rem', color: '#E54D26'}} /> :
                activeSkill.icon === "DiCss3" ? <DiCss3 style={{ fontSize: '6rem', color: '#3D8FC6'}} /> :
                activeSkill.icon === "DiLess" ? <DiLess style={{ fontSize: '6rem', color: '#2A4D80'}} /> :
                activeSkill.icon === "DiSass" ? <DiSass style={{ fontSize: '6rem', color: '#CC6699'}} /> :
                activeSkill.icon === "DiBootstrap" ? <DiBootstrap style={{ fontSize: '6rem', color: '#5B4282'}} /> :
                activeSkill.icon === "DiJavascript1" ? <DiJavascript1 style={{ fontSize: '6rem', color: '#F0DB4F'}} /> :
                activeSkill.icon === "DiReact" ? <DiReact style={{ fontSize: '6rem', color: '#61DAFB'}} /> :
                activeSkill.icon === "img src='../static/redux.png' alt='Redux Icon'" ? <img src='../static/redux.png' alt='Redux Icon' style={{ width: '75px', maxHeight: '70px', margin: '1%' }} /> :
                activeSkill.icon === "img src='../static/next-text.png' alt='Next Icon'" ? <img src='../static/next-text.png' alt='Next Icon' style={{ width: '75px', maxHeight: '75px', marginRight: '5%' }} /> :
                null
                }
                </div>
                <h2>{activeSkill.name}</h2>
                <h4>{activeSkill.subtitle}</h4>
            </div>
            <p>{activeSkill.description}</p>
            <>{activeSkill && <p><span>Date Learned:</span> {activeSkill.date_learned}</p>}</>
        </div>
    )
}
