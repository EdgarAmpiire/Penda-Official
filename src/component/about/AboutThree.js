import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Datas = [
    {
        id: 1,
        title: "Proven Track Record",
        para: "With a history of successful projects and satisfied clients, we’ve built a reputation for delivering results that exceed expectations."
    },
    {
        id: 2,
        title: "End-To-End Solutions",
        para: "From strategy to execution, we handle every aspect of your project in-house. You get a seamless experience, with everything you need under one roof."
    },
    {
        id: 3,
        title: "Personalized Attention",
        para: "No two clients are the same, and we treat each project with the individual care and attention it deserves. Your goals are our priority."},
    {
        id: 4,
        title: "Creative Vision",
        para: "Our team brings fresh ideas, innovative concepts, and a keen eye for detail. We’re not just producing content—we’re crafting experiences that resonate."},
    {
        id: 5,
        title: "Timely Delivery",
        para: "We understand the importance of deadlines. That’s why we’re committed to delivering on time, every time, without compromising on quality."
    }
]




const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="Our Values"
                    title="Why should you work with us?"
                    description="Choosing the right agency can make all the difference. Here’s why Penda Agency is the perfect partner for your business."
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
            </ul>
        </div>
    )
}

export default AboutThree;