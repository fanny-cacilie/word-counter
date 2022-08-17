# WORD COUNTER

This project aims to develop an application that given a text input submitted by a user, it returns the number of words contained in the text.

Follow the next steps to install and run the application using Docker containers.

If you'd like, it is possible to install and run the [backend application](./backend/README.md) and the [frontend application](./frontend/README.md) locally.

## Technologies

The application is developed with:

- [Docker]("https://www.docker.com/")
- [docker-compose]("https://docs.docker.com/compose/")

## Install and run the application

First, make sure you have <b>Docker</b> and <b>docker-compose</b> installed on your computer.

In the root directory of the project, run the following command to build the images, and create and run containers for the backend and frontend applications.

### `docker-compose up -d`

To avoid proxy errors, it may be necessary to update the proxy parameter, in package.json to point to the URL running in the backend container, such as http://word-counter-backend:5000.

It is possible to check the application running in the indicated URL of the frontend container.
