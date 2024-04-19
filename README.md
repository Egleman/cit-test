This is the repo for tutorial in my blog post [Create Contact form with react and php](https://blog.bitsrc.io/how-to-build-a-contact-form-with-react-js-and-php-d5977c17fec0).

## Usage of complete project.

Please clone this repo and in the project root directory, Please run:

`docker-compose up --build -d`

Next step. Please run:

`docker exec -ti cit-vue /bin/sh`  
`npm i`  
`npm run dev` 

"If this commands doesn't work, You will need to install docker first"

Frontend will run in localhost:8090

Old way ( If you want to run without docker): 

Nodejs version 21 was used for development

### `npm install`

please go to the /frontend folder and run npm install to install all the nessery npm modules.

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:8090](http://localhost:8090) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Build this project for production.


#### .env

Token for server request and base URL for server requests in .env file