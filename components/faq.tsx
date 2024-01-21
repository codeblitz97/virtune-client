'use client';
import { Accordion } from 'keep-react';
import React from 'react';

const Faq = () => {
  const faqData = [
    {
      question: 'How do I add Virtune to my server?',
      answer:
        'You can add Virtune to your Discord server by clicking on the invite button. You must have a role with the “Administrator” or the “Manage Server” permission to be able to add to your Discord Server.',
    },
    {
      question: 'How do I get started with using Virtune?',
      answer:
        "So you've already invited Virtune (if not, go ahead and do it now!) and want to know how to get started with using it? In that case, you should definitely go ahead...",
    },
    {
      question: 'How do I play music with the bot?',
      answer: `Adding music to the playlist is pretty simple. To start playing a track, use the /play command. Here are two examples:
          /play https://open.spotify.com/track/62PaSfnXSMyLshYJrlTuL3
          /play hello`,
    },
    {
      question: 'How to set the bot 24/7 in VC? ',
      answer:
        'First you have to join the voice channel there you can set the bot 24/7 then you can simply set the bot 24/7 by using <code className="bg-grey-200">/24/7.</code>',
    },
  ];

  return (
    <div className="flex flex-col h-auto items-center justify-center w-[400px] mx-auto">
      <Accordion>
        {faqData.map((item, index) => (
          <Accordion.Panel className="dark:bg-trueGray-800 " key={index}>
            <Accordion.Container>
              <Accordion.Title className="dark:text-white">
                {item.question}
              </Accordion.Title>
            </Accordion.Container>
            <Accordion.Content className="dark:text-white">
              <div dangerouslySetInnerHTML={{ __html: item.answer }} />
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
