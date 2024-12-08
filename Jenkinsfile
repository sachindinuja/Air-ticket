pipeline {
    agent any
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/sachindinuja/Air-ticket'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                // Ensure the correct directory is used for docker build
                dir('backend') { // Change 'backend' to the folder where your Dockerfile exists
                    bat 'docker build -t sachind01/airticket-test:%BUILD_NUMBER% .'
                }
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'test-dockerid', variable: 'test-dockerhubpass')]) {
                    script {
                        bat "docker login -u sachind01 -p %test-dockerhubpass%"
                    }
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push sachind01/airticket-test:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}
