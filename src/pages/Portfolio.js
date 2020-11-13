import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import gitclub from "./../assets/gitclub.png"
import REO from "./../assets/REO.png"
import dreamquest from "./../assets/dreamquest.png"
import Melt from "./../assets/Melt.png"
import weather from "./../assets/weather.png"









function Portfolio() {

    const styles = {
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
        card: {
            marginTop: "30px",
            width: "100%",
            color: "black",
            minHeight: "500px"
        }
    }

    return (
        <div style={styles.row}>

            <Row >
                <Col></Col>

                <Col>

                    <Card style={styles.card}>
                        <Card.Img variant="top" src={REO} />
                        <Card.Body>
                            <Card.Title>REO</Card.Title>
                            <Card.Text>
                                This is a one stop website for all your national park needs. Come here to find a park for you and your family!

                            </Card.Text>
                            <Button variant="primary"><a href="https://ainiwang14.github.io/reimagined-octo-enigma-API/" target="_blank" style={{color: "white"}}>Check it Out!</a></Button>
                            <Button variant="secondary"><a href="https://github.com/ainiwang14/reimagined-octo-enigma-API" target="_blank" style={{ color: "white"}}>Github</a></Button>

                        </Card.Body>
                    </Card>

                </Col>

                <Col>
                    <Card style={styles.card}>
                        <Card.Img variant="top" src={weather} />
                        <Card.Body>
                            <Card.Title>Weather Dashboard</Card.Title>
                            <Card.Text>
                                Come here to find the weather in any city in the world, just type the city in the search bar, search. Please be responsible.
                            </Card.Text>
                            <Button variant="primary"><a href="https://obigelow.github.io/weather-dashboard/" target="_blank" style={{color: "white"}}>Check it Out!</a></Button>
                            <Button variant="secondary"><a href="https://github.com/obigelow/Weather-Dashboard" target="_blank" style={{ color: "white"}}>Github</a></Button>

                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>

            </Row>
            <Row >
                <Col></Col>

                <Col>

                    <Card style={styles.card}>
                        <Card.Img variant="top" src={dreamquest} />
                        <Card.Body>
                            <Card.Title>Dream Quest</Card.Title>
                            <Card.Text>
                               This is a seriously cool game, as aplayer you can choose a character and play the board. You must complete the mini games in order to beat the boss!
                            </Card.Text>
                            <Button variant="primary"><a href="https://boiling-scrubland-47240.herokuapp.com/" target="_blank" style={{color: "white"}}>Check it Out!</a></Button>
                            <Button variant="secondary"><a href="https://github.com/BlakeQuake/Dream-Quest" target="_blank" style={{ color: "white"}}>Github</a></Button>
                        </Card.Body>
                    </Card>

                </Col>

                <Col>
                    <Card style={styles.card}>
                        <Card.Img variant="top" src={gitclub} />
                        <Card.Body>
                            <Card.Title>Git-Club</Card.Title>
                            <Card.Text>
                             As a new coder finding sources can be hard and frustrating. This is a sim ple social platform for coders. Come here to find projects, publishers and just to have fun!
                            </Card.Text>
                            <Button variant="primary"><a href="https://fierce-sea-44794.herokuapp.com/" target="_blank" style={{color: "white"}}>Check it Out!</a></Button>
                            <Button variant="secondary"><a href="https://github.com/daoyeyemi/gitclub" target="_blank" style={{ color: "white"}}>Github</a></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>

            </Row>

            <Row >
                <Col></Col>

                <Col>

                    <Card style={styles.card}>
                        <Card.Img variant="top" src={Melt}/>
                        <Card.Body>
                            <Card.Title>Melt</Card.Title>
                            <Card.Text>
                                In this game you can play as an iceman trying not to melt while the earth is quickly heating. Try to get to the end before its too late!
                            </Card.Text>
                            <Button variant="primary"><a href="https://play.unity.com/mg/other/melt-4tvt" target="_blank" style={{color: "white"}}>Check it Out!</a></Button>
                            <Button variant="secondary"><a href="https://github.com/obigelow/Melt" target="_blank" style={{ color: "white"}}>Github</a></Button>
                        </Card.Body>
                    </Card>

                </Col>

                <Col>
                {/* Waiting for another project */}
                    {/* <Card style={styles.card}>
                        <Card.Img variant="top" src={gitclub} />
                        <Card.Body>
                            <Card.Title>Git-Club</Card.Title>
                            <Card.Text>
                             As a new coder finding sources can be hard and frustrating. This is a sim ple social platform for coders. Come here to find projects, publishers and just to have fun!
                            </Card.Text>
                            <Button variant="primary"><a href="https://fierce-sea-44794.herokuapp.com/" target="_blank" style={{color: "white"}}>Check it Out!</a></Button>
                        </Card.Body>
                    </Card> */}
                </Col>
                <Col></Col>

            </Row>

        </div>

    )

}


export default Portfolio;