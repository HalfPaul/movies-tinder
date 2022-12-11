# Movies Tinder
This application, built with NextJS and FastAPI, asks user's opinion about a selection of random films, then recommends user new films.
## How to run client
``` 
cd client 
docker build -t movies_tinder_client .
docker run -p 3000:3000 movies_tinder_client
```

## How to run API
``` 
cd api 
docker build -t movies_tinder_api .
docker run -p 3000:3000 movies_tinder_api
```
