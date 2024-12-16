pipeline {
    agent any

    environment {
        ACR_REPO = "airticketregistry.azurecr.io"           // ACR repository
        RESOURCE_GROUP = "AirTicketResourceGroup"           // Azure resource group
        AZURE_REGION = "eastus"                             // Azure region
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
                            sh 'docker build -t $ACR_REPO/airticketreservation-backend:latest .'
                        }
                    }
                }
                stage('Build Frontend Image') {
                    steps {
                        dir('frontend') {
                            sh 'docker build -t $ACR_REPO/airticketreservation-frontend:latest .'
                        }
                    }
                }
            }
        }

        stage('Push Docker Images to ACR') {
            parallel {
                stage('Push Backend Image') {
                    steps {
                        withCredentials([usernamePassword(credentialsId: 'azure-acr', usernameVariable: 'ACR_USER', passwordVariable: 'ACR_PASS')]) {
                            sh '''
                            docker login $ACR_REPO -u $ACR_USER -p $ACR_PASS
                            docker push $ACR_REPO/airticketreservation-backend:latest
                            '''
                        }
                    }
                }
                stage('Push Frontend Image') {
                    steps {
                        withCredentials([usernamePassword(credentialsId: 'azure-acr', usernameVariable: 'ACR_USER', passwordVariable: 'ACR_PASS')]) {
                            sh '''
                            docker login $ACR_REPO -u $ACR_USER -p $ACR_PASS
                            docker push $ACR_REPO/airticketreservation-frontend:latest
                            '''
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline completed. Docker images pushed to ACR."
        }
    }
}
