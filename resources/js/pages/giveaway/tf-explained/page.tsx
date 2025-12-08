import { ChangeEvent, FormEvent, useEffect, useState, useCallback, useMemo } from 'react';
import { usePage, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { Copy, Check, ChevronDown, ChevronRight } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { route } from "ziggy-js";

type ExplainedPageProps = {
    flash?: Record<string, string | null>;
    subscriber?: any;
};

const GuideContent = () => {
    const [copiedTab, setCopiedTab] = useState<string | null>(null);
    const [expandedLinks, setExpandedLinks] = useState<Record<string, boolean>>({});

    const tabs: TabContent[] = [
        {
            id: 'providers',
            label: 'providers.tf',
            description: `The steps below will take you through installing the Azure and Terraform CLI's, authenticating to Azure via CLI, and initializing a connection to Azure using the Terraform provider for Azure. Start by installing the CLI tools, then copying the terraform code to a local file before initializing the workspace.`,
            links: [
                { label: 'Azure CLI', url: 'https://learn.microsoft.com/en-us/cli/azure/install-azure-cli' },
                { label: 'Terraform CLI', url: 'https://learn.hashicorp.com/terraform/getting-started/install' },
                { label: 'Terraform Providers Registry', url: 'https://registry.terraform.io/browse/providers' },
                { label: 'Terraform Provider for Azure', url: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest' },
                { label: '`terraform init` Command Reference', url: 'https://www.terraform.io/cli/commands/init' },
            ],
            code: [
                { code: `brew update && brew install azure-cli`, label: 'CLI' },
                { code: `brew tap hashicorp/tap
brew install hashicorp/tap/terraform`, label: 'CLI' },
                { code: `az login`, label: 'CLI' },
                { code: `terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "4.53.0"
    }
  }
}

provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
}`, label: 'providers.tf' },
                { code: `terraform init`, label: 'CLI' },
            ],
        },
        {
            id: 'data',
            label: 'data.tf',
            description: 'Add this file to define the data sources for your Terraform project. Data defined here is obtained from existing sources and can be used to populate attributes of new resources in your Terraform code. If comparing to an API request, think of it like a `GET`. Run a `terraform plan` to see your data being read in real time.',
            links: [
                { label: 'Terraform Data Source: Azure Resource Group', url: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/resource_group' },
                { label: 'Terraform Data Source: Azure Client Config', url: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/client_config' },
            ],
            code: [
                { code: `data "azurerm_client_config" "current" {}

data "azurerm_resource_group" "rg" {
  name = var.rg_name
}`, label: 'data.tf' },
                { code: `terraform plan`, label: 'CLI' },
            ]
        },
        {
            id: 'main',
            label: 'main.tf',
            description: 'This file contains the main resources that are used to create the infrastructure for your project. This example demonstrates using a Terraform module to create an Azure Key Vault, which allows you to encapsulate and reuse infrastructure code. Run a `terraform plan` to see the expected resources to be created, `terraform apply` to create the resources, and `terraform destroy` to remove them.',
            links: [
                { label: 'Terraform Resource: Azure Key Vault Secret', url: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/key_vault_secret' },
                { label: 'Terraform Module Block', url: 'https://developer.hashicorp.com/terraform/language/block/module' },
                { label: 'Terraform Module Sources', url: 'https://developer.hashicorp.com/terraform/language/modules/configuration' },
                { label: 'Terraform Apply', url: 'https://developer.hashicorp.com/terraform/cli/commands/apply' },
                { label: 'Terraform Destroy', url: 'https://developer.hashicorp.com/terraform/cli/commands/destroy' },
            ],
            code: [
                {
                label: 'main.tf', code: `module "akv" {
  source = "./modules/akv"

  rg_name         = var.rg_name
  sku             = var.sku
  project_name    = var.project_name
  environment     = var.environment
  cost_center     = var.cost_center
  owner           = var.owner
  business_unit   = var.business_unit
  certificate_permissions = var.certificate_permissions
  key_permissions = var.key_permissions
  secret_permissions = var.secret_permissions
  storage_permissions = var.storage_permissions

  providers = {
    azurerm = azurerm
  }

}

resource "azurerm_key_vault_secret" "secret_1" {
  name         = "\${module.akv.akv.name}-sauce-1"
  value        = "szechuan"
  key_vault_id = module.akv.akv.id
}

resource "azurerm_key_vault_secret" "secret_2" {
  depends_on = [ azurerm_key_vault_secret.secret_1 ]
  name         = "\${module.akv.akv.name}-sauce-2"
  value        = "mayo"
  key_vault_id = module.akv.akv.id
}
`           },
                { code: `terraform plan`, label: 'CLI' },
                { code: `terraform apply`, label: 'CLI' },
                { code: `terraform destroy`, label: 'CLI' },
            ]
        },
        {
            id: 'variables',
            label: 'variables.tf',
            description: 'This file is used to define the variables for your Terraform project. Variables are used to store values that are used throughout your Terraform code.',
            links: [
                { label: 'Terraform Variables', url: 'https://developer.hashicorp.com/terraform/language/values/variables' },
                { label: 'Terraform Variable Block', url: 'https://developer.hashicorp.com/terraform/language/block/variable' },
            ],
            code: [{
                label: 'variables.tf', code: `variable "subscription_id" {
  description = "The subscription ID for the Azure provider"
  type        = string
}

variable "rg_name" {
  description = "The name of the resource group"
  type        = string

  validation {
    condition     = length(var.rg_name) > 0
    error_message = "The resource group name must not be empty."
  }

  validation {
    condition     = startswith(var.rg_name, "RG-")
    error_message = "The resource group name must start with 'RG-'."
  }
}

variable "project_name" {
  description = "The name of the project, abbreviated"
  type = string

  validation {
    condition = length(var.project_name) == 3
    error_message = "The project name must be 3 characters long."
  }

  validation {
    condition = lower(var.project_name) == var.project_name
    error_message = "The project name must be in all lower case."
  }
}

variable "environment" {
  description = "The name of the environment"
  type = string

  validation {
    condition = contains(["dev", "tst", "prd"], var.environment)
    error_message = "The environment must be one of 'dev', 'tst', or 'prd'."
  }
}

variable "sku" {
    description = "The SKU for the resources"
    type        = string
    default     = "standard"

    validation {
        condition     = contains(["standard", "premium"], var.sku)
        error_message = "The SKU must be either 'standard' or 'premium'."
    }
}

variable "certificate_permissions" {
  description = "List of key permissions for the key vault access policy"
  type        = list(string)
  validation {
    condition     = alltrue([for p in var.certificate_permissions : contains(["Backup", "Create", "Delete", "DeleteIssuers", "Get", "GetIssuers", "Import", "List", "ListIssuers", "ManageContacts", "ManageIssuers", "Purge", "Recover", "Restore", "SetIssuers", "Update"], p)])
    error_message = "Certificate permissions must be one of 'Backup', 'Create', 'Delete', 'DeleteIssuers', 'Get', 'GetIssuers', 'Import', 'List', 'ListIssuers', 'ManageContacts', 'ManageIssuers', 'Purge', 'Recover', 'Restore', 'SetIssuers', 'Update'."
  }

  validation {
    condition = length(var.certificate_permissions) == length(distinct(var.certificate_permissions))
    error_message = "Certificate permissions must not contain duplicate values."
  }
}

variable "key_permissions" {
  description = "List of key permissions for the key vault access policy"
  type        = list(string)

  validation {
    condition     = alltrue([for p in var.key_permissions : contains(["Backup", "Create", "Decrypt", "Delete", "Encrypt", "Get", "Import", "List", "Purge", "Recover", "Restore", "Sign", "UnwrapKey", "Update", "Verify", "WrapKey", "Release", "Rotate", "GetRotationPolicy", "SetRotationPolicy"], p)])
    error_message = "Key permissions must be one of 'Backup', 'Create', 'Decrypt', 'Delete', 'Encrypt', 'Get', 'Import', 'List', 'Purge', 'Recover', 'Restore', 'Sign', 'UnwrapKey', 'Update', 'Verify', 'WrapKey', 'Release', 'Rotate', 'GetRotationPolicy', or 'SetRotationPolicy'."
  }

  validation {
    condition = length(var.key_permissions) == length(distinct(var.key_permissions))
    error_message = "Key permissions must not contain duplicate values."
  }
}

variable "secret_permissions" {
  description = "List of secret permissions for the key vault access policy"
  type        = list(string)

  validation {
    condition     = alltrue([for p in var.secret_permissions : contains(["Backup", "Delete", "Get", "List", "Purge", "Recover", "Restore", "Set"], p)])
    error_message = "Secret permissions must be one of 'Backup', 'Delete', 'Get', 'List', 'Purge', 'Recover', 'Restore', or 'Set'."
  }

  validation {
    condition = length(var.secret_permissions) == length(distinct(var.secret_permissions))
    error_message = "Secret permissions must not contain duplicate values."
  }
}

variable "storage_permissions" {
  description = "List of storage permissions for the key vault access policy"
  type        = list(string)

  validation {
    condition     = alltrue([for p in var.storage_permissions : contains(["Backup", "Delete", "DeleteSAS", "Get", "GetSAS", "List", "ListSAS", "Purge", "Recover", "RegenerateKey", "Restore", "Set", "SetSAS", "Update"], p)])
    error_message = "Storage permissions must be one of 'Backup', 'Delete', 'DeleteSAS', 'Get', 'GetSAS', 'List', 'ListSAS', 'Purge', 'Recover', 'RegenerateKey', 'Restore', 'Set', 'SetSAS', or 'Update'."
  }

  validation {
    condition = length(var.storage_permissions) == length(distinct(var.storage_permissions))
    error_message = "Storage permissions must not contain duplicate values."
  }
}

variable "cost_center" {
  description = "The cost center tag value"
  type        = string

  validation {
    condition     = length(var.cost_center) > 0 && length(trimspace(var.cost_center)) <= 6
    error_message = "The cost center must be between 1 and 6 characters."
  }

  validation {
    condition = can(regex("^[0-9]+$", var.cost_center))
    error_message = "The cost center must only contain numeric characters."
  }
}

variable "owner" {
  description = "The owner of the application"
  type        = string

  validation {
    condition     = strcontains(var.owner, "@")
    error_message = "The owner must be a valid email address."
  }
}

variable "business_unit" {
  description = "The business unit tag value"
  type        = string

  validation {
    condition     = contains(["Finance", "HR", "IT", "Marketing", "Sales", "Operations"], var.business_unit)
    error_message = "The business unit must be one of 'Finance', 'HR', 'IT', 'Marketing', 'Sales', or 'Operations'."
  }
}`
            }]
        },
        {
            id: 'tfvars',
            label: 'demo.tfvars',
            description: 'This file is used to define the variables for your Terraform project. Variables are used to store values that are used throughout your Terraform code.',
            links: [],
            code: [{
                label: 'demo.tfvars', code: `rg_name = "RG-Terraform-Explained"
project_name = "dem"
environment = "dev"
sku = "standard"
cost_center = "123456"
owner = "shawn@theshawnshop.com"
business_unit = "IT"
certificate_permissions = [ "Get" ]
key_permissions = [ "Get" ]
secret_permissions = [ "Get", "List", "Set", "Delete" ]
storage_permissions = [ "Get" ]`
            }]
        },
        {
            id: 'module-locals',
            label: 'modules/akv/locals.tf',
            description: 'This file is used to define the local variables for your Terraform project. Local variables are used to store values that are used throughout your Terraform code. Tags are added to Azure resources to enable cost management, resource organization, governance, and automation. They help identify resources by project, environment, cost center, owner, and business unit, making it easier to track costs, apply policies, and manage resources at scale.',
            links: [
                { label: 'Terraform Local Variables', url: 'https://developer.hashicorp.com/terraform/language/values/locals' },
                { label: 'Terraform Local Block', url: 'https://developer.hashicorp.com/terraform/language/block/locals' },
                { label: 'Azure Tagging Guide', url: 'https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources' },
                { label: 'Azure Tagging Examples', url: 'https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-tagging#tag-examplesModule?' }
            ],
            code: [{
                label: 'locals.tf', code: `locals {
    key_vault_name = "akv\${var.project_name}\${var.environment}"

    tags = {
        Project      = var.project_name
        Environment  = var.environment
        CostCenter   = var.cost_center
        Owner        = var.owner
        BusinessUnit = var.business_unit
    }
}`
            }]
        },
        {
            id: 'module-data',
            label: 'modules/akv/data.tf',
            description: 'This file defines the data sources for the Azure Key Vault module. Data sources are used to fetch information from existing Azure resources.',
            links: [
                { label: 'Terraform Data Source: Azure Resource Group', url: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/resource_group' },
                { label: 'Terraform Data Source: Azure Client Config', url: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/client_config' },
            ],
            code: [{
                label: 'data.tf', code: `data "azurerm_client_config" "current" {}

data "azurerm_resource_group" "rg" {
  name = var.rg_name
}`
            }]
        },
        {
            id: 'module-main',
            label: 'modules/akv/main.tf',
            description: 'This file contains the main resource definition for the Azure Key Vault module. It creates the Key Vault resource with access policies, tags, and lifecycle management.',
            links: [
                { label: "Azure Key Vault", url: 'https://learn.microsoft.com/en-us/azure/key-vault/general/overview' },
                { label: 'Terraform Resource: Azure Key Vault', url: 'https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/key_vault' },
                { label: 'Terraform Lifecycle Block', url: 'https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle' },
            ],
            code: [{
                label: 'main.tf', code: `resource "azurerm_key_vault" "akv" {

  name                        = local.key_vault_name
  location                    = data.azurerm_resource_group.rg.location
  resource_group_name         = data.azurerm_resource_group.rg.name
  enabled_for_disk_encryption = true
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  soft_delete_retention_days  = 7
  purge_protection_enabled    = false
  sku_name = var.sku

  tags = local.tags

  access_policy {
    tenant_id = data.azurerm_client_config.current.tenant_id
    object_id = data.azurerm_client_config.current.object_id

    certificate_permissions = var.certificate_permissions
    key_permissions = var.key_permissions
    secret_permissions = var.secret_permissions
    storage_permissions = var.storage_permissions
  }

  lifecycle {
    ignore_changes = [
        tags
    ]
  }

}`
            }]
        },
        {
            id: 'module-outputs',
            label: 'modules/akv/outputs.tf',
            description: 'This file defines the outputs for the Azure Key Vault module. Outputs expose information about the module\'s resources that can be accessed by the parent module or displayed in CLI output.',
            links: [
                { label: 'Terraform Outputs Block', url: 'https://developer.hashicorp.com/terraform/language/block/output' },
            ],
            code: [{
                label: 'outputs.tf', code: `output "akv" {
    value = azurerm_key_vault.akv
}`
            }]
        },
        {
            id: 'module-variables',
            label: 'modules/akv/variables.tf',
            description: 'This file defines the variables for the Azure Key Vault module. These variables are used to configure the module and are passed in from the parent module.',
            links: [
                { label: 'Terraform Variables', url: 'https://developer.hashicorp.com/terraform/language/values/variables' },
                { label: 'Terraform Variable Block', url: 'https://developer.hashicorp.com/terraform/language/block/variable' },
            ],
            code: [{
                label: 'variables.tf', code: `variable "rg_name" {
  description = "The name of the resource group"
  type        = string

  validation {
    condition     = length(var.rg_name) > 0
    error_message = "The resource group name must not be empty."
  }

  validation {
    condition     = startswith(var.rg_name, "RG-")
    error_message = "The resource group name must start with 'RG-'."
  }
}

variable "project_name" {
  description = "The name of the project, abbreviated"
  type = string

  validation {
    condition = length(var.project_name) == 3
    error_message = "The project name must be 3 characters long."
  }

  validation {
    condition = lower(var.project_name) == var.project_name
    error_message = "The project name must be in all lower case."
  }
}

variable "environment" {
  description = "The name of the environment"
  type = string

  validation {
    condition = contains(["dev", "tst", "prd"], var.environment)
    error_message = "The environment must be one of 'dev', 'tst', or 'prd'."
  }
}

variable "sku" {
    description = "The SKU for the resources"
    type        = string
    default     = "standard"

    validation {
        condition     = contains(["standard", "premium"], var.sku)
        error_message = "The SKU must be either 'standard' or 'premium'."
    }
}

variable "certificate_permissions" {
  description = "List of key permissions for the key vault access policy"
  type        = list(string)
  validation {
    condition     = alltrue([for p in var.certificate_permissions : contains(["Backup", "Create", "Delete", "DeleteIssuers", "Get", "GetIssuers", "Import", "List", "ListIssuers", "ManageContacts", "ManageIssuers", "Purge", "Recover", "Restore", "SetIssuers", "Update"], p)])
    error_message = "Certificate permissions must be one of 'Backup', 'Create', 'Delete', 'DeleteIssuers', 'Get', 'GetIssuers', 'Import', 'List', 'ListIssuers', 'ManageContacts', 'ManageIssuers', 'Purge', 'Recover', 'Restore', 'SetIssuers', 'Update'."
  }

  validation {
    condition = length(var.certificate_permissions) == length(distinct(var.certificate_permissions))
    error_message = "Certificate permissions must not contain duplicate values."
  }
}

variable "key_permissions" {
  description = "List of key permissions for the key vault access policy"
  type        = list(string)
  validation {
    condition     = alltrue([for p in var.key_permissions : contains(["Backup", "Create", "Decrypt", "Delete", "Encrypt", "Get", "Import", "List", "Purge", "Recover", "Restore", "Sign", "UnwrapKey", "Update", "Verify", "WrapKey", "Release", "Rotate", "GetRotationPolicy", "SetRotationPolicy"], p)])
    error_message = "Key permissions must be one of 'Backup', 'Create', 'Decrypt', 'Delete', 'Encrypt', 'Get', 'Import', 'List', 'Purge', 'Recover', 'Restore', 'Sign', 'UnwrapKey', 'Update', 'Verify', 'WrapKey', 'Release', 'Rotate', 'GetRotationPolicy', or 'SetRotationPolicy'."
  }

  validation {
    condition = length(var.key_permissions) == length(distinct(var.key_permissions))
    error_message = "Key permissions must not contain duplicate values."
  }
}

variable "secret_permissions" {
  description = "List of secret permissions for the key vault access policy"
  type        = list(string)

  validation {
    condition     = alltrue([for p in var.secret_permissions : contains(["Backup", "Delete", "Get", "List", "Purge", "Recover", "Restore", "Set"], p)])
    error_message = "Secret permissions must be one of 'Backup', 'Delete', 'Get', 'List', 'Purge', 'Recover', 'Restore', or 'Set'."
  }

  validation {
    condition = length(var.secret_permissions) == length(distinct(var.secret_permissions))
    error_message = "Secret permissions must not contain duplicate values."
  }
}

variable "storage_permissions" {
  description = "List of storage permissions for the key vault access policy"
  type        = list(string)

  validation {
    condition     = alltrue([for p in var.storage_permissions : contains(["Backup", "Delete", "DeleteSAS", "Get", "GetSAS", "List", "ListSAS", "Purge", "Recover", "RegenerateKey", "Restore", "Set", "SetSAS", "Update"], p)])
    error_message = "Storage permissions must be one of 'Backup', 'Delete', 'DeleteSAS', 'Get', 'GetSAS', 'List', 'ListSAS', 'Purge', 'Recover', 'RegenerateKey', 'Restore', 'Set', 'SetSAS', or 'Update'."
  }

  validation {
    condition = length(var.storage_permissions) == length(distinct(var.storage_permissions))
    error_message = "Storage permissions must not contain duplicate values."
  }
}

variable "cost_center" {
  description = "The cost center tag value"
  type        = string

  validation {
    condition     = length(var.cost_center) > 0 && length(trimspace(var.cost_center)) <= 6
    error_message = "The cost center must be between 1 and 6 characters."
  }

  validation {
    condition = can(regex("^[0-9]+$", var.cost_center))
    error_message = "The cost center must only contain numeric characters."
  }
}

variable "owner" {
  description = "The owner of the application"
  type        = string

  validation {
    condition     = strcontains(var.owner, "@")
    error_message = "The owner must be a valid email address."
  }
}

variable "business_unit" {
  description = "The business unit tag value"
  type        = string

  validation {
    condition     = contains(["Finance", "HR", "IT", "Marketing", "Sales", "Operations"], var.business_unit)
    error_message = "The business unit must be one of 'Finance', 'HR', 'IT', 'Marketing', 'Sales', or 'Operations'."
  }
}`
            }]
        },
        {
            id: 'test',
            label: 'modules/akv/tests/validation.tftest.hcl',
            description: 'This file is used to define the validation for your Terraform project. Validation is used to validate the values of the variables.',
            links: [
                { label: 'Terraform Tests', url: 'https://developer.hashicorp.com/terraform/language/tests' },
                { label: 'Example Test', url: 'https://developer.hashicorp.com/terraform/tutorials/configuration-language/test' },
                { label: 'Mock Providers and Data', url: 'https://developer.hashicorp.com/terraform/language/tests/mocking' },
            ],
            code: [
                { code: `terraform test`, label: 'CLI' },
                {
                label: 'validation.tftest.hcl', code: `mock_provider "azurerm" {
    mock_data "azurerm_client_config" {
        defaults = {
            tenant_id = "11111111-1111-1111-1111-111111111111"
            object_id = "22222222-2222-2222-2222-222222222222"
        }
    }

    mock_data "azurem_resource_group" {
      defaults = {
        name = "RG-Example"
        location = "East US"
      }
    }
}

variables {
    rg_name         = "RG-Example"
    sku             = "standard"
    project_name    = "dem"
    environment     = "dev"
    cost_center     = "123456"
    owner           = "owner@example.com"
    business_unit   = "IT"
    certificate_permissions = ["Get", "List", "Create"]
    key_permissions = ["Get", "List", "Create"]
    secret_permissions = ["Get", "List", "Set"]
    storage_permissions = ["Get", "List", "Set"]
}

run "validate_rg_name_min" {
    command = plan

    variables {
        rg_name = ""
    }

    expect_failures = [
        var.rg_name
    ]
}

run "validate_rg_name_start" {
    command = plan

    variables {
        rg_name = "ResourceGroup"
    }

    expect_failures = [
        var.rg_name
    ]
}

run "validate_project_name_length" {
    command = plan

    variables {
        project_name = "hi"
    }

    expect_failures = [
        var.project_name
     ]
}

run "validate_project_name_case" {
    command = plan

    variables {
        project_name = "TST"
    }

    expect_failures = [
        var.project_name
     ]
}

run "validate_environment" {
    command = plan

    variables {
        environment = "qa"
    }

    expect_failures = [
        var.environment
     ]
}

run "validate_cost_center_length" {
    command = plan

    variables {
        cost_center = "1234567"
    }

    expect_failures = [
        var.cost_center
     ]
}

run "validate_cost_center_numeric" {
    command = plan

    variables {
        cost_center = "ABCDEF"
    }

    expect_failures = [
        var.cost_center
     ]
}

run "validate_owner" {
    command = plan

    variables {
        owner = "ownerexample.com"
    }

    expect_failures = [
        var.owner
     ]
}

run "validate_business_unit" {
    command = plan

    variables {
        business_unit = "Technology"
    }

    expect_failures = [
        var.business_unit
     ]
}

run "validate_sku" {
    command = plan

    variables {
        sku = "basic"
    }

    expect_failures = [
        var.sku
    ]
}

run "validate_permissions_invalid" {
    command = plan

    variables {
        certificate_permissions = ["Get", "InvalidPermission"]
        key_permissions = ["Get", "InvalidPermission"]
        secret_permissions = ["Get", "InvalidPermission"]
        storage_permissions = ["Get", "InvalidPermission"]
    }

    expect_failures = [
        var.certificate_permissions,
        var.key_permissions,
        var.secret_permissions,
        var.storage_permissions
    ]
}

run "validate_permissions_duplicates" {
    command = plan

    variables {
        certificate_permissions = ["Get", "List", "Get"]
        key_permissions = ["Get", "List", "Get"]
        secret_permissions = ["Get", "List", "Get"]
        storage_permissions = ["Get", "List", "Get"]
    }

    expect_failures = [
        var.certificate_permissions,
        var.key_permissions,
        var.secret_permissions,
        var.storage_permissions
    ]
}`
            }]
        },
        {
            id: 'assertion',
            label: 'modules/akv/tests/assertion.tftest.hcl',
            description: 'This file is used to define assertions for your Terraform project. Assertions are used to validate the state of your infrastructure after planning or applying, such as the logic of your local variables.',
            links: [
                { label: 'Terraform Tests', url: 'https://developer.hashicorp.com/terraform/language/tests' },
                { label: 'Example Test', url: 'https://developer.hashicorp.com/terraform/tutorials/configuration-language/test' },
                { label: 'Mock Providers and Data', url: 'https://developer.hashicorp.com/terraform/language/tests/mocking' },
            ],
            code: [
                { code: `terraform test`, label: 'CLI' },
                {
                label: 'assertion.tftest.hcl', code: `mock_provider "azurerm" {
    mock_data "azurerm_client_config" {
        defaults = {
            tenant_id = "11111111-1111-1111-1111-111111111111"
            object_id = "22222222-2222-2222-2222-222222222222"
        }
    }

    mock_data "azurem_resource_group" {
      defaults = {
        name = "RG-Example"
        location = "East US"
      }
    }
}

variables {
    rg_name         = "RG-Example"
    sku             = "standard"
    project_name    = "dem"
    environment     = "dev"
    cost_center     = "123456"
    owner           = "owner@example.com"
    business_unit   = "IT"
    certificate_permissions = ["Get", "List", "Create"]
    key_permissions = ["Get", "List", "Create"]
    secret_permissions = ["Get", "List", "Set"]
    storage_permissions = ["Get", "List", "Set"]
}

run "assert_akv_name" {
    command = plan

    assert {
        condition = startswith(local.key_vault_name, "akv")
        error_message = "Key Vault name must start with 'akv'"
    }

    assert {
      condition = strcontains(local.key_vault_name, var.environment) && strcontains(local.key_vault_name, var.project_name)
      error_message = "Key Vault name must contain the 'environment' and 'project name' variables'"
    }
}

run "assert_tags" {
    command = plan

    assert {
        condition = (contains(keys(local.tags), "Project") &&
                    contains(keys(local.tags), "Environment") &&
                    contains(keys(local.tags), "CostCenter") &&
                    contains(keys(local.tags), "Owner") &&
                    contains(keys(local.tags), "BusinessUnit"))
        error_message = "Tags must include Project, Environment, CostCenter, Owner, and BusinessUnit"
    }
}`
            }]
        },
        {
            id: 'gitignore',
            label: '.gitignore',
            description: 'Everything in this file will be ignored by Git to prevent committing your sensitive state files, downloaded providers, or modules to your code repository.',
            links: [],
            code: [
                { code: `.terraform*`, label: '.gitignore' },
            ]
        }
    ]

    const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? 'providers');
    const [folderFilter, setFolderFilter] = useState<string>('/');

    // Helper function to get folder path from tab label
    const getTabFolder = (label: string): string => {
        if (label.includes('/')) {
            const parts = label.split('/');
            if (parts.length > 1) {
                // Return the folder path (everything except the last part)
                return '/' + parts.slice(0, -1).join('/');
            }
        }
        return '/';
    };

    // Filter tabs based on selected folder
    const filteredTabs = useMemo(() => {
        return tabs.filter(tab => {
            const tabFolder = getTabFolder(tab.label);
            // For root folder, match exactly. For module folder, include subdirectories
            if (folderFilter === '/') {
                return tabFolder === '/';
            } else {
                // Include files in the folder and all subdirectories
                return tabFolder === folderFilter || tabFolder.startsWith(folderFilter + '/');
            }
        });
    }, [tabs, folderFilter]);

    // Update active tab when filter changes if current tab is not in filtered list
    useEffect(() => {
        const currentTabInFilter = filteredTabs.some(tab => tab.id === activeTab);
        if (!currentTabInFilter && filteredTabs.length > 0) {
            setActiveTab(filteredTabs[0].id);
        }
    }, [folderFilter, activeTab, filteredTabs]);

    const handleCopy = useCallback(async (code: string, tabId: string, blockIndex?: number) => {
        try {
            if (typeof navigator !== 'undefined' && typeof window !== 'undefined' && navigator.clipboard?.writeText && window.isSecureContext) {
                await navigator.clipboard.writeText(code);
            } else if (typeof document !== 'undefined') {
                const textArea = document.createElement('textarea');
                textArea.value = code;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.opacity = '0';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                textArea.remove();
            }

            const copyKey = blockIndex !== undefined ? `${tabId}-${blockIndex}` : tabId;
            setCopiedTab(copyKey);
            toast.success('Code copied to clipboard!');
            setTimeout(() => setCopiedTab(null), 2000);
        } catch (error) {
            console.error('Failed to copy code:', error);
            toast.error('Unable to copy code to clipboard.');
        }
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full gap-0">
                <div className="mb-4">
                    <div className="flex gap-2">
                        <Button
                            type="button"
                            variant={folderFilter === '/' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setFolderFilter('/')}
                            className="text-sm"
                        >
                            /
                        </Button>
                        <Button
                            type="button"
                            variant={folderFilter === '/modules/akv' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setFolderFilter('/modules/akv')}
                            className="text-sm"
                        >
                            /modules/akv
                        </Button>
                    </div>
                </div>
                <div>
                    <TabsList className="inline-flex h-10 items-center justify-start rounded-none border-0 bg-transparent p-0 mb-0">
                        {filteredTabs.map((tab) => {
                            // Extract filename and check if it's in tests directory
                            let displayName: string;
                            if (tab.label.includes('/')) {
                                const parts = tab.label.split('/');
                                const fileName = parts.pop() || tab.label;
                                // Check if the second-to-last part is "tests"
                                if (parts.length > 0 && parts[parts.length - 1] === 'tests') {
                                    displayName = `tests/${fileName}`;
                                } else {
                                    displayName = fileName;
                                }
                            } else {
                                displayName = tab.label;
                            }

                            return (
                                <TabsTrigger
                                    key={tab.id}
                                    value={tab.id}
                                    className={cn(
                                        "rounded-t-lg rounded-b-none border-t border-x border-b-0 border-border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground !shadow-none transition-all",
                                        "data-[state=active]:border-t data-[state=active]:border-x data-[state=active]:border-b-0 data-[state=active]:border-b-transparent data-[state=active]:border-border data-[state=active]:bg-card data-[state=active]:text-foreground",
                                        "hover:bg-muted/80"
                                    )}
                                >
                                    {displayName}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                </div>

                {filteredTabs.map((tab) => {
                    // Normalize code blocks to CodeBlock format
                    let codeBlocks: CodeBlock[];
                    if (typeof tab.code === 'string') {
                        codeBlocks = [{ code: tab.code }];
                    } else if (Array.isArray(tab.code)) {
                        codeBlocks = tab.code.map((item) => {
                            if (typeof item === 'string') {
                                return { code: item };
                            }
                            return item;
                        });
                    } else {
                        codeBlocks = [];
                    }

                    return (
                        <TabsContent key={tab.id} value={tab.id} className="mt-0">
                            <div className={cn(
                                "rounded-b-lg border-x border-b bg-card p-6",
                                activeTab === tab.id ? "border-t-0" : "border-t"
                            )}>
                                <p className="text-muted-foreground mb-6">{tab.description}</p>

                                {tab.links && tab.links.length > 0 && (
                                    <Collapsible
                                        open={expandedLinks[tab.id] ?? false}
                                        onOpenChange={(open) => setExpandedLinks((prev) => ({ ...prev, [tab.id]: open }))}
                                        className="mb-6"
                                    >
                                        <CollapsibleTrigger className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-600">
                                            {expandedLinks[tab.id] ? (
                                                <ChevronDown className="h-4 w-4" />
                                            ) : (
                                                <ChevronRight className="h-4 w-4" />
                                            )}
                                            <span>Links ({tab.links.length})</span>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="mt-2">
                                            <ul className="space-y-1 pl-6">
                                                {tab.links.map((link, linkIndex) => (
                                                    <li key={linkIndex}>
                                                        <a
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-sm text-purple-600 dark:text-purple-600 hover:underline"
                                                        >
                                                            {link.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CollapsibleContent>
                                    </Collapsible>
                                )}

                                <div className="space-y-4">
                                    {codeBlocks.map((codeBlock: CodeBlock, blockIndex: number) => {
                                        const lines = codeBlock.code.split('\n');
                                        const copyKey = `${tab.id}-${blockIndex}`;

                                        return (
                                            <div key={blockIndex} className="relative">
                                                <div className="rounded-md bg-muted/30 border overflow-hidden">
                                                    {codeBlock.label && (
                                                        <div className="border-b border-border/50 px-4 py-2 bg-muted/20">
                                                            <span className="text-xs font-medium text-muted-foreground">
                                                                {codeBlock.label}
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div className="relative overflow-x-auto">
                                                        <div className="absolute top-4 right-4 z-10">
                                                            <Button
                                                                type="button"
                                                                variant="outline"
                                                                size="sm"
                                                                onClick={() => handleCopy(codeBlock.code, tab.id, blockIndex)}
                                                                className="h-8"
                                                            >
                                                                {copiedTab === copyKey ? (
                                                                    <>
                                                                        <Check className="h-4 w-4 mr-2" />
                                                                        Copied
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <Copy className="h-4 w-4 mr-2" />
                                                                        Copy
                                                                    </>
                                                                )}
                                                            </Button>
                                                        </div>
                                                        <pre className="p-4 text-sm font-mono">
                                                            <code className="text-emerald-600 dark:text-emerald-600">
                                                                {lines.map((line: string, index: number) => (
                                                                    <div key={index} className="flex items-start">
                                                                        <span className="text-muted-foreground/40 mr-4 select-none text-right tabular-nums" style={{ minWidth: '2.5rem' }}>
                                                                            {index + 1}
                                                                        </span>
                                                                        <span className="flex-1 whitespace-pre">{line || ' '}</span>
                                                                    </div>
                                                                ))}
                                                            </code>
                                                        </pre>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </TabsContent>
                    );
                })}
            </Tabs>
        </div>
    );
};

type CodeBlock = {
    code: string;
    label?: string;
};

type TabContent = {
    id: string;
    label: string;
    description: string;
    code: string | string[] | CodeBlock[];
    links?: Array<{ label: string; url: string }>;
};

export default function Resources() {
    const { flash } = usePage<ExplainedPageProps>().props;

    useEffect(() => {
        if (!flash) {
            return;
        }

        if (flash.success) {
            toast.success(flash.success);
        }

        if (flash.error) {
            toast.error(flash.error);
        }

        if (flash.warning) {
            toast.warning(flash.warning);
        }

        if (flash.info) {
            toast.info(flash.info);
        }
    }, [flash]);

    return (
        <div className="min-h-screen bg-background">
            {/* Main Content */}
            <main className="container mx-auto max-w-6xl px-4 py-12">
                {/* Title and Description */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-4">
                        Terraform Explained Guide
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive guide to setting up your first Terraform project with Azure. Follow the steps below to get started with Infrastructure-as-Code.
                    </p>
                </div>

                <GuideContent />
            </main>

            {/* Footer */}
            <footer className="border-t bg-background">
                <div className="container mx-auto max-w-6xl px-4 py-8">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <Link href={route('privacy')} className="text-muted-foreground hover:text-foreground transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href={route('terms')} className="text-muted-foreground hover:text-foreground transition-colors">
                                Terms of Service
                            </Link>
                            <Link href={route('cookies')} className="text-muted-foreground hover:text-foreground transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            &copy; {new Date().getFullYear()} The Shawn Shop. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
