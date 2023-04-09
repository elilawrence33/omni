# Omni Installation Guide
As of now there are no binary version of the application and it must be ran from souce code. 

## Installing Python
1. Install python verson 3
2. Windows: `choco install python --pre`
2. Linux(Debian): `sudo apt-get install python3`

## Installing Required Modules
### Pip
1. Install pip (Python package manager)
2. Windows: `choco install pip`
2. Linux(Debian): `apt install python3-pip`

### NLTK
1. Run the following command in terminal: `pip install --user -U nltk`

### Numpy
1. Run the following command in terminal: `pip install --user -U numpy`

### TensorFlow
1. Run the following command in terminal: `pip install tensorflow==2.12.`

### Keras 
1. Run the following command in terminal: `pip install keras`

### Flask
1. Run the following command in terminal: `pip install Flask`

## Starting the Servers

1. Once all of the packages have been installed we simply need to start the front-end and back-end servers. 
2. Run the following command to start both servers: `npm start`
2. The command in the `package.json` will run both the Python server first using to expose the AI via API and the second command with open a front-end server at `localhost:3000`. Navigate there to begin interacting with Omni!

