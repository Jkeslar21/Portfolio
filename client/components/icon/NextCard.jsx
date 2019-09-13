import React from 'react'
import { DiReact, DiJavascript1, DiBootstrap, DiSass, DiLess, DiCss3, DiHtml5, DiGithubBadge, DiGit, DiNodejsSmall, DiMysql, DiPostgresql } from "react-icons/di";

export default function NextCard() {
    return (
        <div>
            <img src='../static/next-text.png' alt='Next Icon' style={{ width: '75px', maxHeight: '75px', marginLeft: '1%' }} />
            <h2>Next.js</h2>
            <h4>Web Framework</h4>
            <p>Next.js is a free and open source web application framework based on React.js, Node.js, Webpack and Babel.js. The framework is advertised as "meta-framework for universal applications".</p>
            <p><span>Date Learned:</span> August 2019</p>
        </div>
    )
}
