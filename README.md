# paint
Copyright (c) 2019 Liam Wynn

A simple multi user painter program. Essentially, when the application is running, you connect to
a room where there is a blank white canvas. You can choose from among a few colors and start painting
with friends. 

## Building and Running the Docker Container
The application has it hardcoded to listen on port 8080. I know this is arbitrary, and I should fix it.
But anyways, with this assumption in mind, we simply do the following

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
