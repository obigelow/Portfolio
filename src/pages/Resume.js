import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ResumePDF from "./../assets/Resume.pdf"





function Resume() {

    const styles = {
        pdf: {
            marginTop: "30px",
            height: "800px",
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
        h1: {
            fontSize: "50px",
            marginTop: "30px",
            textAlign: "center"
        }
    }

    return (
        <div style={styles.row}>

            <Row >
                <Col>
                    <h1 style={styles.h1}><i>Resume</i></h1>

                    <iframe src={ResumePDF} style={styles.pdf}></iframe>
                </Col>
            </Row>


        </div>

    )

}


export default Resume;