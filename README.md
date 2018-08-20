# Introduction

This application is built for showing the usage of IRIS Oauth service integration with 3rd party applications.
This is a Demo application with 2 major screens(views) :
- Home screen with login option
- Profile page which appears after login

# Installation and Usage

- Unzip the Repo :
```
    tar xf Task_1.tar.gz
```

- Start a virtualenv
```
    virtualenv -p python3 Env
    source Env/bin/activate
```

- change dir into the folder named irisoauth and be in the directory where `manage.py` file is located.

- install all the dependencies
```
    pip install -r requirements.txt
```

- Make migrations and start the server for testing
```
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runsslserver
```

- The Above steps starts the SSL server(with https) on localhost:8000. Go to `https://localhost:8000/` in your browser(preferably chrome)
- If you get an error regrading the ssl certificate, Ignore the error and goto advanced and proceed to unsafe `https://localhost:8000` or add the certificate to trusted sources in the browser settings. This error is because of the self signed certificate being used.

- Now if everything worked fine then you should see a home screen with a login button.
Just login and follow the OAuth Login flow.

# Features implemented

- OAuth2.0 API Authorization code flow for IRIS AUTH Server being tested
- Made use of RESTful APIs to handle Callback. The template are included in the backend itself but can be easily seperated out by changing the redirect URL.
Hence follows the web 2.0 architechture of RESTful backend and frontend communication.
- Runs on a self-signed SSL Certificate.
- Feature to login and logout from the third party application.

# References used

- IRIS Oauth API Docs
- Python `requests` library

# Author

- Nisarg S. Joshi
