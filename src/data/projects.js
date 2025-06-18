const projects = [
    {
        title: "To-Do List",
        tools: [
            "JavaScript",
            "CSS"
        ],
        image: require("../images/temp.png"),
        description: "A to-do list application that allows users to add, edit, mark as complete and delete tasks. Users can also add their name to be personally greeted upon opening the app.",
        link: "https://github.com/CJampion-8/to-do_list"
        
    },
    {
        title: "BMI Calculator",
        tools: [
            "React",
            "CSS",
            <a href="https://rapidapi.com/principalapis/api/body-mass-index-bmi-calculator" target="_blank" rel="noreferrer">Rapid API</a>
        ],
        image: require("../images/temp.png"),
        description: "A BMI calculator that allows users to input their height and weight to calculate their Body Mass Index.",
        link: ""
    },
    {
        title: "Weather Dashboard",
        tools: [
            "React",
            "CSS", 
            <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">OpenWeather API</a>
            ],
        image: require("../images/temp.png"),
        description: "A weather dashboard that provides current weather information and forecasts for any city.",
        link: ""
    },

];

export default projects;