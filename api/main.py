from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model_architecture import CollaborativeFiltering
import random
import pandas as pd
import torch
import torch.nn as nn
import io

movie_indices = pd.read_csv("data/u.item", encoding='latin-1', delimiter='|',usecols=(0,1), names=('movie','title')) 


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def default():
    return {"message": "hi"}

@app.get("/getRandomMovie")
def getRandomMovie():
    movie_idx = random.choice(list(movie_indices["movie"]))
    return {"movie_idx": movie_idx, "title": movie_indices["title"][movie_idx-1]}


@app.get("/{query}")
def reccommendMovies(query: str):
    
    model = CollaborativeFiltering(943, 1682, 100)
    model.load_state_dict(torch.load("./model.pth", map_location=torch.device("cpu")))
    model.eval()
    movie_embedding = model.movie_factors.weight
    movie_idxs = query.split("_")
    embedding = torch.zeros(100)
    for idx in movie_idxs:
        embedding += movie_embedding[int(idx)]

    embedding = embedding / len(movie_idxs)
    distances = nn.CosineSimilarity(dim=1)(movie_embedding, embedding)

    preds_idxs = distances.argsort(descending=True)[:8]
    preds_idxs_filtered = [x for x in preds_idxs if str(x.item()) not in movie_idxs]
    preds = [movie_indices["title"][int(x.item()) - 1] for x in list(preds_idxs_filtered)]

    return {"movies": preds}
