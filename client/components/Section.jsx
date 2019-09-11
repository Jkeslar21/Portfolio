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

    const scrollToTop = () => {
        scroll.scrollToTop()
    }

    const clickMe = () => {
        setFrontend(!frontend)
        setIsFlipped(!isFlipped)
    }
    const clickMeBack = () => {
        setBackend(!backend)
        setIsFlipped2(!isFlipped2)
    }

    return (
        <>
            <div className={classNameProp}>
            {/* <div className={"section" + (dark ? " section-dark" : "")}> */}
        <div className="section-content" id={id}>
            <ScrollAnimation animateIn='fadeIn' duration={2}>
                <h2><span className={dark ? 'span-dark' : 'span'}>{title}</span></h2>
            {/* </ScrollAnimation> */}

                       {/* Dynamic Sections */}

            {skills &&
            <>
            

            <div className='images'>
                <div className='frontend'>
                    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' >
                    <img  className={'sunflower'} src='../static/treeTopFinall.png' alt='Sunflower Image' key={frontend ? null : 'front'} onClick={clickMe} />
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
                        <img className='roots' src='../static/treeRootsFinal.png' alt='Roots Image' key={backend ? null : 'front'} onClick={clickMeBack} />
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

            {/* <div className='titles'>
                <div>
                    <h3 className="skills-title">Front End</h3>
                    <div className='icons'>
                    <p>*icon*</p>
                    <p>*icon*</p>
                    <p>*icon*</p>
                    </div>
                </div>
                <div>
                    <h3 className="skills-title">Back End</h3>
                </div>
            </div> */}
            {/* <p className={dark ? null : 'light-text'}>SKILLS CONTENT TEST - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quibusdam quidem modi, commodi aliquam fuga quaerat, ipsum optio molestias dolores, aut accusantium consequatur expedita. Veritatis, recusandae dolore. Accusamus, error delectus!
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
            Fugit minus, voluptatibus, harum quam a repellendus consequatur, aut nam corporis error ipsam vero laboriosam perferendis ipsum. Culpa eum et repellendus asperiores beatae hic sequi iste fugiat optio, quas fugit?
            Sed temporibus, adipisci animi sequi nulla similique beatae reiciendis facere ab iste reprehenderit eos culpa dolorum. Ratione sit aspernatur, cum, accusamus eaque nesciunt quod illo id temporibus, obcaecati provident vel.
            Dolorem eaque ea animi qui debitis enim dolore sed, et similique impedit incidunt velit esse? Illum amet expedita molestiae autem, adipisci ab perspiciatis odit id vitae optio nesciunt velit enim.
            Eligendi a dolores libero explicabo numquam voluptatibus ullam veritatis omnis odio rem neque aspernatur asperiores cumque atque at, voluptas perspiciatis recusandae? Illum quasi vel, quaerat eveniet dolore quisquam iusto repudiandae.
            Maxime inventore fugit consectetur itaque? Nisi earum aspernatur assumenda, mollitia animi alias error nostrum voluptas, soluta vero voluptatibus nihil officiis vitae repellat, magni blanditiis facere. Eaque accusantium illo eligendi dicta!
            Placeat mollitia sit deleniti sequi. Obcaecati officia numquam asperiores ducimus inventore maxime quasi quam! Autem accusamus perspiciatis, voluptatibus fugiat voluptas fugit, voluptate laboriosam, magni harum iusto numquam officiis repellat commodi.
            Impedit omnis perferendis quas nisi facere quasi nobis, dolorem explicabo, quam blanditiis, ex similique labore. Ipsa ab excepturi consequuntur, sed illo ex dolore impedit. Odio vel debitis dolore unde exercitationem.
            Doloremque, tempora illum. Numquam dolore exercitationem consequatur eius incidunt nisi adipisci libero quidem. Similique quia reiciendis nostrum numquam id nisi blanditiis modi, nemo adipisci harum ut quos, sint, natus laborum.
            Error officia nihil ab facere ad sed, accusantium, labore excepturi alias animi, enim quo earum? Pariatur temporibus fuga commodi libero, iusto, nulla mollitia minima eaque velit harum, vero illum rerum.
            Perferendis consectetur quos incidunt quas adipisci rerum ab? Illum corporis molestiae enim nisi similique. Laborum repudiandae est qui rerum ea, vitae placeat molestias possimus sequi voluptatibus perspiciatis, eius voluptatum quaerat?
            Nam molestiae doloremque neque, velit facilis omnis magni cupiditate aspernatur quaerat minus qui voluptatum distinctio, commodi quas! Ipsa laudantium, exercitationem porro amet debitis tenetur iste blanditiis cum voluptate officia adipisci.
            Culpa eius esse tempora nobis beatae. Provident quam sequi, totam illo quia fuga placeat incidunt assumenda doloremque molestiae eius dolorum dignissimos consectetur voluptates voluptatum cumque. Molestiae dolores odit dicta aspernatur.
            Excepturi dignissimos iste recusandae. Sapiente reiciendis ipsa quod? Non voluptates omnis nam eveniet repellendus nulla eos doloribus distinctio eum nobis sed optio tempore, dolore fuga sit quis voluptas. Ab, a!
            Perferendis ea, corrupti laborum numquam modi nostrum praesentium nobis eum ipsum porro tempora eligendi eveniet omnis architecto cumque soluta ad pariatur corporis veritatis! Fugiat velit asperiores odit, consequuntur recusandae laudantium!
            Cum rem iusto magni dolor repellendus earum reiciendis aliquam, incidunt dicta, vero dolores dolore, totam quis quia explicabo repellat molestias similique reprehenderit fugit? Quidem voluptates esse aspernatur tempora nihil dolorum.
            Aliquid quod fugit consequatur fuga? Voluptatibus voluptate placeat explicabo dicta distinctio tenetur pariatur deserunt, nulla exercitationem! Veniam illo maxime praesentium recusandae id. Culpa, atque ducimus numquam ex cupiditate sapiente autem.
            Architecto quam esse consequatur quibusdam ipsam accusamus cupiditate nisi corporis! Magnam animi veritatis, magni dolor vero nemo dolore sequi, minus itaque dignissimos dicta mollitia aliquid, ab beatae praesentium laboriosam pariatur?
            Tempore recusandae eveniet enim debitis tenetur consequuntur odio architecto cupiditate praesentium modi iure velit sequi corrupti dicta ea deleniti ex, esse officiis rem aliquid blanditiis molestias. Molestias, praesentium optio! Aperiam.
            Repudiandae rem cum, amet veritatis architecto maiores ex eius animi maxime, nobis voluptatum iusto. Tempore ipsa, culpa, quasi illo non iste eius officiis eveniet incidunt consectetur eligendi nam cupiditate adipisci.
            Illo repudiandae atque ea ut autem eveniet quisquam, cumque fuga est perspiciatis voluptates aut accusamus quaerat quo, optio praesentium tempora. Mollitia rem, repellendus aliquid veniam iure minus consequatur dolorem temporibus.
            Eveniet officiis animi eligendi? In, dolorem impedit, inventore laborum dicta doloremque hic facilis quis maxime facere quidem magni molestiae accusantium, velit sunt perferendis sapiente distinctio harum enim. Ipsam, dignissimos explicabo.
            Reiciendis placeat neque, consequuntur aliquam sequi fuga, nostrum dicta assumenda id numquam laboriosam aperiam at maxime quos quod quibusdam laborum, doloremque possimus perspiciatis? Ad praesentium amet impedit maiores, sit quae?
            Perferendis commodi animi quas provident vel porro nulla obcaecati repellat, asperiores numquam quidem praesentium modi? Cupiditate cum eius provident enim, id sapiente repudiandae autem, rerum dolorem unde suscipit modi voluptatum!
            Sapiente veniam eos reprehenderit nam consectetur quod quis explicabo provident! Exercitationem unde architecto sint eveniet? Ratione sunt iste sapiente. Beatae, tempora ducimus. Esse autem modi saepe? Ut veritatis iure tempore.
            Iste, id aliquid! Corporis est blanditiis quo dicta, voluptates sequi autem officia laudantium praesentium doloremque rerum facilis fugiat? Quidem exercitationem, debitis quo adipisci quis soluta sequi ratione culpa dicta porro?
            Sint possimus non libero deleniti eligendi, aliquid nisi blanditiis nam at molestiae! Voluptates tenetur possimus, ullam eos exercitationem nobis aliquid, nam quod qui, debitis assumenda voluptatum necessitatibus? In, quia fuga?
            Incidunt illo impedit, reiciendis corrupti odio nulla veniam ullam ad repellat? Unde recusandae aut sequi excepturi accusamus, provident explicabo placeat labore numquam libero totam quis ducimus, facilis culpa asperiores omnis!
            Omnis velit modi quasi dicta. Rerum aut in dolorum aperiam aliquid ipsa natus nostrum ipsam earum porro minima, quae architecto voluptatibus hic sed vel corrupti? Magnam reiciendis rem reprehenderit consequatur!
            Nostrum dolores, laudantium tempora doloribus laboriosam neque quos temporibus rem quod dolorem repudiandae accusamus debitis cupiditate, nemo possimus. Laudantium ab omnis dicta quia impedit assumenda. Omnis culpa ipsam corrupti accusamus.
            Dolore voluptatibus eaque rerum! Sequi perferendis provident autem consequatur reiciendis tempore, cum totam rerum culpa accusamus consectetur optio, at voluptatibus doloremque. Ad nisi repellendus amet temporibus quasi modi! Maiores, facere.
            Nobis facere ut neque, excepturi eos aliquam eaque ipsa, officia nulla debitis beatae optio maiores fuga! Minus exercitationem nam ipsa earum impedit, adipisci voluptate, commodi mollitia quo, accusamus magnam tempore!
            Praesentium ab dolor doloribus totam, perspiciatis voluptatum sapiente excepturi voluptas optio a quasi ipsum soluta tempora rerum vitae veniam temporibus dolorem dicta laborum corrupti quam. Voluptates laboriosam odio asperiores natus.
            Magni dolores, veritatis ducimus necessitatibus, libero iste delectus fugit nihil rem modi beatae suscipit. Deserunt esse pariatur debitis delectus, dolorem aliquam quas incidunt vel soluta. Architecto suscipit beatae doloremque inventore.</p> */}
            <h5 onClick={scrollToTop} className={dark ? 'arrow-up-icon-dark' : 'arrow-up-icon'}><TiArrowUpThick /></h5>
            

            </>}

            {portfolio &&
            <>
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
            <h5 onClick={scrollToTop} className={dark ? 'arrow-up-icon-dark' : 'arrow-up-icon'}><TiArrowUpThick /></h5>
            </>}

            {resume &&
            <>
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
            <h5 onClick={scrollToTop} className={dark ? 'arrow-up-icon-dark' : 'arrow-up-icon'}><TiArrowUpThick /></h5>
            </>}

            {contact &&
            <>
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
            <h5 onClick={scrollToTop} className={dark ? 'arrow-up-icon-dark' : 'arrow-up-icon'}><TiArrowUpThick /></h5>
            </>}
            </ScrollAnimation>

        </div>
        <Transition image={image} />
        </div>
        <style jsx>{`
                .light {
                    background-color: #e5e7e6;
                    margin-top: -5px;
                    font-family: 'Raleway', sans-serif;
                }
                .dark {
                    background-color: #000c1f;
                    margin-top: -5px;
                    color: #e5e7e6;
                    font-family: 'Raleway', sans-serif;
                }
                .images {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    // justify-content: space-around;
                    // padding: 2%;
                }

                .sunflower, .roots {
                    max-width: 600px;
                    filter: grayscale(100%);
                    animation: colorFadeOut 2s, shapeShiftOut 2s;
                    border-radius: 50%;
                    // border: 3px solid #141301
                    -webkit-box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                    -moz-box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                    box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                }
                
                .sunflower:hover, .roots:hover {
                    cursor: pointer;
                    animation: colorFadeIn 2s, shapeShiftIn 2s;
                    filter: grayscale(0%);
                    border-radius: 50px;
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
                    width: 35%;
                    // margin-top: 2%;
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
                    width: 100%;
                    max-width: 600px;
                    max-height: 400px;
                    height: 350px;
                    width: 550px;
                    background: #fbfbf8;
                    border-radius: 50px;
                    padding: 2%;
                    margin: 3%;
                    cursor: pointer;
                    -webkit-box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                    -moz-box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                    box-shadow: 10px 10px 21px -2px rgba(20,19,1,0.75);
                }
                .card-back {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .card-icons {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    width: 100%;
                    max-width: 600px;
                    max-height: 400px;

                }
                .section-content {
                    // display: flex;
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
                .span {
                    // border-bottom: 2px solid #b80c09;
                    color: #000c1f;
                    // align-self: center;
                }
                .span-dark {
                    // border-bottom: 1px solid #4ad5ff;
                    // color: #000c1f;
                }
                .light-text {
                    color: #141301;
                }
                .arrow-up-icon-dark {
                    color: #e5e7e6;
                    margin-left: 49%;
                    margin-top: 10%;
                    font-size: 2.5rem;
                }
                .arrow-up-icon {
                    color: #141301;
                    margin-left: 49%;
                    margin-top: 10%;
                    font-size: 2.5rem;
                }
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
                        border-radius: 50px;
                    }
                }
                @keyframes shapeShiftOut {
                    from {
                        border-radius: 50px;
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
                .animate {
                    opacity: 1;
                }
                .gauges {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    justify-content: space-around;
                    align-items: center;
                    margin: 10% 0;
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
                    width: 200px;
                    height: 175px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .dynamic {
                    margin-top: 55px;
                }
                
      `}</style>
    </>
    )
}


// dark black #141301
// medium grey #b7b5b3