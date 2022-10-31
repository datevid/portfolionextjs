import Layout from "../components/Layout";
import { skills, experiences } from "../profile"
import { projects } from '../profile.js'
import Link from 'next/link'

const Index = () => <>
    <Layout>
        {/** header card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="ryan-ray-profile2.jpeg"
                                className="img-fluid"
                                alt="" />
                        </div>
                        <div className="col-md-8">
                            <h1>Rayn ray</h1>
                            <h3>Fullstack Developer</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempora incidunt ea voluptatum magni amet nesciunt porro optio similique, exercitationem ut earum deleniti obcaecati quam enim voluptate perspiciatis consectetur consequatur?
                            </p>
                            <a href="/hireme">Hireme</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/** Second section */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {
                            skills.map(({ skill, percentage }, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: `${percentage}%` }} ></div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul>
                            {
                                experiences.map(({ title, description, from, to }, i) => (
                                    <li key={i}>
                                        <h3>{title}</h3>
                                        <h4>{from} to {to}</h4>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/** Portfolio */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>

                        {
                            projects.map(({ name, description, image }, i) => (

                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <img src={`/${image}`} alt="" />
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <a href="">saber más</a>
                                        </div>
                                    </div>
                                </div>


                            ))
                        }

                    </div>

                    <div className="text-center">
                        <Link href="/portfolio" legacyBehavior>
                            <a className="btn btn-outline-light">More projects</a>
                        </Link>
                    </div>
                </div>
            </div>



        </div>
    </Layout>
</>

export default Index;