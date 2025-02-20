# backend/ml/sentiment.py
from transformers import pipeline

classifier = pipeline("sentiment-analysis")

def analyze_sentiment(text):
    return classifier(text)