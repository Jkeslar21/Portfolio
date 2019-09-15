import React, { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import Transition from '../components/Transition'
import { TiArrowUpThick } from "react-icons/ti";
import ScrollAnimation from 'react-animate-on-scroll';
import ReactCardFlip from 'react-card-flip';
import { DiReact, DiJavascript1, DiBootstrap, DiSass, DiLess, DiCss3, DiHtml5, DiGithubBadge, DiGit, DiNodejsSmall, DiMysql, DiPostgresql } from "react-icons/di";
import { FaChartLine, FaGlobeAmericas } from "react-icons/fa";
import { MdPhonelink, MdLightbulbOutline } from "react-icons/md";
import ActiveCard from './icon/ActiveCard'

export default function Section({title, id, image, classNameProp, dark, skills, portfolio, resume, contact}) {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isFlipped2, setIsFlipped2] = useState(false)
    const [isFlipped3, setIsFlipped3] = useState(false)
    const [backend, setBackend] = useState(false)
    const [frontend, setFrontend] = useState(false)
    const [devops, setDevops] = useState(false)

    // Icon Selectors
    // const [git, setGit] = useState(false)
    // const [gitHub, setGitHub] = useState(false)
    // const [html5, setHtml5] = useState(false)
    // const [css3, setCss3] = useState(false)
    // const [less, setLess] = useState(false)
    // const [sass, setSass] = useState(false)
    // const [bootstrap, setBootstrap] = useState(false)
    // const [javaScript, setJavaScript] = useState(false)
    // const [react, setReact] = useState(false)
    // const [redux, setRedux] = useState(false)
    // const [next, setNext] = useState(false)
    // const [node, setNode] = useState(false)
    // const [express, setExpress] = useState(false)
    // const [mySQL, setMySQL] = useState(false)
    // const [postgres, setPostgres] = useState(false)

    const [activeSkill, setActiveSkill] = useState(null)

    // const scrollToTop = () => {
    //     scroll.scrollToTop()
    // }

    const clickMeFront = () => {
        setFrontend(true)
        setIsFlipped(true)
    }
    const clickMeFrontBack = () => {
        setFrontend(false)
        setIsFlipped(false)
        setActiveSkill(null)
    }
    const clickMeBack = () => {
        setBackend(true)
        setIsFlipped2(true)
    }
    const clickMeBackFront = () => {
        setBackend(false)
        setIsFlipped2(false)
        setActiveSkill(null)
    }
    const clickMeDev = () => {
        setDevops(true)
        setIsFlipped3(true)
    }
    const clickMeDevBack = () => {
        setDevops(false)
        setIsFlipped3(false)
        setActiveSkill(null)
    }
    const scrollToTop = () => {
        scroll.scrollToTop()
    }
        
    return (
        <>
            <div className={classNameProp}>
            {/* <div className={"section" + (dark ? " section-dark" : "")}> */}
        <div className="section-content" id={id}>
            <ScrollAnimation animateIn='fadeIn' duration={2}>
    
                {skills ? <h2 className='title-center'><span className={dark ? 'title-dark title-skills' : 'title title-skills'}>{title}</span></h2> : <h2 className='title-center'><span className={dark ? 'title-dark' : 'title'}>{title}</span></h2>}

            </ScrollAnimation>

                       {/* Dynamic Sections */}

            {skills &&
            <>
            <ScrollAnimation animateIn='fadeIn' duration={2}>
            <div className='images-modal'>
                <div className='images'>
                    <div className='frontend'>
                        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' >
                                <img  className={'sunflower'} src='../static/treeFINAL.png' alt='Tree Canopy Image' key={frontend ? null : 'front'} onClick={clickMeFront} />

                                {/* <h2 key='front' style={{ color: 'pink', zIndex: 80}}>Front End</h2> */}

                        <div className={'view canopy-view'} key='back'>
                        <div className='card-back card-back-canopy '>
                            <div className='x opacity'><p className='close-button' onClick={clickMeFrontBack}>X</p></div>
                            <h3 className="skills-title opacity">Front End</h3>
                                <div className='card-icons opacity'>

                                    {icons.frontend.map(icon => <>
                                    
                                    {icon.icon === "DiGit" ? <DiGit style={{ fontSize: '6rem', color: '#F34F29'}} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "DiGithubBadge" ? <DiGithubBadge style={{ fontSize: '6rem', color: '#181616'}}  onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "DiHtml5" ? <DiHtml5 style={{ fontSize: '6rem', color: '#E54D26'}} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "DiCss3" ? <DiCss3 style={{ fontSize: '6rem', color: '#3D8FC6'}} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "DiLess" ? <DiLess style={{ fontSize: '6rem', color: '#2A4D80'}} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "DiSass" ? <DiSass style={{ fontSize: '6rem', color: '#CC6699'}} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "DiBootstrap" ? <DiBootstrap style={{ fontSize: '6rem', color: '#5B4282'}} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "DiJavascript1" ? <DiJavascript1 style={{ fontSize: '6rem', color: '#F0DB4F'}} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "DiReact" ? <DiReact style={{ fontSize: '6rem', color: '#61DAFB'}} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "img src='../static/redux.png' alt='Redux Icon'" ? <img src='../static/redux.png' alt='Redux Icon' style={{ width: '75px', maxHeight: '70px', margin: '1%' }} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "img src='../static/next-text.png' alt='Next Icon'" ? <img src='../static/next-text.png' alt='Next Icon' style={{ width: '75px', maxHeight: '75px', marginRight: '5%' }} onClick={()=> setActiveSkill(icon)} />  :
                                null
                                }
                                    </>)}

                                </div>
                        </div>
                        </div>
                        </ReactCardFlip>                 
                    </div>

                    <div className='devOps'>
                        <ReactCardFlip isFlipped={isFlipped3} flipDirection='horizontal' >
                        <img  className={'devops'} src='../static/devops.png' alt='Tree Canopy Image' key={devops ? null : 'front'} onClick={clickMeDev} />
                        <div className={'view dev-view'} key='back'>
                        <div className='card-back-dev card-back-devops'>
                            
                            <div className='dev-header'>
                                <h3 className="skills-title-dev">DevOps</h3>
                                <div className='x'><p className='close-button-dev' onClick={clickMeDevBack}>X</p></div>
                            </div>
                                
                                <div className='card-icons-dev'>

                                    {icons.devops.map(icon => <>
                                    
                                    {icon.icon === "DiGit" ? <DiGit style={{ fontSize: '6rem', color: '#F34F29'}} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "DiGithubBadge" ? <DiGithubBadge style={{ fontSize: '6rem', color: '#181616'}}  onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "Netlify" ? <img src='../static/netlify.png' alt='Netlify Icon' style={{ width: '75px', height: '75px', marginTop: '2.25%', paddingLeft: '2%' }} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "Heroku" ? <img className='heroku' src='../static/herokuu.png' alt='Heroku Icon' style={{ width: '90px', height: '90px', marginTop: '1%', paddingLeft: '2%'}} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                null
                                }
                                    </>)}

                                </div>
                        </div>
                        </div>
                        </ReactCardFlip>                 
                    </div>

                    <div className='backend'>
                        <ReactCardFlip isFlipped={isFlipped2} flipDirection='horizontal' >
                            <img className='roots' src='../static/roots.png' alt='Roots Image' key={backend ? null : 'front'} onClick={clickMeBack} />
                            <div className={'view roots-view'} key='back'>
                            <div className='card-back card-back-roots'>
                            <div className='x'><p className='close-button' onClick={clickMeBackFront}>X</p></div>
                                <h3 className='skills-title'>Back End</h3>
                                    <div className='card-icons'>

                                    {icons.backend.map(icon => <>
                                    {icon.icon === "DiGit" ? <DiGit style={{ fontSize: '6rem', color: '#F34F29'}} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "DiGithubBadge" ? <DiGithubBadge style={{ fontSize: '6rem', color: '#181616'}}  onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "iNodejsSmall" ? <DiNodejsSmall style={{ fontSize: '6rem', color: '#83CD29'}} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "img src='../static/expressFinal.png' alt='Express Icon'" ? <img src='../static/expressFinal.png' alt='Express Icon' style={{ width: '75px', height: '75px', marginTop: '2%', paddingLeft: '2%' }} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "img src='../static/knexjs.png' alt='Knex.js Icon'" ? <img src='../static/knexjs.png' alt='Knex.js Icon' style={{ width: '75px', height: '75px', marginTop: '2%', paddingLeft: '2%' }} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "DiMysql" ? <DiMysql style={{ fontSize: '6rem', color: '#00618A', marginLeft: '14%'}} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                icon.icon === "DiPostgresql" ? <DiPostgresql style={{ fontSize: '6rem', color: '#336791', marginRight: '12%'}} onClick={()=> setActiveSkill(icon)} icon={icon} /> :
                                null
                                }
                                    </>)}
                                    </div>
                                </div>
                            </div>  
                        </ReactCardFlip>
                    </div>
                </div>
                <div className='modal'>
                <ScrollAnimation animateIn='fadeIn' duration={2}>
                     {frontend || backend ? <h6 className={activeSkill ? "icon-selected" : "select-icon"}>Select an Icon</h6> : <h6 className='select-image'>Select an Image</h6>}
                     {activeSkill && <ActiveCard activeSkill={activeSkill} /> }
                </ScrollAnimation>
                </div>
            </div>

            <div className='gauges'>

                {/* efficient */}
                <div className='gauge-styles'>
                    <div className='gauge'>
                        {/* <img src='../static/DarkBadge.png' width={175} /> */}
                        <FaChartLine style={{ color: '#E5E7E6', fontSize: '6rem' }} />
                    </div>
                    <h4 style={{ color: '#000c1f', fontWeight: 'bolder'}}>Efficient</h4>
                    <p  style={{ color: '#141301'}}>maximum productivity; well-organized</p>
                </div>

                {/* responsive */}
                <div className='gauge-styles'>
                    <div className='gauge'>
                        <MdPhonelink style={{ color: '#E5E7E6', fontSize: '6rem' }} />
                        
                    </div>
                    <h4 style={{ color: '#000c1f', fontWeight: 'bolder'}}>Responsive</h4>
                    <p style={{ color: '#141301'}}>optimized layouts for all devices</p>
                </div>

                {/* creative */}
                <div className='gauge-styles'>
                    <div className='gauge'>
                        <MdLightbulbOutline style={{ color: '#E5E7E6', fontSize: '6rem' }} />
                    </div>
                    <h4 style={{ color: '#000c1f', fontWeight: 'bolder'}}>Creative</h4>
                    <p style={{ color: '#141301'}}>highest quality solutions provided</p>
                </div>

                {/* dynamic */}
                <div className='gauge-styles dynamic'>
                    <div className='gauge'>
                        <FaGlobeAmericas style={{ color: '#E5E7E6', fontSize: '6rem' }}/>
                    </div>
                    <h4 style={{ color: '#000c1f', fontWeight: 'bolder'}}>Dynamic</h4>
                    <p style={{ color: '#141301'}}>reflects real-time changes in values with activity.  Built with DRY, reusable components. </p>
                </div>
            </div>
            </ScrollAnimation>
            </>}

            {portfolio &&
            <>
            <ScrollAnimation animateIn='fadeIn' duration={2}>
            <p className={dark ? null : 'light-text'}>PORTFOLIO CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus!
            Commodi magni voluptas nemo earum perferendis voluptatum odio dignissimos molestiae esse aut. Nam quae beatae magnam ea, voluptatibus minus enim vitae culpa, cum expedita fuga nesciunt nulla, ut similique corrupti?
            Cumque quis illo eius doloremque accusamus aliquid architecto! Pariatur provident cumque minima corporis maiores. Asperiores, debitis eveniet. Quaerat, porro tenetur quam ratione suscipit non voluptates cupiditate totam quis corrupti officiis!
            Aliquam dicta at molestias dignissimos, illum accusamus, vitae quaerat corrupti perferendis ad obcaecati hic culpa iusto tempora magni sit incidunt minima tempore atque ducimus neque quae. Nisi exercitationem provident blanditiis!
            Error autem officia tenetur soluta nulla illum, vero commodi recusandae, fuga nobis nam facere itaque harum officiis! Perferendis ipsam esse laboriosam neque enim quod sit. Consequuntur maiores soluta obcaecati aspernatur?
            Aspernatur, nihil officia! Expedita dolor nemo itaque ratione accusantium unde vel architecto quod accusamus, tenetur blanditiis esse libero laborum amet, fuga adipisci. Reiciendis laborum nam eaque non earum quis facere.
            Fugit accusamus aperiam labore quisquam aut. Dolor reiciendis aliquam quod fugit possimus earum neque, iusto ratione expedita? Reiciendis qui sapiente possimus nostrum saepe sit distinctio pariatur autem, commodi ipsa earum.
            Odit repellat in modi tempora! Quia quisquam repellendus sed quasi sit soluta sint magnam quae modi reiciendis pariatur nisi fuga culpa, sapiente vel tempora similique? Quos officiis possimus dignissimos adipisci.
            Eveniet explicabo voluptate eligendi doloremque et suscipit, rerum, officiis nesciunt sapiente ipsa magni numquam quam ab recusandae harum incidunt cumque error voluptatem temporibus quae modi, nulla ex? Ratione, modi consequuntur!
            Itaque expedita vel dolore exercitationem odio officia, eos fugiat obcaecati impedit adipisci sint recusandae consequuntur possimus consectetur sunt nisi repellat voluptates repellendus quisquam esse asperiores minus ea. Facilis, beatae optio.
            Corporis esse modi laborum dolorum, nisi autem pariatur mollitia. Illo, accusamus sed praesentium atque eos magni. Harum aut repellendus consequatur laborum, praesentium consequuntur voluptates doloremque provident nihil earum tempore est!
            Iusto porro ullam necessitatibus deleniti officia rerum id distinctio! Non, veritatis ipsa consectetur architecto illo placeat et error vel inventore? Mollitia deserunt minus voluptates praesentium animi. Rerum provident sunt quas!
            Laborum quibusdam iure totam explicabo culpa temporibus, optio voluptatem nemo at eos voluptas necessitatibus ducimus qui consequatur quam natus dolor ex, nam cumque. Modi optio autem adipisci illo, consectetur provident.
            Enim suscipit cumque amet blanditiis veritatis sed veniam earum consectetur neque minima quisquam deleniti culpa ut iure ipsa, necessitatibus distinctio recusandae commodi ullam! Laboriosam maxime suscipit hic incidunt tempora harum.
            Minus architecto veritatis ipsum in eos rem velit sequi? Illo corporis distinctio quisquam ipsa velit magnam, et maxime ad tempore soluta pariatur inventore voluptas illum totam rerum voluptatibus quia atque?
            Qui cupiditate ea molestias id quisquam nulla a! Ullam nulla molestiae accusantium animi optio in dolorum obcaecati, perferendis beatae dolores est culpa doloremque unde iusto nemo saepe neque repudiandae iste.
            Eveniet dolorum incidunt obcaecati ipsa vero error officiis doloremque distinctio, voluptas atque totam officia labore veritatis mollitia nostrum ut temporibus voluptates placeat soluta, unde hic corrupti natus pariatur quas. Amet!
            </p>
            </ScrollAnimation>
            </>}

            {resume &&
            <>
            <ScrollAnimation animateIn='fadeIn' duration={2}>
            <p className={dark ? null : 'light-text'}>RESUME CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus!
            Commodi magni voluptas nemo earum perferendis voluptatum odio dignissimos molestiae esse aut. Nam quae beatae magnam ea, voluptatibus minus enim vitae culpa, cum expedita fuga nesciunt nulla, ut similique corrupti?
            Cumque quis illo eius doloremque accusamus aliquid architecto! Pariatur provident cumque minima corporis maiores. Asperiores, debitis eveniet. Quaerat, porro tenetur quam ratione suscipit non voluptates cupiditate totam quis corrupti officiis!
            Aliquam dicta at molestias dignissimos, illum accusamus, vitae quaerat corrupti perferendis ad obcaecati hic culpa iusto tempora magni sit incidunt minima tempore atque ducimus neque quae. Nisi exercitationem provident blanditiis!
            Error autem officia tenetur soluta nulla illum, vero commodi recusandae, fuga nobis nam facere itaque harum officiis! Perferendis ipsam esse laboriosam neque enim quod sit. Consequuntur maiores soluta obcaecati aspernatur?
            Aspernatur, nihil officia! Expedita dolor nemo itaque ratione accusantium unde vel architecto quod accusamus, tenetur blanditiis esse libero laborum amet, fuga adipisci. Reiciendis laborum nam eaque non earum quis facere.
            Fugit accusamus aperiam labore quisquam aut. Dolor reiciendis aliquam quod fugit possimus earum neque, iusto ratione expedita? Reiciendis qui sapiente possimus nostrum saepe sit distinctio pariatur autem, commodi ipsa earum.
            Odit repellat in modi tempora! Quia quisquam repellendus sed quasi sit soluta sint magnam quae modi reiciendis pariatur nisi fuga culpa, sapiente vel tempora similique? Quos officiis possimus dignissimos adipisci.
            Eveniet explicabo voluptate eligendi doloremque et suscipit, rerum, officiis nesciunt sapiente ipsa magni numquam quam ab recusandae harum incidunt cumque error voluptatem temporibus quae modi, nulla ex? Ratione, modi consequuntur!
            Itaque expedita vel dolore exercitationem odio officia, eos fugiat obcaecati impedit adipisci sint recusandae consequuntur possimus consectetur sunt nisi repellat voluptates repellendus quisquam esse asperiores minus ea. Facilis, beatae optio.
            Corporis esse modi laborum dolorum, nisi autem pariatur mollitia. Illo, accusamus sed praesentium atque eos magni. Harum aut repellendus consequatur laborum, praesentium consequuntur voluptates doloremque provident nihil earum tempore est!
            Iusto porro ullam necessitatibus deleniti officia rerum id distinctio! Non, veritatis ipsa consectetur architecto illo placeat et error vel inventore? Mollitia deserunt minus voluptates praesentium animi. Rerum provident sunt quas!
            Laborum quibusdam iure totam explicabo culpa temporibus, optio voluptatem nemo at eos voluptas necessitatibus ducimus qui consequatur quam natus dolor ex, nam cumque. Modi optio autem adipisci illo, consectetur provident.
            Enim suscipit cumque amet blanditiis veritatis sed veniam earum consectetur neque minima quisquam deleniti culpa ut iure ipsa, necessitatibus distinctio recusandae commodi ullam! Laboriosam maxime suscipit hic incidunt tempora harum.
            Minus architecto veritatis ipsum in eos rem velit sequi? Illo corporis distinctio quisquam ipsa velit magnam, et maxime ad tempore soluta pariatur inventore voluptas illum totam rerum voluptatibus quia atque?
            Qui cupiditate ea molestias id quisquam nulla a! Ullam nulla molestiae accusantium animi optio in dolorum obcaecati, perferendis beatae dolores est culpa doloremque unde iusto nemo saepe neque repudiandae iste.
            Eveniet dolorum incidunt obcaecati ipsa vero error officiis doloremque distinctio, voluptas atque totam officia labore veritatis mollitia nostrum ut temporibus voluptates placeat soluta, unde hic corrupti natus pariatur quas. Amet!
            </p>
            </ScrollAnimation>
            </>}

            {contact &&
            <>
            <ScrollAnimation animateIn='fadeIn' duration={2}>
            <p className={dark ? null : 'light-text'}>CONTACT CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus!
            Commodi magni voluptas nemo earum perferendis voluptatum odio dignissimos molestiae esse aut. Nam quae beatae magnam ea, voluptatibus minus enim vitae culpa, cum expedita fuga nesciunt nulla, ut similique corrupti?
            Cumque quis illo eius doloremque accusamus aliquid architecto! Pariatur provident cumque minima corporis maiores. Asperiores, debitis eveniet. Quaerat, porro tenetur quam ratione suscipit non voluptates cupiditate totam quis corrupti officiis!
            Aliquam dicta at molestias dignissimos, illum accusamus, vitae quaerat corrupti perferendis ad obcaecati hic culpa iusto tempora magni sit incidunt minima tempore atque ducimus neque quae. Nisi exercitationem provident blanditiis!
            Error autem officia tenetur soluta nulla illum, vero commodi recusandae, fuga nobis nam facere itaque harum officiis! Perferendis ipsam esse laboriosam neque enim quod sit. Consequuntur maiores soluta obcaecati aspernatur?
            Aspernatur, nihil officia! Expedita dolor nemo itaque ratione accusantium unde vel architecto quod accusamus, tenetur blanditiis esse libero laborum amet, fuga adipisci. Reiciendis laborum nam eaque non earum quis facere.
            Fugit accusamus aperiam labore quisquam aut. Dolor reiciendis aliquam quod fugit possimus earum neque, iusto ratione expedita? Reiciendis qui sapiente possimus nostrum saepe sit distinctio pariatur autem, commodi ipsa earum.
            Odit repellat in modi tempora! Quia quisquam repellendus sed quasi sit soluta sint magnam quae modi reiciendis pariatur nisi fuga culpa, sapiente vel tempora similique? Quos officiis possimus dignissimos adipisci.
            Eveniet explicabo voluptate eligendi doloremque et suscipit, rerum, officiis nesciunt sapiente ipsa magni numquam quam ab recusandae harum incidunt cumque error voluptatem temporibus quae modi, nulla ex? Ratione, modi consequuntur!
            Itaque expedita vel dolore exercitationem odio officia, eos fugiat obcaecati impedit adipisci sint recusandae consequuntur possimus consectetur sunt nisi repellat voluptates repellendus quisquam esse asperiores minus ea. Facilis, beatae optio.
            Corporis esse modi laborum dolorum, nisi autem pariatur mollitia. Illo, accusamus sed praesentium atque eos magni. Harum aut repellendus consequatur laborum, praesentium consequuntur voluptates doloremque provident nihil earum tempore est!
            Iusto porro ullam necessitatibus deleniti officia rerum id distinctio! Non, veritatis ipsa consectetur architecto illo placeat et error vel inventore? Mollitia deserunt minus voluptates praesentium animi. Rerum provident sunt quas!
            Laborum quibusdam iure totam explicabo culpa temporibus, optio voluptatem nemo at eos voluptas necessitatibus ducimus qui consequatur quam natus dolor ex, nam cumque. Modi optio autem adipisci illo, consectetur provident.
            Enim suscipit cumque amet blanditiis veritatis sed veniam earum consectetur neque minima quisquam deleniti culpa ut iure ipsa, necessitatibus distinctio recusandae commodi ullam! Laboriosam maxime suscipit hic incidunt tempora harum.
            Minus architecto veritatis ipsum in eos rem velit sequi? Illo corporis distinctio quisquam ipsa velit magnam, et maxime ad tempore soluta pariatur inventore voluptas illum totam rerum voluptatibus quia atque?
            Qui cupiditate ea molestias id quisquam nulla a! Ullam nulla molestiae accusantium animi optio in dolorum obcaecati, perferendis beatae dolores est culpa doloremque unde iusto nemo saepe neque repudiandae iste.
            Eveniet dolorum incidunt obcaecati ipsa vero error officiis doloremque distinctio, voluptas atque totam officia labore veritatis mollitia nostrum ut temporibus voluptates placeat soluta, unde hic corrupti natus pariatur quas. Amet!
            </p>
            </ScrollAnimation>
            <h5 onClick={scrollToTop} className={'arrow-up-icon-dark'}><TiArrowUpThick /></h5>
            </>}

        </div>
        <Transition image={image} dark={dark} contact={contact} />
        </div>
        <style jsx>{`
                .light {
                    background-color: #e5e7e6;
                    margin-top: -5px;
                    font-family: 'Raleway', sans-serif;


                    -webkit-user-select: none; /* Webkit */
                    -moz-user-select: none;    /* Firefox */
                    -ms-user-select: none;     /* IE 10  */
                    -o-user-select: none;
                    user-select: none;          
                }
                .dark {
                    background-color: #000c1f;
                    margin-top: -5px;
                    color: #e5e7e6;
                    font-family: 'Raleway', sans-serif;

                    -webkit-user-select: none; /* Webkit */
                    -moz-user-select: none;    /* Firefox */
                    -ms-user-select: none;     /* IE 10  */
                    -o-user-select: none;
                    user-select: none;   
                }
                .images {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    // justify-content: space-around;
                    padding: 1%;
                    padding-top: 2%;
                }

                .sunflower, .roots, .devops {
                    // max-width: 600px;
                    max-width: 100%;
                    filter: grayscale(100%);
                    animation: colorFadeOut 2s, shapeShiftOut 2s;
                    border-radius: 50%;
                    // border: 3px solid #141301
                    -webkit-box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                    -moz-box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                    box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                }
                
                .sunflower:hover, .roots:hover, .devops:hover {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                    animation: colorFadeIn 2s, shapeShiftIn 2s;
                    filter: grayscale(0%);
                    border-radius: 12px;
                    // border: 3px solid #b80c09
                    -webkit-box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                    -moz-box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                    box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                }
                .skills-card {
                    width: 33%;
                    height: 420px;
                    // border: 2px solid purple;
                    
                }
                .frontend, .backend {
                    max-width: 100%;
                    // width: 450px;
                    // height: 450px;
                    // margin-top: 1%;
                    // border: 1px solid red;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .titles {
                    display: flex;
                    justify-content: space-around;
                    border: 1px solid red;
                    // align-items: flex-end;
                    padding: 2%
                }
                .skills-title {
                    font-size: 2.1rem;
                    margin-bottom: 5%;
                    margin-top: -20%;
                    // font-style: oblique;
                }
                .skills-title:hover {
                    cursor: pointer;

                }
                .view {
                    // animation: fadeIn 1s;
                    opacity: 1;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    justify-content: space-between;
                    max-width: 100%;
                    background: #fbfbf8;
                    border-radius: 12px;
                    padding: 2%;
                    // margin: 1% 0;
                    cursor: pointer;
                    -webkit-box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                    -moz-box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                    box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                    // width: 420px;
                    // height: 420px;
                }
                .canopy-view {
                    width: 680px;
                    height: 350px;
                }
                .dev-view {
                    width: 680px;
                    height: 75px;
                }
                .roots-view {
                    width: 670px;
                    height: 350px;
                }
                .card-back {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    // width: 450px;
                    // height: 450px;
                    max-width: 100%;
                    max-height: 100%;
                }
                .card-back-canopy {
                    // display: flex;
                    // flex-direction: column;
                    // justify-content: center;
                    // align-items: center;
                    // width: 450px;
                    // height: 450px;
                    max-width: 100%;
                    max-height: 100%;
                    background-image: URL('../static/canopyTransparent.png');
                    // color: #fbfbf8;
                    // color: #e5e7e6;
                    color: black;

                }
                .card-back-devops {
                    background-image: URL('../static/devopsTransparent.png');
                    color: #e5e7e6;
                    max-width: 100%;
                    max-height: 100%;
                    width: 680px;
                    height: 75px;
                }
                .card-back-roots {
                    background-image: URL('../static/rootsTransparent.png');
                    color: #e5e7e6;
                    max-width: 100%;
                    max-height: 100%;
                    width: 670px;
                    height: 350px;
                }
                .card-icons {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    // width: 100%;
                    max-width: 100%;
                    // max-height: 400px;

                }
                .card-icons-dev {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    max-width: 100%;
                    margin: -6% 5%;
                }
                .dev-header {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 2%;

                }
                .skills-title-dev {
                    color: red;
                }
                .close-button-dev {
                    color: red;
                    margin: none;
                    padding: none;
                }
                h2 {
                    font-size: 4rem;
                    padding-top: 2%;
                    padding-bottom: 2%;
                    letter-spacing: 2px;
                    padding-left: 2%;
                }
                
                p {
                    padding-left: 2%;
                    line-height: 1.8;
                    padding-top: 2%;
                }
                .title-center {
                    display: flex;
                    justify-content: center;
                }
                .title {
                    color: #000c1f;
                    margin-right: 2%;
                    margin-top: 6%;
                }
                .title-dark {
                    margin-right: 2%;
                    color: #E5E7E6;
                    margin-top: 6%;
                }
                .arrow-up-icon-dark {
                    display: flex;
                    justify-content: center;
                    color: #e5e7e6;
                    font-size: 4rem ;
                    position: relative;
                    top: 300px;
                }
                .arrow-up-icon-dark:hover {
                    cursor: pointer;
                }
                // .arrow-up-icon {
                //     color: #000c1f;
                //     margin-left: 49%;
                //     margin-top: 10%;
                //     font-size: 2.5rem;
                // }
                @keyframes colorFadeIn {
                    from {
                        filter: grayscale(100%);
                    }
                    to {
                        filter: grayscale(0%)
                    }
                }
                @keyframes colorFadeOut {
                    from {
                        filter: grayscale(0%);
                    }
                    to {
                        filter: grayscale(100%)
                    }
                }
                @keyframes shapeShiftIn {
                    from {
                        border-radius: 50%;
                    }
                    to {
                        border-radius: 12px;
                    }
                }
                @keyframes shapeShiftOut {
                    from {
                        border-radius: 12px;
                    }
                    to {
                        border-radius: 50%;
                    }
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                @keyframes fadeOut {
                    from {
                        opacity: 1;
                    }
                    to {
                        opacity: 0;
                    }
                }
                // @keyframes circleIn {
                //     from {
                //         max-width: 498px;
                //         max-height: 498px;
                //     }
                //     to {
                //         max-width: 100%;
                //         max-height: 100%;
                //     }
                // }
                // @keyframes circleOut {
                //     from {
                //         max-width: 100%;
                //         max-height: 100%;
                //     }
                //     to {
                //         max-width: 498px;
                //         max-height: 498px;
                //     }
                // }
                .animate {
                    opacity: 1;
                }
                .gauges {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    width: 100%;
                    justify-content: space-around;
                    align-items: center;
                    margin-top: 5%;
                }
                .gauge-styles {
                    display: flex;
                    justify-content: space-around;
                    flex-direction: column;
                    max-width: 200px;
                    // align-items: center;
                }
                .gauge {
                    background-image: url('../static/DarkBlueBadge.png');
                    background-size: cover;
                    max-width: 100%;
                    width: 200px;
                    height: 175px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .dynamic {
                    margin-top: 55px;
                }
                .light-text {
                    color: #000c1f;
                }
                .title-skills {
                    margin-top: 1%;
                }
                .section-content {
                    margin-bottom: 2%;
                }
                .modal {
                    width: 450px;
                    max-height: 270px;
                    margin-top: 17%;
                    max-width: 100%;
                    // background: #fbfbf8;
                    border-radius: 12px;
                    padding: 2%;
                    // -webkit-box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                    // -moz-box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                    // box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                }
                .images-modal {
                    display: flex;
                    justify-content: space-evenly;
                }
                // .x {
                //     display: flex;
                //     width: 100%;
                //     justify-content: flex-end;
                // }
                .close-button {
                    margin-right: 10%;
                    margin-bottom: 20%;
                    font-size: 1.5rem;
                    font-weight: bolder;
                }
                .icon-selected {
                    display: none;
                }
                .select-icon {
                    text-align: center;
                    vertical-align: center;
                    margin-top: 25%;
                    font-size: 2rem;
                    color: #000c1f;
                    animation: fadeIn 2s;
                }
                .select-image {
                    text-align: center;
                    vertical-align: center;
                    margin-top: 25%;
                    font-size: 2rem;
                    color: #000c1f;
                    animation: fadeIn 2s;
                }
                .selector:hover {
                    border: 2px solid #1f2a44;
                    border-radius: 12px;
                    box-sizing: border-box;
                }                
      `}</style>
    </>
    )
}

