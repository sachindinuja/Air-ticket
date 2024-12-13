pipeline {
    agent any

    environment {
        DOCKER_HUB_REPO = "sachind01/airticket-test"  // Docker Hub repository prefix
    }

    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/sachindinuja/Air-ticket'
                }
            }
        }
        stage('Build Docker Images') {
            parallel {
                stage('Build Backend Image') {
                    steps {  
                        dir('backend') { 
                            bat 'docker build -t %DOCKER_HUB_REPO%-backend:%BUILD_NUMBER% .'
                        }
                    }
                }
                stage('Build Frontend Image') {
                    steps {
                        dir('frontend') { 
                            bat 'docker build -t %DOCKER_HUB_REPO%-frontend:%BUILD_NUMBER% .'
                        }
                    }
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
        stage('Push Docker Images') {
            parallel {
                stage('Push Backend Image') {
                    steps {
                        bat 'docker push %DOCKER_HUB_REPO%-backend:%BUILD_NUMBER%'
                    }
                }
                stage('Push Frontend Image') {
                    steps {
                        bat 'docker push %DOCKER_HUB_REPO%-frontend:%BUILD_NUMBER%'
                    }
                }
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}
