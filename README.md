# AirTicket Application Deployment

This repository contains a **frontend** and **backend** application, both containerized using Docker.
The project includes steps to build, test, and deploy these containers locally and automate the process using Jenkins for deployment to Azure Container Instances (ACI).

---

## Table of Contents


1. Containerization with Docker
2. Automation with Jenkins
3. Create Azure ACR
4. Deploy to Azure Container Instances (ACI)
   
   # Deploy ACI for Backend:
     az container create \
       --resource-group AirTicketResourceGroup \
       --name airticket-backend \
       --image airticketregistry.azurecr.io/airticket-backend:latest \
       --cpu 1 \
       --memory 1.5 \
       --ports 5000 \
       --ip-address Public

   # Deploy ACI for Frontend:
     az container create \
       --resource-group AirTicketResourceGroup \
       --name airticket-frontend \
       --image airticketregistry.azurecr.io/airticket-frontend:latest \
       --cpu 1 \
       --memory 1.5 \
       --ports 3000 \
       --ip-address Public

5. Monitoring with Grafana
   

