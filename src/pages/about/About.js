import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import './About.css'

const About = () => {
    return (
        <div>
            <Navbar />

            <div className="about-banner d-flex align-items-center justify-content-center text-center">
                <div className="text-center">
                    <h1 className="text-capitalize text-white">about us</h1>
                </div>
            </div>

            <section id="about" className="py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-0 text-lg-start">
                            <div className="title pt-3 pb-5">
                                <h2 className="position-relative d-inline-block ms-4">About Us</h2>
                            </div>
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatem fuga blanditiis, modi exercitationem quae quam eveniet!
                                Minus labore voluptatibus corporis recusandae accusantium velit,
                                nemo, nobis, nulla ullam pariatur totam quos.
                            </p>
                            <p className="text-muted">
                                Explicabo hic voluptatibus laborum ducimus incidunt assumenda?
                                Illo placeat fugit suscipit odit sunt officia laborum eos in
                                laudantium doloremque animi aperiam omnis eaque, cupiditate
                                consequatur porro alias neque voluptatum dolor.
                            </p>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <img src="img/about-1.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-1 text-lg-start">
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatem fuga blanditiis, modi exercitationem quae quam eveniet!
                                Minus labore voluptatibus corporis recusandae accusantium velit,
                                nemo, nobis, nulla ullam pariatur totam quos.Voluptatem fuga
                                blanditiis, modi exercitationem quae quam eveniet! Minus labore
                                voluptatibus corporis recusandae accusantium velit, nemo, nobis,
                                nulla ullam pariatur totam quos.
                            </p>
                            <p className="text-muted">
                                Eaque, similique nobis error quo eligendi quis quia dolorum!
                                Maxime, hic minus perspiciatis ipsam repellat doloremque,
                                distinctio cum vel nemo tempore quaerat natus veritatis! Fugiat
                                cum laudantium dignissimos earum minima.
                            </p>
                        </div>
                        <div className="col-lg-6 order-lg-0">
                            <img src="img/about-2.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About
