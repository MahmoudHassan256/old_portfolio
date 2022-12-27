export const skillsArray = [

    {
        name: "react",
        percentage: "95%",
    },
    {
        name: "javascript",
        percentage: "95%",
    },
    {
        name: "typescript",
        percentage: "85%",
    },
    {
        name: "c",
        percentage: "87%",
    },
    {
        name: "c++",
        percentage: "90%",
    },

    {
        name: "java",
        percentage: "80%",
    }
]

export const projectsArray = [
        {
        name: "PokeDex",
        link: "github:https://github.com/MahmoudHassan256/pokedex.git",
        about: "React App about Pokemons which takes data from an api and show them in cards this was my first project handeling api and css advanced",
        id:0,
    },
    {
        name: "Traveling During Covid",
        link: "github_FrontEnd:https://github.com/MahmoudHassan256/travel-during-covid-frontend.git\ngithub_BackEnd:https://github.com/MahmoudHassan256/travel-during-covid-backend.git",
        about: "End project for uni that envolves doing a traveling agency with flights data and also data about covid we didnt use flights api because it cost so we made a whole (fake) flights data and we update them throughtout admin controll",
        id:1,
    },    
    {
        name: "Epicure",
        link: "github_FrontEnd:https://github.com/MahmoudHassan256/epicure-moveo-frontend.git\ngithub_BackEnd:https://github.com/MahmoudHassan256/epicure-moveo-backend.git",
        about: "React typescript project that handels Restaurants from Tel-Aviv envolves alot of focusing on css to fulfill the UI designer and with alot of funcualities with login\signup fetures and data base using mongoDB",
        id:2,
    },
]

export const experiencesArray = [
    {
        name: "ComputerScience student",
        place: "Uni of Haifa",
        yearOfStart: "2018",
        yearOfEnd: "2023",
        about: "The Department of Computer Science at the University of Haifa combines internationally-acclaimed research with excellence in education.\nResearch areas include both theory of computer science and application domains. Faculty members publish in the best international venues, and consistently win awards and research grants. The Department also benefits from the support of the Caesarea Rothschild Institute for Interdisciplinary Applications of Computer Science.",
    },
    {
        name: "Mathmatics student",
        place: "Uni of Haifa",
        yearOfStart: "2018",
        yearOfEnd: "2023",
        about: "The Department of Mathematics at the University of Haifa was founded in the mid 70’s. The faculty is engaged in world-class research in both pure and applied Mathematics. The research interests of our faculty include algebra, geometry and topology, combinatorics, analysis, applied mathematics, logic, number theory, and theoretical computer science. The Center for Computational Mathematics and Scientific Computing (CMSC) was founded at the department in 2001. Since then it supports a large variety of research activities, conferences, special lecture series, workshops, etc.",
    },
    {
        name: "Full-Stack Bootcamp",
        place: "tsohpen+moveo",
        yearOfStart: "2022",
        yearOfEnd: "2022",
        about: "practical training course operated by Tsofen organization, in cooperation with Moveo\nSkills, totaling 340 academic hours + 80 academic hours on project at home, including:\n1. Technologies: React and Node.js with MongoDB, managing project versions with Git\n2. Methodology: Working by Agile backlog priority, experience with teamwork including\nworking with QA, UI/UX designer and product manager, using Figma for design assets\n3. Project: product first version, responsive web application that manages information\nregarding top restaurants in Tel Aviv. The application is based on a real product and\nincludes standard features relevant for the industry",
    },

]
export interface skillData {
    name: string,
    percentage: string,
}
export interface experienceData {
    name: string,
    place: string,
    yearOfStart: string,
    yearOfEnd: string,
    about: string,
}
export interface projectData{
    name:string,
    link:string,
    about:string,
    id:number,
}