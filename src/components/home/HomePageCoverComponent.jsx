import React from 'react';
import InnerToolbarComponent from '../common/InnerToolbarComponent';
import PhonesImage from '../images/header.png';

export default function HomePageCoverComponent() {
  return (
    <section className={"relative h-screen w-screen overflow-hidden"} style={{
      background: "linear-gradient(65deg, rgba(78,70,215,1) 0%, rgba(0,212,255,1) 100%)"
    }}>
      <InnerToolbarComponent />
      <div className="flex flex-col-reverse lg:flex-row items-center place-content-center text-white md:p-2 lg:p-10" style={{
          height: "93vh"
      }}>
        <div className="Text flex flex-1 flex-col items-center lg:items-start md:p-5 lg:p-5 xl:p-5">
          <div className={"lg:pl-20 sm:p-5 md:p-5"}>
            <p className="md:text-4 lg:text-5x1 lg:text-left">Software Engineer</p>
            <h2 className="text-3xl md:text-4 lg:text-5x1 lg:text-left mb-2" style={{color: 'white', fontWeight: 'bold'}}>Yazan Tarifi</h2>
            <p className={"text-xs sm:text-base max-w-prose text-center lg:text-left mb-6 lg:text-md lg:block hidden"}>
              A code-minded front-end software engineer focused on building
              beautiful interfaces & experiences and Convert Ideas, Design To
              System With Frontend Side (Android Apps, React Websites)
              also The Backend Side With (SpringBoot, Ktor, Nest.js)
              Always Trying To Build Tools To Help and Improve My Work
            </p>
            <p className={"text-md mb-2"} style={{color: 'white', fontWeight: 'bold'}}>Few technologies I've been working with</p>
            <div className={"grid grid-rows-3 gap-x-1 gap-y-2 grid-cols-2 max-w-xs"}>
              <p>Android - Kotlin</p>
              <p>React, Next.js</p>
              <p>Jetpack Compose</p>
              <p>NodeJs (Nest.js)</p>
              <p>CLI's (Js, Ruby)</p>
              <p>SwiftUI Apps</p>
            </div>
            <div className="flex justify-left flex-wrap pt-6">
              <a
                  href="https://github.com/Yazan98"
                  className={"rounded-full text-black bg-white transition duration=300 ease-in-out flex items-start animate-bounce p-5 text-xs"}>
                Github Account
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-1 lg:p-20">
          <img loading="lazy"
               className={"w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-3/4 md:h-full lg:w-full"}
               src={PhonesImage}
               alt="Projects Phone Logo"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain"
              }}/>
        </div>
      </div>
    </section>
  );
}
