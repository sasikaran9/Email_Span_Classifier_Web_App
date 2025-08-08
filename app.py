
from flask import Flask, request, jsonify
import joblib
import re

app = Flask(__name__)

# Load trained components
model = joblib.load("spam_model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    email_text = data.get("email", "")

    # Clean the input
    cleaned = re.sub(r"\W", " ", email_text)
    cleaned = re.sub(r"\s+", " ", cleaned)

    # Vectorize and predict
    features = vectorizer.transform([cleaned])
    prediction = model.predict(features)[0]

    return jsonify({"result": "SPAM" if prediction == 1 else "NOT SPAM"})

if __name__ == "__main__":
    app.run(debug=True)
