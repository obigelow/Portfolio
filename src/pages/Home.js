import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {useHistory} from "react-router-dom"





function Home() {

    let history = useHistory();

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

    const TakeToPortfolio = () => {
        history.push("/portfolio")
    }
    return (
        <div>

            <Row style={styles.row}>
                <Col>

                    <h1 style={styles.header} >
                        Hello I'm <span style={{color: "#d100ae"}}>Oliver Bigelow</span> I am a full-stack web developer.
                    </h1>

                    <Button style={styles.button} onClick = {TakeToPortfolio}>

                        Check out my Portfolio!

                    </Button>


                </Col>
            </Row>

        </div>

    )

}


export default Home;