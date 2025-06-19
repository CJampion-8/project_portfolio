const projects = [
    {
        title: "Weather Dashboard",
        tools: [
            "React",
            "CSS", 
            <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">OpenWeather API</a>
            ],
        image: require("../images/weather_dashboard_preview.png"),
        description: "A modern, responsive weather application that provides real-time weather information with dynamic visual effects and animations.",
        link: "https://cjampion-8.github.io/weather_dashboard/",
        github: "https://github.com/CJampion-8/weather_dashboard"
    },
    {
        title: "BMI Calculator",
        tools: [
            "React",
            "CSS",
            <a href="https://rapidapi.com/principalapis/api/body-mass-index-bmi-calculator" target="_blank" rel="noreferrer">Rapid API</a>
        ],
        image: require("../images/bmi_calculator_preview.png"),
        description: "A responsive React application that calculates Body Mass Index using user input for height and weight. The application integrates with an external API for accurate calculations and provides a backup calculation method for reliability.",
        link: "https://cjampion-8.github.io/bmi_calculator/",
        github: "https://github.com/CJampion-8/bmi_calculator"
    },
    {
        title: "To-Do List",
        tools: [
            "JavaScript",
            "CSS"
        ],
        image: require("../images/to-do_list_preview.png"),
        description: "A to-do list application that allows users to add, edit, mark as complete and delete tasks. Users can also add their name to be personally greeted upon opening the app.",
        link: "https://github.com/CJampion-8/to-do_list",
        github: "https://github.com/CJampion-8/to-do_list"
        
    },

];

export default projects;