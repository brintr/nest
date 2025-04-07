import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report
import joblib
import json
import os

class GamblingAdDetector:
    def __init__(self):
        self.vectorizer = TfidfVectorizer(
            max_features=5000,
            stop_words='english',
            ngram_range=(1, 2)
        )
        self.model = LogisticRegression(max_iter=1000)

    def load_data(self, normal_tweets_path, gambling_ads_path):
        """Load and combine the training data"""
        with open(normal_tweets_path, 'r', encoding='utf-8') as f:
            normal_tweets = json.load(f)
        with open(gambling_ads_path, 'r', encoding='utf-8') as f:
            gambling_ads = json.load(f)

        # Combine the data
        all_tweets = normal_tweets + gambling_ads
        df = pd.DataFrame(all_tweets)
        
        return df

    def preprocess_data(self, df):
        """Prepare the data for training"""
        X = self.vectorizer.fit_transform(df['text'])
        y = df['is_ad']
        return X, y

    def train(self, X, y):
        """Train the model"""
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42
        )
        
        self.model.fit(X_train, y_train)
        
        # Evaluate the model
        y_pred = self.model.predict(X_test)
        print(classification_report(y_test, y_pred))
        
        return self.model

    def save_model(self, model_path, vectorizer_path):
        """Save the trained model and vectorizer"""
        os.makedirs(os.path.dirname(model_path), exist_ok=True)
        joblib.dump(self.model, model_path)
        joblib.dump(self.vectorizer, vectorizer_path)

def main():
    # Initialize the detector
    detector = GamblingAdDetector()
    
    # Load the data
    df = detector.load_data(
        'ml/data/normal_tweets.json',
        'ml/data/gambling_ads.json'
    )
    
    # Preprocess and train
    X, y = detector.preprocess_data(df)
    detector.train(X, y)
    
    # Save the model
    detector.save_model(
        'ml/models/gambling_ad_detector.joblib',
        'ml/models/vectorizer.joblib'
    )

if __name__ == "__main__":
    main() 