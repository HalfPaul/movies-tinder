import torch.nn as nn


class CollaborativeFiltering(nn.Module):
    def __init__(self, n_users, n_movies, n_factors):
        super().__init__()
        self.user_factors = nn.Embedding(n_users+1, n_factors)
        self.user_bias = nn.Embedding(n_users+1, 1)
        self.movie_factors = nn.Embedding(n_movies+1, n_factors)
        self.movie_bias = nn.Embedding(n_movies+1, 1)
    def forward(self, x):
        embeddings = self.user_factors(x[:,0]), self.movie_factors(x[:,1])
        out = (self.user_factors(x[:,0]) * self.movie_factors(x[:,1])).sum(dim=1)

        out += self.user_bias(x[:,0]).squeeze(dim=1) + self.movie_bias(x[:,1]).squeeze(dim=1)
        return out