# paint
Copyright (c) 2019 Liam Wynn

A simple multi user painter program. Essentially, when the application is running, you connect to
a room where there is a blank white canvas. You can choose from among a few colors and start painting
with friends. Note that if users are already connected and paint before you join, you won't see their
changes. Like many things, this is a feature that needs to be added, which someday I'll get around to.

## Technologies and Libraries Currently Used in this Application
* Node and NPM
* Docker
* Express.js
* Socket.io

## Building and Running the Application
First, you need to have node and npm installed on your machine. When that is done,
first run the following command:

```
npm install
```

This will install all dependencies for this application (Namely Express and Socket.io). To run the application,
do:

```
npm start
```

If all goes according to plan, you should see the following:

```
Running server at 8080
```

Now load up your favorite browser and connect to `localhost:8080`. You are now ready to paint!

## Building and Running the Docker Container
First, make sure that Docker is installed and ready to rock on your machine.

### Building the Docker Image
Run the command:

```
docker image build -t multiuserpaint:1.0 .
```

This will build the container from the image. Next, to run the container do:

```
docker container run --publish 8080:8080 --detatch --name mup multiuserpaint:1.0
```

Now should you boot up your favorite browser and connect to `localhost:8080` you will now be connected!

To terminate the container, run:

```
docker container rm --force mup
```
