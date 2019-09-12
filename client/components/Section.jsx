import React, { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import Transition from '../components/Transition'
import { TiArrowUpThick } from "react-icons/ti";
import ScrollAnimation from 'react-animate-on-scroll';
import ReactCardFlip from 'react-card-flip';
import { DiReact, DiJavascript1, DiBootstrap, DiSass, DiLess, DiCss3, DiHtml5, DiGithubBadge, DiGit, DiNodejsSmall, DiMysql, DiPostgresql } from "react-icons/di";
import { FaChartLine, FaGlobeAmericas } from "react-icons/fa";
import { MdPhonelink, MdLightbulbOutline } from "react-icons/md";


export default function Section({title, id, image, classNameProp, dark, skills, portfolio, resume, contact}) {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isFlipped2, setIsFlipped2] = useState(false)
    const [backend, setBackend] = useState(false)
    const [frontend, setFrontend] = useState(false)

    // const scrollToTop = () => {
    //     scroll.scrollToTop()
    // }

    const clickMe = () => {
        setFrontend(!frontend)
        setIsFlipped(!isFlipped)
    }
    const clickMeBack = () => {
        setBackend(!backend)
        setIsFlipped2(!isFlipped2)
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
            <div className='images'>
                <div className='frontend'>
                    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' >
                    <img  className={'sunflower'} src='../static/treeTopFinally.png' alt='Sunflower Image' key={frontend ? null : 'front'} onClick={clickMe} />
                    <div className={'view'} onClick={clickMe} key='back'>
                    <div className='card-back'>
                        <h3 className="skills-title">Front End</h3>
                            <div className='card-icons'>
                                {/* Git */}
                                <DiGit style={{ fontSize: '6rem', color: '#F34F29'}} />
                                
                                {/* GitHub */}
                                <DiGithubBadge style={{ fontSize: '6rem', color: '#181616'}} />

                                {/* HTML5 */}
                                <DiHtml5 style={{ fontSize: '6rem', color: '#E54D26'}} />

                                {/* CSS3 */}
                                <DiCss3 style={{ fontSize: '6rem', color: '#3D8FC6'}} />

                                {/* LESS */}
                                <DiLess style={{ fontSize: '6rem', color: '#2A4D80'}} />

                                {/* SASS */}
                                <DiSass style={{ fontSize: '6rem', color: '#CC6699'}} />

                                {/* Bootstrap */}
                                <DiBootstrap style={{ fontSize: '6rem', color: '#5B4282'}} />

                                {/* JavaScript */}
                                <DiJavascript1 style={{ fontSize: '6rem', color: '#F0DB4F'}} />

                                {/* React */}
                                <DiReact style={{ fontSize: '6rem', color: '#61DAFB'}} />

                                {/* Redux */}
                                <img src='../static/redux.png' alt='Redux Icon' style={{ width: '75px', maxHeight: '70px', margin: '1%' }} />
                                
                                {/* Next */}
                                <img src='../static/next-text.png' alt='Next Icon' style={{ width: '75px', maxHeight: '75px', marginLeft: '1%' }} />
                            </div>
                    </div>
                    </div>
                    </ReactCardFlip>                 
                </div>

                <div className='backend' onClick={() => setBackend(!backend)}>
                    <ReactCardFlip isFlipped={isFlipped2} flipDirection='horizontal' >
                        <img className='roots' src='../static/treeRootsFinally.png' alt='Roots Image' key={backend ? null : 'front'} onClick={clickMeBack} />
                        <div className={'view'} onClick={clickMeBack} key='back'>
                        <div className='card-back'>
                            <h3 className='skills-title'>Back End</h3>
                                <div className='card-icons'>
                                    {/* Git */}
                                    <DiGit style={{ fontSize: '6rem', color: '#F34F29'}} />

                                    {/* GitHub */}
                                    <DiGithubBadge style={{ fontSize: '6rem', color: '#181616'}} />

                                    {/* Node */}
                                    <DiNodejsSmall style={{ fontSize: '6rem', color: '#83CD29'}} />

                                    {/* Express */}
                                    <img src='../static/expressFinal.png' alt='Next Icon' style={{ width: '75px', height: '75px', marginTop: '2%', paddingLeft: '2%' }} />

                                    {/* MySQL */}
                                    <DiMysql style={{ fontSize: '6rem', color: '#00618A'}} />

                                    {/* PostgreSQL */}
                                    <DiPostgresql style={{ fontSize: '6rem', color: '#336791'}} />
                                </div>
                            </div>
                        </div>  
                    </ReactCardFlip>
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

                .sunflower, .roots {
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
                
                .sunflower:hover, .roots:hover {
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
                    width: 450px;
                    height: 450px;
                    margin-top: 1%;
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
                    // font-style: oblique;
                }
                .skills-title:hover {
                    cursor: pointer;

                }
                .view {
                    animation: fadeIn 1s;
                    opacity: 1;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    justify-content: space-between;
                    max-width: 100%;
                    background: #fbfbf8;
                    border-radius: 50px;
                    padding: 2%;
                    // margin: 1% 0;
                    cursor: pointer;
                    -webkit-box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                    -moz-box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                    box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                    width: 420px;
                    height: 420px;
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
                .card-icons {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    // width: 100%;
                    max-width: 100%;
                    // max-height: 400px;

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
                    // z-index: 99;
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
      `}</style>
    </>
    )
}


// dark black #141301
// medium grey #b7b5b3