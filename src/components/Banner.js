import { useState, useEffect} from "react"
import headerImg from '../assets/img/header-img.svg'
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 10)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta);
        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portofolio
                        </span>
                        <h1>
                            {`Hi I'm Rivaldo`} <span className="wrap">{text}</span>
                        </h1>
                        <p>I am a student at smk wikrama bogor and I am majoring in software and game development. Currently, I am specifically focusing on back end development. I have understood various syntaxes such as html, css, c++, javascript and php, and several frameworks such as laravel, oop, express and vue.js. Through my experience in creating websites, I have a better understanding of the world of technology that will continue to grow. I consider the importance of collaboration in a dedicated team, as this plays a big role in creating innovative products. My vision is not only limited to creating useful products, but also to improve the overall user experience.


Translated with DeepL.com (free version)</p>
                            <form method="post" action="https://drive.google.com/file/d/13W04I9yOZqieKfMyyiFU7Ly86OeFYmc9/view?usp=drive_link">
                                 <button>Download Cv<ArrowRightCircle size={25}/></button>
                            </form>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={ headerImg } alt="header-img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}