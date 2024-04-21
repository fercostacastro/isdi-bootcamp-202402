# Crossfit App

## Intro

Generates a ramdom WOD (workout of the day)

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3J1cDE1cTRncWt5N3R5dXp4OTZneThscjB5ZWdncjhyZnA4Nm9jZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iw3QWgT77aC1G/giphy.gif)

## Functional Description

### Use Cases

- generate a random WOD for 1 hour (including warm-up, exercises and streching)
- user can select the type of WOD (5 buttons)
- WOD's can be: benchmarks, WOD, WOD-upper body, WOD-lower body and Endurance
- register the results on the same page: number of reps and time

### UI Design

[Figma](https://www.figma.com/file/3OltEB5b7NN6zsWroZYvAo/Final-Project?type=design&node-id=0-1&mode=design&t=rUwtKfIJrp6PGkwF-0)

## Technical Description

### Modules

- api (server logic)
- app (client interface)
- com (common utils, tools)

### Technologies

- TypeScript
- React
- Express
- Node
- Tailwind
- Mongo

### Data Model

User
- id (required)
- name (string, required)
- birthdate (date, required)
- email (string, required)
- password (string, required)

Exercise
- id (required)
- image (string, required)
- weight (float, optional)
- status (string, required)
- result (null, done)
