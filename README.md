# WORD COUNTER

This project aims to develop a application that given an text input submitted by an user, it returns the number of words contained in the text.

Follow the next steps to install and run the application using Docker containers.

If you'd like, it is possible to install and run the [backend application](./backend/README.md) and the [frontend application](./frontend/README.md) locally.

## Technologies

The application is developed with:

- [Docker]("https://www.docker.com/")
- [docker-compose]("https://docs.docker.com/compose/")

## Install and run the application

First, make sure you have <b>Docker</b> and <b>docker-compose</b> installed in your computer.

In the root directory of the project, run the following command to build the images, create and run containers for backend and frontend.

### `docker-compose up -d`

To avoid proxy errors, it may be necessary to update the proxy parameter, in [package.json](./frontend/package.json) to the backend URL running in the container, such as: http://word-counter-backend:5000.

It is possible to check the application running in the indicated URL of the frontend container.
