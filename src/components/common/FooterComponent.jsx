import React from 'react';
import StackOverFlowIcon from '../images/github1.webp';

export default function FooterComponent() {
  return (
    <footer className={"p-5 bg-gray-100"}>
      <div className={"flex justify-center items-center p-5"}>
        <a className={"p-3 cursor-pointer"}>Github</a>
        <a className={"p-3 cursor-pointer"}>LinkedIn</a>
        <a className={"p-3 cursor-pointer"}>Medium</a>
        <a className={"p-3 cursor-pointer"}>Dev.to</a>
        <a className={"p-3 cursor-pointer"}>Behance</a>
        <a className={"p-3 cursor-pointer"}>OverFlowIcon</a>
      </div>
      <br/>
      <hr/>
      <div className={"flex justify-between items-center h-16 text-gray-600 sm:block md:block lg:flex xl:flex"}>
          <p>Yazan Tarifi - Copyright @ 2021 Personal Website</p>
          <p>Website is Open Source (<a href="https://github.com/Yazan98/portfolio">Website Url</a>)</p>
      </div>
    </footer>
  );
}
