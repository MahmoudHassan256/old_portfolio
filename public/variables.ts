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
        link: "github",
        about: "",
        id:0,
    },
    {
        name: "Traveling During Covid",
        link: "github",
        about: "",
        id:1,
    },    
    {
        name: "Epicure",
        link: "github",
        about: "",
        id:2,
    },
]

export const experiencesArray = [
    {
        name: "ComputerScience student",
        place: "Uni of Haifa",
        yearOfStart: "2018",
        yearOfEnd: "2023",
        about: "",
    },
    {
        name: "Mathmatics student",
        place: "Uni of Haifa",
        yearOfStart: "2018",
        yearOfEnd: "2023",
        about: "",
    },
    {
        name: "Full-Stack Bootcamp",
        place: "tsohpen+moveo",
        yearOfStart: "2022",
        yearOfEnd: "2022",
        about: "",
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