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
    for idx in movie_idxs:
        break

