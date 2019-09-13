import React from 'react'
import { DiReact, DiJavascript1, DiBootstrap, DiSass, DiLess, DiCss3, DiHtml5, DiGithubBadge, DiGit, DiNodejsSmall, DiMysql, DiPostgresql } from "react-icons/di";

export default function LessCard() {
    return (
        <div>
            <DiLess style={{ fontSize: '6rem', color: '#2A4D80'}} />
            <h2>Less</h2>
            <h4>Programming Language</h4>
            <p>Less is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets and run on the client side or server side. Designed by Alexis Sellier, Less is influenced by Sass and has influenced the newer "SCSS" syntax of Sass, which adapted its CSS-like block formatting syntax.</p>
            <p><span>Date Learned:</span> January 2019</p>
        </div>
    )
}
