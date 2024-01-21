import Image from 'next/image';
import Container from './container';
import React from 'react';
import {
  MicrosoftLogo,
  AmazonLogo,
  VerizonLogo,
  NetflixLogo,
  SonyLogo,
} from './logos';

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              One of the best Music Bot in Discord
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Virtune stands out as an exceptional music bot, boasting a myriad
              of premium features that elevate it to the pinnacle of excellence
              among Discord Music Bots.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/api/invite?ref=landing"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-cyan-600 rounded-md duration-[0.5s] hover:bg-cyan-700 "
              >
                Invite Virtune
              </a>
              <a
                href="https://top.gg/bot/1012752432700346491/vote"
                target="_blank"
                rel="noopener"
                className="flex items-center px-8 py-4 text-lg font-medium text-center rounded-md space-x-2 text-gray-500 dark:text-gray-400 duration-[0.5s] dark:hover:bg-trueGray-700"
              >
                <span>Vote for Virtune</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={
                'https://cdn.discordapp.com/attachments/1191672987095670795/1195330745355468810/2d6c477e76f590c1797b9861ef356dec_prev_ui.png?ex=65b39981&is=65a12481&hm=3c61167378a3f076276e0f0b6469f757d93c3d36f4898e2348f9918b65f330b2&'
              }
              width="616"
              height="617"
              className={'object-cover mix-blend-screen'}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-cyan-600">300+</span>
            servers worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around bg-gray-200 dark:bg-transparent">
            <div className="pt-2 text-gray-400 dark:text-gray-400 ">
              <AmazonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <VerizonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <MicrosoftLogo />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <NetflixLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <SonyLogo />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
