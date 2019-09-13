import React from 'react'
import { DiReact, DiJavascript1, DiBootstrap, DiSass, DiLess, DiCss3, DiHtml5, DiGithubBadge, DiGit, DiNodejsSmall, DiMysql, DiPostgresql } from "react-icons/di";

export default function SassCard() {
    return (
        <div>
            <DiSass style={{ fontSize: '6rem', color: '#CC6699'}} />
            <h2>Sass</h2>
            <h4>Programming Language</h4>
            <p>Sass is a style sheet language initially designed by Hampton Catlin and developed by Natalie Weizenbaum. After its initial versions, Weizenbaum and Chris Eppstein have continued to extend Sass with SassScript, a simple scripting language used in Sass files.</p>
            <p><span>Date Learned:</span> January 2019</p>
        </div>
    )
}
