import c from '../../Assets/icon/c.svg'
import angular from '../../Assets/icon/angular.png'
import AP from '../../Assets/AP.jpg'
import Cyber from '../../Assets/CyberSec.png'
import CTF from '../../Assets/CTF.png'
import Hack from '../../Assets/Hackaton.jpg'
import cyberPreuve from '../../Assets/cybersec.jpg'
import cPreuve from '../../Assets/c.PNG'
import angularPreuve from '../../Assets/angular.PNG'
import angularPreuve2 from '../../Assets/angular2.PNG'


const DTO = [
    {
        NOM: "Hackathon",
        TIME_DONE: "48h",
        TIME_VALIDATED: "10h",
        THEME: "Développemnt",
        DESC: "Lors d'un weekend fin d'année 2021, un hackaton a été organizé par l'Ephec avec comme thème le développement durable. Nous avons travaillé par 4,"
            +"chaque groupe a développé ses idées. Pour ma part dans mon groupe nous avions décidé de faire une nouvelle page sur le site de l'EPHEC qui permettrait de revendre ces livres"
            +" en seconde main a d'autre élève de l'école. Notre idée a été élu numéro un car c'était l'idée la plus concrète et réalisable",
        IMAGE: Hack,
        PREUVE:"",
    },{
        NOM: "CTF Ephec",
        TIME_DONE: "10h",
        TIME_VALIDATED: "10h",
        THEME: "Sécurité",
        DESC: "J'ai pu participer à un capture the flag qui a pris place à l'Ephec. Celui-ci a été organiser par 2 étudiants dans le cadre de leur Travail de fin d'études.",
        IMAGE: CTF,
        PREUVE:"",
    }
    ,{
        NOM: "Cybersec Europe",
        TIME_DONE: "10h",
        TIME_VALIDATED: "10h",
        THEME: "Sécurité",
        DESC: "Le 19 et 20 Avril se déroulaient le Cybersec Europe. Cette convention réunit un grand nombre d'entreprises et de personnalité liée à la cybersécurité. Des stands et des scènes étaient présents pour présenter different topic autour des problématiques de sécurité et d'éthique récente.",
        IMAGE: Cyber,
        PREUVE:<a href={cyberPreuve} target='_blank' rel='noreferrer'>1</a>,
    }
    ,{
        NOM: "L'Affaire Patterson",
        TIME_DONE: "36h",
        TIME_VALIDATED: "10h",
        THEME: "Acting",
        DESC: "Le projet de tournée dans un film m'a été présenter par Kevin Keurvels un autre étudiant de l'Ephec. Trouvant cela une expérience enrichissante j'ai bien sûr accepté de participer à ce projet.",
        IMAGE: AP,
        PREUVE:"",
    }
    ,{
        NOM: "Formation en C#",
        TIME_DONE: "17h",
        TIME_VALIDATED: "10h",
        THEME: "Développemnt",
        DESC: "Pour ma découverte personnelle et car je suis intéresser par explorer le .NET par la suite j'ai suivi cette formation en C#",
        IMAGE: c,
        PREUVE:<a href={cPreuve} target='_blank' rel='noreferrer'>1</a>,
    },{
        NOM: "Formation Angular",
        TIME_DONE: "18h",
        TIME_VALIDATED: "10h",
        THEME: "Développemnt",
        DESC: "Pour ma découvert personnelle et pour mon stage j'ai réalisé 2 formations en Angular.",
        IMAGE: angular,
        PREUVE:<><a href={angularPreuve} target='_blank' rel='noreferrer'>1</a> <span>,  </span> <a href={angularPreuve2} target='_blank' rel='noreferrer'>2</a></>,
    }]

export default DTO