import React from 'react'
import { DiReact, DiJavascript1, DiBootstrap, DiSass, DiLess, DiCss3, DiHtml5, DiGithubBadge, DiGit, DiNodejsSmall, DiMysql, DiPostgresql } from "react-icons/di";

export default function GitCard() {
    return (
        <div>
            <DiGit style={{ fontSize: '6rem', color: '#F34F29'}} />
            <h2>Git</h2>
            <h4>System Software</h4>
            <p>Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.</p>
            <p><span>Date Learned:</span> January 2019</p>
        </div>
    )
}
