import { Container,Row, Tab, Col, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import projImg1 from '../assets/img/Screenshot (159).png'
import projImg2 from '../assets/img/Screenshot (160).png'
import projImg3 from '../assets/img/Screenshot (161).png'
import projImg4 from '../assets/img/Screenshot (162).png'
import colorSharp2 from '../assets/img/color-sharp2.png'

export const Projects = () => {

    const projects = [
        {
            title: 'Web Apotek',
            description : '',
            imgUrl: projImg1,
        },
        {
            title: 'Web Keterlambatan Siswa',
            description : ' ',
            imgUrl: projImg2,
        },
        {
            title: 'Web Peminjaman Buku',
            description : '',
            imgUrl: projImg3,
        },
        {
            title: 'Web School',
            description : '',
            imgUrl: projImg4,
        }
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>projects that I have made.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="thiird" >
                                    Tab Three
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard 
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className="background-image-right"/>
        </section>
    )
}