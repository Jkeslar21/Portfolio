import React from 'react'
import { DiReact, DiJavascript1, DiBootstrap, DiSass, DiLess, DiCss3, DiHtml5, DiGithubBadge, DiGit, DiNodejsSmall, DiMysql, DiPostgresql } from "react-icons/di";

export default function GitHubCard() {
    return (
        <div>
            <DiGithubBadge style={{ fontSize: '6rem', color: '#181616'}} />
            <h2>GitHub</h2>
            <h4>Software Developer</h4>
            <p>GitHub is an American company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for $7.5 billion.</p>
            <p><span>Date Learned:</span> January 2019</p>
        </div>
    )
}
