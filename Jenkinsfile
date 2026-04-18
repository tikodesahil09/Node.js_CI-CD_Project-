pipeline {
    agent any

    environment {
        APP_NAME = "nodejs-cicd-app"
        CONTAINER_NAME = "nodejs-cicd-container"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/tikodesahil09/Node.js_CI-CD_Project-.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $APP_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop $CONTAINER_NAME || true'
                sh 'docker rm $CONTAINER_NAME || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name $CONTAINER_NAME $APP_NAME'
            }
        }

        stage('Verify Container') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
