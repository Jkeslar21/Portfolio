import React from 'react'
import { DiReact, DiJavascript1, DiBootstrap, DiSass, DiLess, DiCss3, DiHtml5, DiGithubBadge, DiGit, DiNodejsSmall, DiMysql, DiPostgresql } from "react-icons/di";

export default function BootstrapCard() {
    return (
        <div>
            <DiBootstrap style={{ fontSize: '6rem', color: '#5B4282'}} />
            <h2>Bootstrap</h2>
            <h4>Front-end Framework</h4>
            <p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.</p>
            <p><span>Date Learned:</span> January 2019</p>
        </div>
    )
}
