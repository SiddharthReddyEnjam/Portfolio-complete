from flask import Flask, request, jsonify
import random
from flask_cors import CORS  # Import CORS


application = Flask(__name__)
CORS(app)

# Predefined responses based on your resume
personal_responses = {
    "who are you": [
        "I am Siddharth Reddy Enjam, a graduate student pursuing a Master of Science in Engineering Data Science at the University of Houston, with a strong background in machine learning, full-stack development, and data analysis."
    ],
    "what is your expertise": [
        "I specialize in data science, machine learning, and full-stack development. My technical skills include Python, SQL, ReactJS, NodeJS, and cloud computing platforms like AWS."
    ],
    "what is your educational background": [
        "I have a Master of Science in Engineering Data Science from the University of Houston with a GPA of 3.89 and a Bachelor of Technology in Computer Science from KL University with a CGPA of 8.49."
    ],
    "what work experience do you have": [
        "I worked as a Big Data Engineer at Cognizant Technology Solutions, where I gained hands-on experience with the Hadoop ecosystem, Python, SQL, and real-time data management.",
        "I also interned at MuleSoft as a MuleSoft Developer, where I earned a Level-1 certification and became proficient in API-led connectivity using the Anypoint Platform."
    ],
    "what are your major projects": [
        "1. **Satellite Image Classification**: Built a web app using AWS and ResNet for high-accuracy satellite image categorization.",
        "2. **Countries of the World Analysis**: Visualized socio-economic patterns using Tableau.",
        "3. **Motion Capture Hand Postures**: Led a team to optimize machine learning models for hand posture recognition.",
        "4. **Hostel Outing Management System**: Developed an Android app with secure QR code-based access control for hostels."
    ],
    "do you have any certifications": [
        "Yes, I am a Google Cloud Certified Associate Cloud Engineer, MuleSoft Developer Level-1 Certified, and a ServiceNow Certified System Administrator."
    ],
    "where can I see your portfolio": [
        "You can explore my work on my portfolio site: [siddharthenjam.netlify.app](https://siddharthenjam.netlify.app/)."
    ]
}

# General conversation responses
general_responses = {
    "hi": ["Hello!", "Hi there!", "Hey! How can I help you?"],
    "how are you": ["I'm good, thank you! How about you?", "Doing great! Thanks for asking."],
    "tell me a joke": [
        "Why don't programmers like nature? It has too many bugs.",
        "Why do we tell actors to break a leg? Because every play has a cast!"
    ],
    "default": ["I'm not sure I understand. Can you ask something else?", "Hmm, tell me more!"]
}

# Function to get a response
def get_response(user_input):
    user_input = user_input.lower()  # Normalize input

    # Check personal responses first
    for key in personal_responses.keys():
        if key in user_input:
            return random.choice(personal_responses[key])
    
    # Check general responses if no personal match
    for key in general_responses.keys():
        if key in user_input:
            return random.choice(general_responses[key])

    # Default fallback
    return random.choice(general_responses["default"])

# Flask route to handle chatbot requests
@application.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_input = data.get('message', '')
    response = get_response(user_input)
    return jsonify({'response': response})

if __name__ == '__main__':
    application.run(debug=True)
