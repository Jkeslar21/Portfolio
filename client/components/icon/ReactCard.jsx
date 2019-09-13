import React from 'react'
import { DiReact, DiJavascript1, DiBootstrap, DiSass, DiLess, DiCss3, DiHtml5, DiGithubBadge, DiGit, DiNodejsSmall, DiMysql, DiPostgresql } from "react-icons/di";

export default function ReactCard() {
    return (
        <div>
            <DiReact style={{ fontSize: '6rem', color: '#61DAFB'}} />
            <h2>React.js</h2>
            <h4>Web Framework</h4>
            <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.</p>
            <p><span>Date Learned:</span> February 2019</p>
        </div>
    )
}
