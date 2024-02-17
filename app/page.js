import Image from "next/image";

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
                    </div>
                </div>
            </div>
          </div>
      </section>
    </div>
  );
}
