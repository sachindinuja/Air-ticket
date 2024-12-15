variable "frontend_image" {
  description = "Frontend Docker image name"
  default     = "airticketregistry.azurecr.io/airticketreservation-frontend:latest"
}

variable "backend_image" {
  description = "Backend Docker image name"
  default     = "airticketregistry.azurecr.io/airticketreservation-backend:latest"
}

variable "azure_region" {
  description = "Azure region for deployment"
  default     = "eastus"
}
