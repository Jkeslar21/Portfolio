import React from 'react'
import { DiReact, DiJavascript1, DiBootstrap, DiSass, DiLess, DiCss3, DiHtml5, DiGithubBadge, DiGit, DiNodejsSmall, DiMysql, DiPostgresql } from "react-icons/di";

export default function ReduxCard() {
    return (
        <div>
            <img src='../static/redux.png' alt='Redux Icon' style={{ width: '75px', maxHeight: '70px', margin: '1%' }} />
            <h2>Redux</h2>
            <h4>JavaScript Library</h4>
            <p>Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.</p>
            <p><span>Date Learned:</span> February 2019</p>
        </div>
    )
}
