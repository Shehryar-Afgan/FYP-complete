from flask import Flask, request, jsonify
import pandas as pd
import os
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.impute import SimpleImputer
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)
print(os.getcwd())
df = pd.read_csv("./universities.csv")
# df = pd.read_csv('universities.csv')

# Define the features and target
X = df[['Metric marks', 'FSc Marks', 'Field', 'City']]
y = df['Name of Uni']
X = pd.get_dummies(X)
X = (X - X.min()) / (X.max() - X.min())
X['Merit'] = (X['Metric marks']/1100*0.3) + (X['FSc Marks']/1100*0.7)

# Create a POST route to receive user input and return the predicted university


@app.route('/predict_university', methods=['POST'])
@cross_origin(supports_credentials=True)
def predict_university():
    data = request.get_json()
    metric_marks = data['metric_marks']
    fsc_marks = data['fsc_marks']
    field = data['field']
    city = data['city']
    # Create a dataframe for user input
    user_input = pd.DataFrame({'Metric marks': [metric_marks], 'FSc Marks': [
                              fsc_marks], 'Field': [field], 'City': [city]})
    # Convert the categorical features into numerical features using one-hot encoding
    user_input = pd.get_dummies(user_input)
    user_input = user_input.reindex(columns=X.columns, fill_value=0)
    # Normalize the features
    user_input = (user_input - X.min()) / (X.max() - X.min())
    # Compute the merit score for user input
    user_input['Merit'] = (user_input['Metric marks'] /
                           1100*0.3) + (user_input['FSc Marks']/1100*0.7)
    imputer = SimpleImputer(strategy='mean')
    user_input_imputed = imputer.fit_transform(user_input)
    # Fit the KNN model
    # Split the data into training and testing sets

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.17, random_state=34)

    k = 5
    knn = KNeighborsClassifier(n_neighbors=k)
    knn.fit(X_train, y_train)
    # Predict the university for user input
    prediction = knn.predict(user_input_imputed)
    print(prediction)
    return jsonify({'predicted_university': prediction.tolist()})


if __name__ == '__main__':
    app.run(host="localhost", debug=True, port=9600)
