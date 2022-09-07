import {
    logo1, logo2, logo3, logo4, ravi, nikhil, ronita, sonakshi
} from './Assets/index.js'
import './stories.css'
import './stories-responsive.css'
// import './index.js'
const Stories = () => {
    return (
        <div className='stories'>
            <div className='head'>
                <p className='overline'>Encouraging everyone to learn with</p>
                <h2 className='title'> Multiple success stories </h2>
                <p className='subtitle'>Find out how our learners careers transformed after taking our courses.</p>
            </div>
            <div className="row">
                <ul>
                    <li>
                        <div className='card'>
                            <div className='image' style={{ backgroundImage: `url(${ravi})` }}></div>
                            <div className='info'>
                                <div className='body'>
                                    <h3>Getting a dream job even after a career gap</h3>
                                    <p className='desc'>
                                        I had a career gap of 4 years which made it impossible to crack
                                        interviews. Axxelio gave me a earning atmosphere that was
                                        friendly and made it easy to clear doubts. They also offered me 10
                                        interviews with different companies like Credence, Prodapt, etc, which
                                        helped me get a well-paid job and a good role. I have gained so much
                                        confidence in my journey with Axxelio.
                                    </p>
                                    <div className='footer'>
                                        <img src={logo1} alt="Neenopal" height={48}></img>
                                        <p className='usrnm'>Ravi Sreedhar</p>
                                        <p className='text-primary'>Data Scientist · NeenOpal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='card'>
                            <div className='image' style={{ backgroundImage: `url(${nikhil})` }}></div>
                            <div className='info'>
                                <div className='body'>
                                    <h3>From contract employee to full-time professional</h3>
                                    <p className='desc'>
                                        I used to work as a contract employee and wasn't landing a
                                        full-time job because opportunities were limited. I decided to
                                        take charge and upskill myself. With the skills I'd learned at
                                        Axxelio, I was able to move ahead in my career. I now
                                        work as a Lead Analyst in JcPenny.
                                    </p>
                                    <div className='footer'>
                                        <img src={logo2} alt="JCPenney" height={48}></img>
                                        <p className='usrnm'>Nikhil Kumar</p>
                                        <p className='text-primary'>Lead Analyst · JCPenney</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='card'>
                            <div className='image' style={{ backgroundImage: `url(${sonakshi})` }}></div>
                            <div className='info'>
                                <div className='body'>
                                    <h3>Balancing upskilling and motherhood</h3>
                                    <p className='desc'>
                                        I wasn't sure if I could upskill myself with a 4-month old daughter
                                        and no technical experience. Axxelio's faculty gave me all
                                        the support I needed to learn, and would readily clear any doubts
                                        I had. I was able to make the transition from a BPO job to the role
                                        of a Data Scientist at Genpact, with my salary growing 5X.
                                    </p>
                                    <div className='footer'>
                                        <img src={logo3} alt="Genpact" height={48}></img>
                                        <p className='usrnm'>Sonakshi Pattnaik</p>
                                        <p className='text-primary'>Data Scientist · Genpact</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='card'>
                            <div className='image' style={{ backgroundImage: `url(${ronita})` }}></div>
                            <div className='info'>
                                <div className='body'>
                                    <h3>No tech knowledge?<br></br> No problem</h3>
                                    <p className='desc'>
                                        Being from a non-technical background, I was always keen on some
                                        technical know-how and was always passionate about analytics.
                                        Axxelio provided me with the platform to explore more in
                                        the field of analytics and helped me achieve my career goals.
                                        I'm now an Advanced Associate in Ernst & Young.
                                    </p>
                                    <div className='footer'>
                                        <img src={logo4} alt="EY" height={48}></img>
                                        <p className='usrnm'>Ronita Dhar</p>
                                        <p className='text-primary'>Advanced Associate · EY</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className='slider-btns'>
                    <i class="fa-sharp fa-solid fa-arrow-left"></i>
                    <i class="fa-sharp fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}
export default Stories;