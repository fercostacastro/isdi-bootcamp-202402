# Crossfit App

## Intro

Generates a ramdom WOD (workout of the day)

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3J1cDE1cTRncWt5N3R5dXp4OTZneThscjB5ZWdncjhyZnA4Nm9jZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iw3QWgT77aC1G/giphy.gif)

## Functional Description

### Use Cases

- choose a type of WOD (Benchmarks, normal WOD, Strength and Endurance)
- start a random WOD for 1 hour (including warm-up, exercises and streching)
- mark WOD done
- register the results (number of reps and time by exercise of WOD)
- list stats (list of WOD results ordered by date descendant)


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
- MongoDB

### Data Model

User
- id (auto, required)
- name (string, required)
- email (string, required)
- password (string, required)

Wod
- id (auto, required)
- name (string, optional)
- parts ([Part], required)

Part
- id (auto, required)
- name (string, required)
- reps (number, optional)
- activities ([Activity], required)

Activity
- id (auto, required)
- name (string, optional)
- femaleWeight (number, optional)
- maleWeight (number, optional)
- reps (number, optional)
- time (number, optional)

WodReport
- id (auto, required)
- wod (Wod.id, required)
- user (User.id, required)
- parts ([PartReport], required)

PartReport
- id (auto, required)
- part (Part.id, required)
- activities ([ActivityReport])

ActivityReport
- id (auto, required)
- activity (Activity.id, required)
- femaleWeight (number, optional)
- maleWeight (number, optional)
- reps (number, optional)
- time (number, optional)