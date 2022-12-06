from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model_architecture import CollaborativeFiltering
import random
import pandas as pd
import torch
import torch.nn as nn

movie_indices = pd.read_csv("data/u.item", encoding='latin-1', delimiter='|',usecols=(0,1), names=('movie','title')) 

model = torch.load("./model.pt", map_location ='cpu')
model.eval()
movie_embedding = model.movie_factors.weight
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/getRandomMovie")
def getRandomMovie():
    movie_idx = random.choice(list(movie_indices["movie"]))
    return {"movie_idx": movie_idx, "title": movie_indices["title"][movie_idx-1]}


@app.get("/{query}")
def reccommendMovies(query: str):
    movie_idxs = query.split("_")
    embedding = torch.zeros(100)
    for idx in movie_idxs:
        embedding += movie_embedding[int(idx)]
        
    embedding = embedding / len(movie_idxs)
    distances = nn.CosineSimilarity(dim=1)(movie_embedding, embedding)

    preds_idxs = distances.argsort(descending=True)[:5]
    preds = preds_idxs.apply(lambda x: movie_indices[x-1])

    return {"movies": preds}