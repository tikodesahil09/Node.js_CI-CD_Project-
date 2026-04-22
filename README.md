📘🚀 Node.js CI/CD Pipeline using Jenkins, Docker & AWS EC2 

A production-style CI/CD pipeline project that automates the build and deployment of a Node.js application using Jenkins and Docker on AWS EC2. 
	Whenever code is pushed to GitHub, Jenkins automatically builds a Docker image, stops the old container, runs a new container, and deploys the updated application. 

🚀 Project Overview 

This project demonstrates a complete DevOps workflow including: 
  -Version Control using Git & GitHub  
  -Continuous Integration using Jenkins  
  -Containerization using Docker  
  -Continuous Deployment on AWS EC2  
  -Automated pipeline execution  



🏗️ Architecture Diagram (Workflow) 

Developer → GitHub → Jenkins → Docker → AWS EC2 → Application 

Pipeline Flow: 

Code Push 
  ↓ 
Jenkins Pipeline Triggered 
  ↓ 
Build Docker Image 
  ↓ 
Stop Old Container 
  ↓ 
Run New Container 
  ↓ 
Verify Deployment 

 

🛠️ Technologies Used 

  - Node.js
  - Docker
  - Jenkins
  - AWS EC2
  - Git
  - GitHub
  - Linux (Ubuntu)  



📂 Project Structure 

Node.js_CI-CD_Project- 
│ 
├── public/ 
│   └── index.html 
│ 
├── Dockerfile 
├── Jenkinsfile 
├── package.json 
├── package-lock.json 
├── server.js 
├── .gitignore 
└── README.md 

 

⚙️ Jenkins Pipeline Stages 

1. Checkout SCM 
2. Checkout Code 
3. Build Docker Image 
4. Stop Old Container 
5. Run New Container 
6. Verify Container



☁️ AWS EC2 Configuration 

Instance Details: 
  - Instance Type: t3.small 
  - Operating System: Ubuntu 
  - Cloud Provider: AWS EC2 

 

🔓 Security Group Ports 

    Port     Purpose 
     
    22       SSH 
    8080     Jenkins 
    3000     Node.js Application 
    80       HTTP 

 

🚀 How to Run This Project 

Step 1 :-
Launch EC2 Instance 
  -Create Ubuntu EC2 instance 
  -Connect using SSH 


Step 2 :-
Install Required Tools 
  -sudo apt update 
  -sudo apt install docker.io -y 
  -sudo apt install git -y 


Step 3 :-
Install Jenkins 
  -sudo apt update
  -sudo apt install fontconfig openjdk-21-jre
  -java -version

  -sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
    https://pkg.jenkins.io/debian-stable/jenkins.io-2026.key
  -echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc]" \
    https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
    /etc/apt/sources.list.d/jenkins.list > /dev/null
  -sudo apt update
  -sudo apt install jenkins

  
Step 4 :-
Start Services 
  -sudo systemctl start docker 
  -sudo systemctl enable docker 
   
  -sudo systemctl start jenkins 
  -sudo systemctl enable jenkins 


Step 5 — Access Jenkins 
    http://100.26.179.29:8080 


Step 6 — Create Jenkins Pipeline 

1.New Item 
2.Pipeline 
3.Add GitHub Repository 
4.Add Jenkinsfile 
5.Build Now 
 

🌐 Application Access 
    - http://PUBLIC-IP:3000 
Example:    http://100.26.179.29:3000



📸 Project Screenshots

GitHub Repository
screenshots/github.png
Jenkins Pipeline
screenshots/pipeline.png
Docker Container
screenshots/container.png
Application Running
screenshots/application.png



🔄 CI/CD Workflow

Developer pushes code to GitHub
        ↓
Jenkins detects changes
        ↓
Docker image is built
        ↓
Old container is stopped
        ↓
New container is deployed
        ↓
Application runs automatically



📌 Key Features

  - Automated CI/CD pipeline
  - Docker container deployment
  - Zero manual deployment
  - Fast and reliable releases
  - Production-style workflow



🎯 Learning Outcomes

This project helped me understand:
1) CI/CD pipeline automation
2) Docker containerization
3) Jenkins pipeline configuration
4) AWS EC2 deployment
5) DevOps workflow implementation



👨‍💻 Author
Name: Sahil Tikode
Role: DevOps Engineer (Fresher)
Skills: Docker | Jenkins | AWS | Linux | Git | CI/CD



⭐ If you found this project useful
Give it a Star on GitHub 😅
