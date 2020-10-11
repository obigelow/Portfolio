import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'





function Home() {

    const styles = {
        header: {
            fontSize: "40px",
            marginTop: "10px",

            
            
        },
        row: {
            marginTop: "30px",
            height: "200px",
            zIndex: "0",
            fontFamily: "Charcoal, sans-serif",
            textAlign: "center",
            color: "whitesmoke",
            backgroundColor: "#FFC8DD",
        },

        button: {
            backgroundColor: "#CDB4DB",
            border: "none",
            marginTop: "15px",
            width: "25%",
            height: "50px"
        }
    }

    return (
        <div>

            <Row style={styles.row}>
                <Col>

                    <h1 style={styles.header} >
                        Hello I'm <span>Oliver Bigelow</span> I am a full-stack web developer.
                    </h1>

                    <Button style={styles.button}>

                        Check my Portfolio!

                    </Button>


                </Col>
            </Row>

        </div>

    )

}


export default Home;