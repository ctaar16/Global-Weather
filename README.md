# Global-Weather

#### Description:

This weather application will provide current, past and future weather data to users.  This application can help individuals determine if the conditions warrant getting out of bed, which clothes to select, and how many layers to wear.

#### API and Data Sample
[https://openweathermap.org/current]
[api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3d555794e8bf23873faadec90a413459]

```JSON

{
    "coord": {
        "lon": -0.13,
        "lat": 51.51
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 295.11,
        "feels_like": 289.8,
        "temp_min": 293.71,
        "temp_max": 296.48,
        "pressure": 1016,
        "humidity": 43
    },
    "visibility": 10000,
    "wind": {
        "speed": 7.2,
        "deg": 90
    },
    "clouds": {
        "all": 98
    },
    "dt": 1600534153,
    "sys": {
        "type": 1,
        "id": 1414,
        "country": "GB",
        "sunrise": 1600494141,
        "sunset": 1600538770
    },
    "timezone": 3600,
    "id": 2643743,
    "name": "London",
    "cod": 200
}

```

# Wireframe

[https://www.figma.com/file/Vp7r6vm0B5Wt6mwhf6MzTv/Ski-Town-Weather-App]

#### MVP/PostMVP
##### MVP

Find and use an external api
Allow user to choose city/ski resort
Render data on page for user to review

##### Post MVP

Add more weather data such as current snowpack through a second API
Add additional imagery that coinicides with current weather status

#### Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Sept 21| Project Approval | Complete
|Sept 22| Core Application Structure (HTML, CSS, etc.) | Complete
|Sept 23| MVP | Complete
|Sept 24| Post MVP/Styling | Incomplete
|Sept 25| Presentations | Incomplete

#### Priority Matrix

[https://www.figma.com/file/iqYG1GjHXMd3im1LFMYadL/Ski-Town-Weather-Priority-Matrix]


#### Timeframes

Component	Priority	Estimated Time	Time Invested	Actual Time
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Core Code | H | 3hrs| 3hrs | 3hrs |
| HTML Additional Code | H | 3hrs| 3hrs | 3hrs |
| JS Core Code | H | 4hrs| 4hrs | 4hrs |
| JS Additional Code | H | 4hrs| 4hrs | 4hrs |
| CSS Core Styling | H | 4hrs| 4hrs | 4hrs |
| CSS Refining Styling | H | 3hrs| 3hrs | 3hrs |
| CSS Additional Styling | H | 4hrs| 4hrs | 4hrs |
| JS Debuging | H | 4hrs| 4hrs | 4hrs |
| HTML Debugging | H | 4hrs| 4hrs | 4hrs |was 
| CSS Debugging | H | 4hrs| 4hrs | 4hrs |
| Working with API | H | 3hrs| 3hrs | 3hrs |
| Total | H | 40hrs| 40hrs | 40hrs |


#### Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

I'm proud of all it, honestly!

#### Change Log

My original idea was to create a weather app specificially for ski resort locations. Afer further review, I determined it was better to include all locations to pull weather data from to be more inclusive to potential users.
