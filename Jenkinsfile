pipeline {
    agent any

    environment {
        DOCKER_HUB_REPO = "AirTicketRegistry.azurecr.io"  // ACR repository
        TERRAFORM_DIR = "terraform"                      // Terraform directory
        AZURE_REGION = "eastus"                          // Azure region
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
                            bat 'docker build -t %DOCKER_HUB_REPO%/airticketreservation-backend:latest .'
                        }
                    }
                }
                stage('Build Frontend Image') {
                    steps {
                        dir('frontend') {
                            bat 'docker build -t %DOCKER_HUB_REPO%/airticketreservation-frontend:latest .'
                        }
                    }
                }
            }
        }

        stage('Push Docker Images to ACR') {
            parallel {
                stage('Push Backend Image') {
                    steps {
                        withCredentials([string(credentialsId: 'azure-acr', variable: 'ACR_PASS')]) {
                            bat '''
                            docker login %DOCKER_HUB_REPO% -u %DOCKER_HUB_REPO% -p %ACR_PASS%
                            docker push %DOCKER_HUB_REPO%/airticketreservation-backend:latest
                            '''
                        }
                    }
                }
                stage('Push Frontend Image') {
                    steps {
                        withCredentials([string(credentialsId: 'azure-acr', variable: 'ACR_PASS')]) {
                            bat '''
                            docker login %DOCKER_HUB_REPO% -u %DOCKER_HUB_REPO% -p %ACR_PASS%
                            docker push %DOCKER_HUB_REPO%/airticketreservation-frontend:latest
                            '''
                        }
                    }
                }
            }
        }

        stage('Prepare Terraform') {
            steps {
                dir(TERRAFORM_DIR) {
                    bat '''
                    terraform init
                    '''
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline completed. Run 'terraform apply' manually to deploy."
        }
    }
}
