import React from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
import { BsTerminal } from 'react-icons/bs';
import { GoBrowser } from 'react-icons/go';

const careerInfo = [
  {
    id: 1,
    icon: <AiOutlineMobile />,
    title: 'Desarrollo Mobile',
    description:
      'Me eh cruzado con esta rama en varias oportunidades. Tengo muchas ganas de aprender mas sobre esto y estoy deseando profundizar en ello',
    knowledgeList: 'JavaScript, React Native, JQuery Mobile, Kotlin',
  },
  {
    id: 2,
    icon: <GoBrowser />,
    title: 'Desarrollo Frontend',
    description:
      'Tecnología que aprendí en mi camino como desarrollador backend. Algunos de ellos son importantes en mi día a día, y otras estoy ansioso de volver usarlas.',
    knowledgeList:
      'HTML5, CSS3, Sass, JavaScript, JQuery, ReactJs, Angular, Shopify',
  },
  {
    id: 3,
    icon: <BsTerminal />,
    title: 'Desarrollo Backend & Otros',
    description:
      //'Technologies that I&apos;ve learned on my journey. Some of them crucial on my day by day, others looking forward to using again.',
      'Mi rama principal, he trabajado principalmente como desarrollador backend y me fascina. Me gusta dar soluciones a los problemas que se presenta mediante el software',
    knowledgeList:
      'C#, Git, Github, JavaScript, NodeJs, Java, Python, PHP, MongoDB, PostgreSQL, MySQL, SQL Server',
  },
];

export default careerInfo;
