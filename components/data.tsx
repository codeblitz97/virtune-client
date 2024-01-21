import React from 'react';
import {
  AdjustmentsHorizontalIcon,
  ChartBarSquareIcon,
  ClockIcon,
  PlayCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  QueueListIcon,
  SunIcon,
} from '@heroicons/react/24/solid';

import benefitOneImg from '../public/img/benefit-one.png';
import benefitTwoImg from '../public/img/benefit-two.png';

interface Benefit {
  title: string;
  desc: string;
  icon: React.ReactElement;
}

interface BenefitData {
  title: string;
  desc: string;
  image: {
    src: string;
    height: number;
    width: number;
  };
  bullets: Benefit[];
}

const benefitOne: BenefitData = {
  title: 'Key Features Offered by Virtune',
  desc: 'Discover a myriad of features provided by Virtune. Here, we highlight some of the complimentary benefits and features available to you.',
  image: {
    src: benefitOneImg.src,
    height: benefitOneImg.height,
    width: benefitOneImg.width,
  },
  bullets: [
    {
      title: 'Filters',
      desc: 'Virtune has more than 17 filters built-in',
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: 'Optimal Latency Performance',
      desc: "Experience the remarkable low latency of our bot, surpassing even NASA's speed.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: 'Customizable Response Channels in Virtune',
      desc: 'Empower yourself by configuring Virtune to provide responses on a designated channel of your choice.',
      icon: <ChatBubbleBottomCenterTextIcon />,
    },
  ],
};

const benefitTwo: BenefitData = {
  title: 'Explore Additional Features with Virtune',
  desc: 'Discover a range of premium features offered by Virtune, setting it apart from many other bots. Here, we highlight some of these distinctive features.',
  image: {
    src: benefitTwoImg.src,
    height: benefitTwoImg.height,
    width: benefitTwoImg.width,
  },
  bullets: [
    {
      title: '24/7',
      desc: 'By voting for Virtune on top.gg, unlock 24/7 features for uninterrupted usage for 24 hours, ensuring the bot remains in the voice channel.',
      icon: <ClockIcon />,
    },
    {
      title: 'Secure Playlist System',
      desc: 'Enjoy our exclusive playlist system with enhanced privacy. Your playlists remain inaccessible to others, allowing you to effortlessly play any music of your choice.',
      icon: <PlayCircleIcon />,
    },
    {
      title: 'Queue',
      desc: 'The bot comes with a queue feature. You can repeat the queue, you can even add a playlist to the queue.',
      icon: <QueueListIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
