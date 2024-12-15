provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "AirTicketRG"
  location = var.azure_region
}

resource "azurerm_container_group" "frontend" {
  name                = "airticket-frontend"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Linux"

  container {
    name   = "frontend"
    image  = var.frontend_image
    cpu    = "1"
    memory = "1.5"

    ports {
      port     = 80
      protocol = "TCP"
    }
  }

  ip_address_type = "Public"
  dns_name_label  = "airticketfrontendapp"
}

resource "azurerm_container_group" "backend" {
  name                = "airticket-backend"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Linux"

  container {
    name   = "backend"
    image  = var.backend_image
    cpu    = "1"
    memory = "1.5"

    ports {
      port     = 5000
      protocol = "TCP"
    }
  }

  ip_address_type = "Public"
  dns_name_label  = "airticketbackendapp"
}
