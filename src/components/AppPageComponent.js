import React, { Component } from 'react';
import '../AppPage.css';



export default function AppPageComponent(props) {
    let status = 'Guest'
    try {
    if (props.user.isMember === true) {
        status = 'Member'
    }
    } catch (err) {
    console.log(err)
    }
    return <h1>Hello {status}!</h1>;
  }