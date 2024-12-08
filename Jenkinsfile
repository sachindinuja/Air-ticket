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
        // stage('Build Backend') {
        //     steps {
        //         dir('backend') {
        //             script {
        //                 def nodejs = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        //                 env.PATH = "${nodejs}\\bin;${env.PATH}"
        //             }
        //             // Use 'bat' for Windows commands
        //             bat 'npm install'
        //             bat 'npm run lint'
        //             bat 'npm test'
        //             bat 'docker build -t backend-app .'
        //         }
        //     }
        // }

        // stage('Build Frontend') {
        //     steps {
        //         dir('frontend') {
        //             script {
        //                 def nodejs = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        //                 env.PATH = "${nodejs}\\bin;${env.PATH}"
        //             }
        //             // Use 'bat' for Windows commands
        //             bat 'npm install'
        //             bat 'npm run build'
        //             bat 'docker build -t frontend-app .'
        //         }
        //     }
        // }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t sachind01/airticket-test:%BUILD_NUMBER% .'
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