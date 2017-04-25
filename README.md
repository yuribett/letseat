# Let's Eat

### Let's Eat is an app to democrately decide where to eat with your friends

## Prerequisites

* NodeJS
* NPM

## Instalation

If it's your first time running, you must install the dependencies:

```bash
cd letseat
npm install
```

## Running

To get the app up and running, start the server from the root folder:

```bash
cd letseat
npm start
```

Service will be available at `http://localhost:3000`, or the default port of your environment for Node.js.

## Notes for DBServer and Pragma Team

- What are the highlights of your logic/code writing style?

Front-end is simple and fast. Rest API gives a lot of information pre-processed. Back-end is very well structed as an Rest API.

- What could have been done in a better way?

Front-end:
I would use more the power of directives and services in the front-end. As it is a very small project, I cannot reuse components, because they are all used only once. There isn't any kind of user auth. It was not required, but would be nice.

Back-end:
Altough the app mock the data, week winner restaurants could be dynamic. But as we are note using a database, it would take a little longer to process the "ranking" only with arrays. A database would fit perfectly in this case.

- Any other notes you judge relevant for the evaluation of your project.

Not so far, the project is very easy to run. Just reminding that user story 2 (week winners), the data is mock and can be found at `/app/data/winners.js`.

Looking forward to hearing from you and would appreciate your feedback about the code. 