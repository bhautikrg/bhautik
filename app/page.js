
import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";
import { PiBag } from "react-icons/pi";
export default function Home() {
  return (
    <div className="wraper">
      <header className="header">

      </header>
      <section className="billboard">
          <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-5 col-lg-6">
                    <div className="fit_img">
                      <img src="images/bhautik.jpg" alt="bhautik godhaniya"/>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                    <div className="caption">
                      
                      <span>I'm</span>
                      <h1>Bhautik Godhaniya</h1>
                      <h2>Frontend Developer</h2>
                      <div className="btn_holder">
                        <Link className="my_btn white_border" href="bhautik_godhaniya.pdf" target="_blank">Download CV</Link>
                      </div>
                    </div>
                </div>
            </div>
          </div>
      </section>
      <section className="sections">
        <div className="container">
            <div className="section_title">
              <h2>About</h2>
              <p className="sub_title">About Me</p>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="fit_img">
                  <img src="images/bhautik.jpg"/>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="content">
                  <h3>UI/UX & Frontend Developer</h3>
                  <p>I blend creativity with technical expertise to breathe life into digital visions. With proficiency in HTML, CSS, and JavaScript, I translate ideas into dynamic web solutions that engage and inspire. Continuously refining my skills, I embrace challenges to deliver responsive designs that exceed expectations and enhance user interaction.</p>
                  <div className="row">
                    <div className="col-lg-6">
                      <p><strong>Name:</strong> Bhautik Godhaniya</p>
                    </div>
                    <div className="col-lg-6">
                      <p><strong>Birthday:</strong> 17 March 2023</p>
                    </div>
                    <div className="col-lg-6">
                      <p><strong>Degree:</strong> BCA/MCA</p>
                    </div>
                    <div className="col-lg-6">
                      <p><strong>Experience:</strong> 5 Years</p>
                    </div>
                    <div className="col-lg-6">
                      <p><strong>Phone:</strong><Link href="tel:8866133743"> +91 8866133743</Link></p>
                    </div>
                    <div className="col-lg-6">
                      <p><strong>Email:</strong><Link href="mailto:bhautik.godhaniya@gmail.com"> bhautik.godhaniya@gmail.com</Link></p>
                    </div>
                    <div className="col-lg-6">
                      <p><strong>Address:</strong> Near ahir street road,  <br/>  Sutrapada - 362275 (Gujarat)</p>
                    </div>
                    <div className="col-lg-6">
                      <p><strong>Freelance:</strong> Available</p>
                    </div>
                  </div>
                  <div className="btn_holder">
                    <Link className="my_btn" href="mailto:bhautik.godhaniya@gmail.com">Hire Me</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="sections edu_section">
        <div className="container">
            <div className="section_title">
              <h2>QUALITY</h2>
              <p className="sub_title">EDUCATION & EXPERICENCE</p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h3><PiStudent /> Education</h3>
                <div className="education">
                  <div className="edu_box">
                    <CiCirclePlus />
                    <h5>Master In Computer Application</h5>
                    <p><strong>Gujarat Technological University</strong> | <small>2013 - 2016</small></p>
                    <p>The culmination of an advanced academic journey specializing in Master of Computer Applications, achieved at Gujarat Technological University. </p>
                  </div>
                  <div className="edu_box">
                    <CiCirclePlus />
                    <h5>Bachelor In Computer Application</h5>
                    <p><strong>Saurashtra University</strong> | <small>2010 - 2013</small></p>
                    <p>The culmination of an advanced academic journey specializing in Bachelor of Computer Applications, achieved at Saurashtra University. </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h3><PiBag /> Expericence</h3>
                <div className="education">
                  <div className="edu_box">
                    <CiCirclePlus />
                    <h5>Sr. Front End Developer </h5>
                    <p><strong>Metatagg Digital Solutions</strong> | <small>Working</small></p>
                  </div>
                  <div className="edu_box">
                    <CiCirclePlus />
                    <h5>Sr. HTML Developer</h5>
                    <p><strong>AIS Technolabs Pvt Ltd</strong> | <small>May 2023 - Sep 2023</small></p>
                  </div>
                  <div className="edu_box">
                    <CiCirclePlus />
                    <h5>Sr. Web Designer</h5>
                    <p><strong>NXSOL Private Limited</strong> | <small>May 2021 - Apr 2023</small></p>
                  </div>
                  <div className="edu_box">
                    <CiCirclePlus />
                    <h5>Web Designer</h5>
                    <p><strong>Light Link Solutions</strong> | <small>June 2020 - May 2021</small></p>
                  </div>
                  <div className="edu_box">
                    <CiCirclePlus />
                    <h5>Web Designer</h5>
                    <p><strong>Qrolic Technologies</strong> | <small> June 2019 - May 2020</small></p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="sections">
        <div className="container">
            <div className="section_title">
              <h2>SKILLS</h2>
              <p className="sub_title">MY SKILLS</p>
            </div>
            <div className="row tb_sapace">
              <div className="col-lg-3">
                <div className="skill">
                    <div className="fit_img icon">
                      <img src="images/technologies/html.png" />
                    </div>
                    <h3>Html</h3>
                    <p>Proficient in creating structured and semantic web pages using HTML.</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="skill">
                    <div className="fit_img icon">
                      <img src="images/technologies/css.png" />
                    </div>
                    <h3>css</h3>
                    <p>Skilled in styling and layout design with CSS to enhance website presentation.</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="skill">
                    <div className="fit_img icon">
                      <img src="images/technologies/scss.png" />
                    </div>
                    <h3>scss</h3>
                    <p>Experienced in utilizing SCSS for efficient and maintainable CSS development.</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="skill">
                    <div className="fit_img icon">
                      <img src="images/technologies/bootstrap.png" />
                    </div>
                    <h3>Bootstrap</h3>
                    <p>Proficient in implementing responsive and sleek designs using Bootstrap framework.</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="skill">
                    <div className="fit_img icon">
                      <img src="images/technologies/jquery.png" />
                    </div>
                    <h3>Jquery</h3>
                    <p>Experienced in utilizing jQuery for dynamic and interactive web development.</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="skill">
                    <div className="fit_img icon">
                      <img src="images/technologies/js.png" />
                    </div>
                    <h3>Javascript</h3>
                    <p>Proficient in client-side scripting with JavaScript for dynamic web functionalities.</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="skill">
                    <div className="fit_img icon">
                      <img src="images/technologies/react-js.png" />
                    </div>
                    <h3>React.js</h3>
                    <p>Experienced in building interactive and scalable web applications using React.js library.</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="skill">
                    <div className="fit_img icon">
                      <img src="images/technologies/next-js.png" />
                    </div>
                    <h3>Next.js</h3>
                    <p>Skilled in server-side rendering and building fast and SEO-friendly web applications with Next.js framework.</p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
