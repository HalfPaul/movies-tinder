# Movies Tinder
This application, built with NextJS and FastAPI, asks user's opinion about a selection of random films, then recommends user new films.
### Visit [Movies Tinder](https://movies-tinder-j6vj3j0ak-halfpaul.vercel.app/)
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
