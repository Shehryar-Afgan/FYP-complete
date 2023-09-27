import pandas as pd
from fastapi import FastAPI
from pydantic import BaseModel
from sklearn.neighbors import KNeighborsClassifier

# Load the dataset
df = pd.read_csv('universities.csv')

# Define the features and target
X = df[['Metric marks', 'FSc Marks', 'Field', 'City']]
y = df['Name of Uni']

# Convert the categorical features into numerical features using one-hot encoding
X = pd.get_dummies(X)

# Calculate the merit score
X['Merit'] = (X['Metric marks'] / 1100 * 0.3) + (X['FSc Marks'] / 1100 * 0.7)

# Initialize the KNN model with the best parameters
best_params = {'n_neighbors': 5, 'weights': 'distance'}
knn = KNeighborsClassifier(**best_params)

# Fit the KNN model on the training set
knn.fit(X, y)

# Define the input schema for FastAPI
class InputData(BaseModel):
    metric_marks: int
    fsc_marks: int
    field: str
    city: str

# Create a FastAPI app
app = FastAPI()

# Define the prediction endpoint
@app.post("/predict")
def predict_university(data: InputData):
    # Create a dataframe for user input
    user_input = pd.DataFrame({'Metric marks': [data.metric_marks],
                               'FSc Marks': [data.fsc_marks],
                               'Field': [data.field],
                               'City': [data.city]})

    # Convert the categorical features into numerical features using one-hot encoding
    user_input = pd.get_dummies(user_input)

    # Reindex the user input dataframe to match the columns of the training data
    user_input = user_input.reindex(columns=X.columns, fill_value=0)

    # Calculate the merit score for user input
    user_input['Merit'] = (user_input['Metric marks'] / 1100 * 0.3) + (user_input['FSc Marks'] / 1100 * 0.7)

    # Predict the university for user input
    prediction = knn.predict(user_input)

    # Return the predicted university
    return {"predicted_university": prediction[0]}

# Run the FastAPI app
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