const icons = {
    "frontend": [
        // {
        //     "icon": "DiGit",
        //     "name": "Git",
        //     "subtitle": "System Software",
        //     "description": "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
        //     "date_learned": "January 2019"
        // },
        // {
        //     "icon": "DiGithubBadge",
        //     "name": "GitHub",
        //     "subtitle": "Software Developer",
        //     "description": "GitHub is an American company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for $7.5 billion.",
        //     "date_learned": "January 2019"
        // },
        {
            "icon": "DiHtml5",
            "name": "HTML5",
            "subtitle": "Programming Language",
            "description": "HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup based pattern to it. HTML5 is the fifth and current major version of HTML, and subsumes XHTML.",
            "date_learned": "January 2019"
        },
        {
            "icon": "DiCss3",
            "name": "CSS3",
            "subtitle": "Programming Language",
            "description": "CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.",
            "date_learned": "January 2019"
        },
        {
            "icon": "DiLess",
            "name": "Less",
            "subtitle": "Programming Language",
            "description": "Less is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets and run on the client side or server side. Designed by Alexis Sellier, Less is influenced by Sass and has influenced the newer \"SCSS\" syntax of Sass, which adapted its CSS-like block formatting syntax.",
            "date_learned": "January 2019"
        },
        {
            "icon": "DiSass",
            "name": "Sass",
            "subtitle": "Programming Language",
            "description": "Sass is a style sheet language initially designed by Hampton Catlin and developed by Natalie Weizenbaum. After its initial versions, Weizenbaum and Chris Eppstein have continued to extend Sass with SassScript, a simple scripting language used in Sass files. ",
            "date_learned": "January 2019"
        },
        {
            "icon": "DiBootstrap",
            "name": "Bootstrap",
            "subtitle": "Front-end Framework",
            "description": "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.",
            "date_learned": "January 2019"
        },
        {
            "icon": "DiJavascript1",
            "name": "JavaScript",
            "subtitle": "High-level Programming Language",
            "description": "JavaScript, often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
            "date_learned": "January 2019"
        },
        {
            "icon": "DiReact",
            "name": "React.js",
            "subtitle": "Web Framework",
            "description": "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.",
            "date_learned": "February 2019"
        },
        {
            "icon": "img src='../static/redux.png' alt='Redux Icon'",
            "name": "Redux",
            "subtitle": "JavaScript Library",
            "description": "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
            "date_learned": "February 2019"
        },
        {
            "icon": "img src='../static/next-text.png' alt='Next Icon'",
            "name": "Next.js",
            "subtitle": "Web Framework",
            "description": "Next.js is a free and open source web application framework based on React.js, Node.js, Webpack and Babel.js. The framework is advertised as \"meta-framework for universal applications\".",
            "date_learned": "August 2019"
        }
    ],
    "devops": [
        {
            "icon": "DiGit",
            "name": "Git",
            "subtitle": "System Software",
            "description": "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
            "date_learned": "January 2019"
        },
        {
            "icon": "DiGithubBadge",
            "name": "GitHub",
            "subtitle": "Software Developer",
            "description": "GitHub is an American company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for $7.5 billion.",
            "date_learned": "January 2019"
        },
        {
            "icon": "Netlify",
            "name": "Netlify",
            "subtitle": "Platform",
            "description": "Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for static websites. It features continuous deployment from Git across a global application delivery network, serverless form handling, support for AWS Lambda functions, and full integration with Let's Encrypt.",
            "date_learned": "February 2019"
        },
        {
            "icon": "Heroku",
            "name": "Heroku",
            "subtitle": "Platform",
            "description": "Heroku is a cloud platform as a service supporting several programming languages. One of the first cloud platforms, Heroku has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go.",
            "date_learned": "March 2019"
        }
    ],
    "backend": [
        // {
        //     "icon": "DiGit",
        //     "styles": { "fontSize": "6rem", "color": "#F34F29"},
        //     "name": "Git",
        //     "subtitle": "System Software",
        //     "description": "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
        //     "date_learned": "January 2019"
        // },
        // {
        //     "icon": "DiGithubBadge",
        //     "styles": "gitHubStyles",
        //     "name": "GitHub",
        //     "subtitle": "Software Developer",
        //     "description": "GitHub is an American company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for $7.5 billion.",
        //     "date_learned": "January 2019"
        // },
        {
            "icon": "iNodejsSmall",
            "styles": "nodeStyles",
            "name": "Node.js",
            "subtitle": "JavaScript Run-time Environment",
            "description": "Node.js is an open-source, cross-platform, JavaScript run-time environment that executes JavaScript code outside of a browser.",
            "date_learned": "March 2019"
        },
        {
            "icon": "img src='../static/expressFinal.png' alt='Express Icon'",
            "styles": "expressStyles",
            "name": "Express.js",
            "subtitle": "Web Framework",
            "description": "Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
            "date_learned": "March 2019"
        },
        {
            "icon": "img src='../static/knexjs.png' alt='Knex.js Icon'",
            "name": "Knex.js",
            "subtitle": "JavaScript Query Builder",
            "description": " Knex.js is a JavaScript query builder for relational databases including PostgreSQL, MySQL, SQLite3, and Oracle. It can be used with callbacks and promises. It supports transactions and connection pooling.",
            "date_learned": "March 2019"
        },
        {
            "icon": "DiMysql",
            "styles": "mySqlStyles",
            "name": "MySQL",
            "subtitle": "System Software",
            "description": "MySQL is an open-source relational database management system. Its name is a combination of \"My\", the name of co-founder Michael Widenius's daughter, and \"SQL\", the abbreviation for Structured",
            "date_learned": "March 2019"
        },
        {
            "icon": "DiPostgresql",
            "styles": "postgresStyles",
            "name": "PostgreSQL",
            "subtitle": "System Software",
            "description": "PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and technical standards compliance. It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users.",
            "date_learned": "March 2019"
        }
    ]
}