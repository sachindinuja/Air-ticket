variable "acr_name" {
  description = "Azure Container Registry Name"
}

variable "frontend_image" {
  description = "Frontend Docker image name"
}

variable "backend_image" {
  description = "Backend Docker image name"
}

variable "azure_region" {
  description = "Azure region for deployment"
  default     = "eastus"
}
