import React from "react";
import { Button } from 'react-bootstrap';
import './about.css'

import figma from '../../Assets/icon/figma.svg'
import gimp from '../../Assets/icon/gimp.png'
import bootstrap from '../../Assets/icon/bootstrap.svg'
import html5 from '../../Assets/icon/html5.svg'
import javascript from '../../Assets/icon/javascript.svg'
import typescript from '../../Assets/icon/typescript.svg'
import react from '../../Assets/icon/react.svg'
import node from '../../Assets/icon/nodejs.svg'
import express from '../../Assets/icon/express.svg'
import mysql from '../../Assets/icon/mysql.svg'
import python from '../../Assets/icon/python.svg'

import git from '../../Assets/icon/git.svg'
import github from '../../Assets/icon/github.svg'
import vscode from '../../Assets/icon/vscode.svg'
import postman from '../../Assets/icon/postman.svg'
import angular from '../../Assets/icon/angular.png'

const About = () => {
  const data = [
    {
      title: 'Language pratiqué'
      ,
      icons: [
        {
          name: "HTML5",
          icon: html5,
          link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        },
        {
            'name': 'Bootstrap',
            'icon': bootstrap,
            link: 'https://getbootstrap.com/'
        },
        {
            'name': 'JavaScript',
            'icon': javascript,
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
            'name': 'TypeScript',
            'icon': typescript,
            link: 'https://www.typescriptlang.org/'
        },
        {
            'name': 'Angular',
            'icon': angular,
            link: 'https://angular.io/'
        },
        {
            'name': 'React',
            'icon': react,
            link: 'https://react.dev/'
        },
        {
            'name': 'Node',
            'icon': node,
            link: 'https://nodejs.org/en/'
        },
        {
            'name': 'Express',
            'icon': express,
            link: 'https://expressjs.com/'
        },
        {
            'name': 'MySQL',
            'icon': mysql,
            link: 'https://www.mysql.com/'
        },
        {
            'name': 'Python',
            'icon': python,
            link: 'https://www.python.org/'
        },
      ],
    },
    {
		'title': 'Programme/outils utilisés',
		'icons': [
			{
				'name': 'Git',
				'icon': git,
				link: 'https://git-scm.com/'
			},
			{
				'name': 'Github',
				'icon': github,
				link: 'https://github.com/TommyRiquet'
			},
			{
				'name': 'VSCode',
				'icon': vscode,
				link: 'https://code.visualstudio.com/'
			},
			{
				'name': 'Postman',
				'icon': postman,
				link: 'https://www.postman.com/'
			},
			{
				'name': 'GIMP',
				'icon': gimp,
				link: 'https://www.gimp.org/'
			},
            {
                'name': 'Figma',
                'icon': figma,
                link: 'https://www.figma.com/'
            },
		]
	}
  ];
  return (
    <>
      <section id="about">
        <h1>About Me</h1>
        <div className="about-content">
          <div>
            {data.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                <div className="bouttons">
                  {item.icons.map((icon, idx) => (
                    <Button key={idx} href={icon.link} variant="primary" className="bouton">
                      <img src={icon.icon} alt={icon.name} />
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
