import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image from './../assets/me.jpg'






function About() {

    const styles = {
        image: {
            marginTop: "30px",
            height: "400px",
            width: "68%",



        },
        row: {
            zIndex: "-20",
            marginTop: "30px",
            height: "2000px",
            zIndex: "0",
            fontFamily: "Charcoal, sans-serif",
            textAlign: "center",
            color: "whitesmoke",
            backgroundColor: "#030954",
        },
        p: {
            fontSize: "25px",
            marginTop: "30px"
        }
    }

    return (
        <div style={styles.row}>

            <Row >
                <Col>

                    <img style={styles.image} src={image} alt="picture of Oliver Bigelow" />

                </Col>
            </Row>
            <Row >
                <Col>

                    <p style={styles.p}>
                        I am a full-stack web developer from Portland, ME. I completed the UCLA Extention bootcmp in October of 2020. My real passion is in video game development, I am always working on a new game using the gaming engine Unity.
                    </p>


                </Col>
            </Row>
            <Row >
                <Col>

                    <p style={styles.p}>
                        My current skills include: HTML, CSS, Javascript, Node.js, React.js, C#, Experience with Unity

                    </p>
                    <p style={styles.p}>
                        I am a very quick learner and am always up for learning a new langauge, library, or framework.
                    </p>
                    <p style={styles.p}>
                        Check out my Portfolio!
                    </p>
                    <h1>Contact: </h1>
                    <p style={styles.p}>
                        Email: oelucy@gmail.com
                        Github: obigelow
                    </p>


                </Col>
            </Row>

        </div>

    )

}


export default About;