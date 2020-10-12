import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'





function Home() {

    const styles = {
        header: {
            fontSize: "60px",
            marginTop: "10px",

            
            
        },
        row: {
            marginTop: "30px",
            height: "500px",
            zIndex: "0",
            fontFamily: "Charcoal, sans-serif",
            textAlign: "center",
            color: "whitesmoke",
            backgroundColor: "#030954",
        },

        button: {
            backgroundColor: "#d100ae",
            border: "none",
            marginTop: "100px",
            width: "33%",
            height: "75px"
        }
    }

    return (
        <div>

            <Row style={styles.row}>
                <Col>

                    <h1 style={styles.header} >
                        Hello I'm <span style={{color: "#d100ae"}}>Oliver Bigelow</span> I am a full-stack web developer.
                    </h1>

                    <Button style={styles.button}>

                        <a href="/portfolio" style={{color: "white"}}>Check out my Portfolio!</a>

                    </Button>


                </Col>
            </Row>

        </div>

    )

}


export default Home;