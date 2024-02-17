import Image from "next/image";
import Link from "next/link";

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
                  </div>
                  <div className="btn_holder">
                    <Link className="my_btn" href="mailto:bhautik.godhaniya@gmail.com">Hire Me</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="sections">
        <div className="container">
            <div className="section_title">
              <h2>QUALITY</h2>
              <p className="sub_title">EDUCATION & EXPERICENCE</p>
            </div>
        </div>
      </section>
      <section className="sections">
        <div className="container">
            <div className="section_title">
              <h2>SKILLS</h2>
              <p className="sub_title">MY SKILLS</p>
            </div>
        </div>
      </section>
    </div>
  );
}
