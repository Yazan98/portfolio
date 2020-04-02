import React, { Component } from 'react';
import HomeStyle from '../styles/HomeStyle.css'
import { Grid, Paper } from '@material-ui/core';

class SkillsComponent extends Component {
    render() {
        return (
            <div>
                <h3>What Can I Do</h3>
                <br></br>
                <div className="SkillsSection">
                    <Grid container spacing={9}>
                        <Grid Grid className="GridItem" item xs={3}>
                            <Paper style={{ width: '150' ,height: '150', padding: '10px', textAlign: "start", backgroundColor: '#6c6ce5', color: '#fff' }} className="AndroidCard">
                                <img src="https://img.icons8.com/cotton/64/000000/android-os.png" />
                                <p style={{ color: "#fff" }}>Frontend Side</p>
                                <h5 style={{ color: "#fff" }}>Android Applications</h5>
                                <p style={{ color: "#fff" }}>Design, Maintain Android Applications With Responsive Layouts , Latest Technologies, Strong Infastructure</p>
                            </Paper>
                        </Grid>
                        <Grid Grid className="GridItem" item xs={3}>
                            <Paper style={{ width: '150' ,height: '150', padding: '10px', textAlign: "start", backgroundColor: '#6c6ce5', color: '#fff' }} className="AndroidCard">
                                <img src="https://img.icons8.com/cotton/64/000000/android-os.png" />
                                <p style={{ color: "#fff" }}>Frontend Side</p>
                                <h5 style={{ color: "#fff" }}>Android Applications</h5>
                                <p style={{ color: "#fff" }}>Design, Maintain Android Applications With Responsive Layouts , Latest Technologies, Strong Infastructure</p>
                            </Paper>
                         </Grid>
                        <Grid Grid className="GridItem" item xs={3}>
                            <Paper style={{ width: '150' ,height: '150', padding: '10px', textAlign: "start", backgroundColor: '#6c6ce5', color: '#fff' }} className="AndroidCard">
                                <img src="https://img.icons8.com/cotton/64/000000/android-os.png" />
                                <p style={{ color: "#fff" }}>Frontend Side</p>
                                <h5 style={{ color: "#fff" }}>Android Applications</h5>
                                <p style={{ color: "#fff" }}>Design, Maintain Android Applications With Responsive Layouts , Latest Technologies, Strong Infastructure</p>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={9}>
                        <Grid Grid className="GridItem" item xs={3}>
                            <Paper style={{ width: '150' ,height: '150', padding: '10px', textAlign: "start", backgroundColor: '#6c6ce5', color: '#fff' }} className="AndroidCard">
                                <img src="https://img.icons8.com/cotton/64/000000/android-os.png" />
                                <p style={{ color: "#fff" }}>Frontend Side</p>
                                <h5 style={{ color: "#fff" }}>Android Applications</h5>
                                <p style={{ color: "#fff" }}>Design, Maintain Android Applications With Responsive Layouts , Latest Technologies, Strong Infastructure</p>
                            </Paper>
                        </Grid>
                        <Grid Grid className="GridItem" item xs={3}>
                            <Paper style={{ width: '150' ,height: '150', padding: '10px', textAlign: "start", backgroundColor: '#6c6ce5', color: '#fff' }} className="AndroidCard">
                                <img src="https://img.icons8.com/cotton/64/000000/android-os.png" />
                                <p style={{ color: "#fff" }}>Frontend Side</p>
                                <h5 style={{ color: "#fff" }}>Android Applications</h5>
                                <p style={{ color: "#fff" }}>Design, Maintain Android Applications With Responsive Layouts , Latest Technologies, Strong Infastructure</p>
                            </Paper>
                         </Grid>
                        <Grid Grid className="GridItem" item xs={3}>
                            <Paper style={{ width: '150' ,height: '150', padding: '10px', textAlign: "start", backgroundColor: '#6c6ce5', color: '#fff' }} className="AndroidCard">
                                <img src="https://img.icons8.com/cotton/64/000000/android-os.png" />
                                <p style={{ color: "#fff" }}>Frontend Side</p>
                                <h5 style={{ color: "#fff" }}>Android Applications</h5>
                                <p style={{ color: "#fff" }}>Design, Maintain Android Applications With Responsive Layouts , Latest Technologies, Strong Infastructure</p>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default SkillsComponent;