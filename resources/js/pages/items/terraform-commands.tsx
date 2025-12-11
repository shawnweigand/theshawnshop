import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { route } from 'ziggy-js';
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('dashboard'),
    },
    {
        title: 'Terraform Commands Guide',
        href: route('terraform-commands'),
    },
];

type TerraformCommand = {
    id: string;
    command: string;
    description: string;
    explanation: string;
    example?: string;
    svg: React.ReactElement;
};

const terraformCommands: TerraformCommand[] = [
    {
        id: 'init',
        command: 'terraform init',
        description: 'Initialize a Terraform working directory',
        explanation: 'Initializes a new or existing Terraform working directory by downloading providers and modules, and setting up the backend. This is the first command you should run after writing a new Terraform configuration.',
        example: 'terraform init',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="300" height="100" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="130" y="68" width="140" height="18" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="80" textAnchor="middle" fill="#b392f0" fontSize="14" fontFamily="monospace">Directory</text>
                <circle cx="150" cy="110" r="12" fill="#b392f0" />
                <text x="150" y="115" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">.terraform</text>
                <circle cx="200" cy="110" r="12" fill="#b392f0" />
                <text x="200" y="115" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">providers</text>
                <circle cx="250" cy="110" r="12" fill="#b392f0" />
                <text x="250" y="115" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">modules</text>
                <rect x="120" y="133" width="160" height="18" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="145" textAnchor="middle" fill="#b392f0" fontSize="12" fontFamily="monospace">terraform init</text>
            </svg>
        ),
    },
    {
        id: 'plan',
        command: 'terraform plan',
        description: 'Create an execution plan',
        explanation: 'Creates an execution plan showing what Terraform will do when you run apply. It compares the current state with the desired state defined in your configuration files and shows what resources will be created, modified, or destroyed.',
        example: 'terraform plan',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="120" height="100" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="60" y="63" width="100" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="110" y="75" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">Current</text>
                <rect x="60" y="83" width="100" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="110" y="95" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">State</text>
                <path d="M 170 100 L 230 100" stroke="#b392f0" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <rect x="230" y="50" width="120" height="100" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="240" y="63" width="100" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="290" y="75" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">Execution</text>
                <rect x="240" y="83" width="100" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="290" y="95" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">Plan</text>
                <rect x="120" y="158" width="160" height="18" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="170" textAnchor="middle" fill="#b392f0" fontSize="12" fontFamily="monospace">terraform plan</text>
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#b392f0" />
                    </marker>
                </defs>
            </svg>
        ),
    },
    {
        id: 'apply',
        command: 'terraform apply',
        description: 'Build or change infrastructure',
        explanation: 'Applies the changes required to reach the desired state of the configuration. It executes the plan and creates, updates, or destroys resources as needed. Use -auto-approve to skip the confirmation prompt.',
        example: 'terraform apply\nterraform apply -auto-approve',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="100" height="80" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="60" y="63" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="100" y="75" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">Plan</text>
                <path d="M 150 90 L 250 90" stroke="#b392f0" strokeWidth="2" markerEnd="url(#arrowhead2)" />
                <rect x="250" y="50" width="100" height="80" fill="#b392f0" stroke="#b392f0" strokeWidth="2" rx="4" />
                <text x="300" y="75" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">Infrastructure</text>
                <rect x="120" y="138" width="160" height="18" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="150" textAnchor="middle" fill="#b392f0" fontSize="12" fontFamily="monospace">terraform apply</text>
                <defs>
                    <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#b392f0" />
                    </marker>
                </defs>
            </svg>
        ),
    },
    {
        id: 'destroy',
        command: 'terraform destroy',
        description: 'Destroy Terraform-managed infrastructure',
        explanation: 'Destroys all resources managed by the current Terraform configuration. This is a destructive operation that permanently removes infrastructure. Use with caution and always review the plan first.',
        example: 'terraform destroy',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="150" y="50" width="100" height="80" fill="#b392f0" stroke="#b392f0" strokeWidth="2" rx="4" />
                <text x="200" y="75" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">Infrastructure</text>
                <path d="M 200 130 L 200 160" stroke="#ff6b6b" strokeWidth="3" />
                <circle cx="200" cy="160" r="8" fill="#ff6b6b" />
                <text x="200" y="185" textAnchor="middle" fill="#b392f0" fontSize="12" fontFamily="monospace">terraform destroy</text>
            </svg>
        ),
    },
    {
        id: 'validate',
        command: 'terraform validate',
        description: 'Validate the configuration files',
        explanation: 'Validates the Terraform configuration files in the current directory. It checks for syntax errors and ensures that all required arguments are provided. This does not check against the remote state or APIs.',
        example: 'terraform validate',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="100" y="50" width="200" height="100" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="110" y="68" width="180" height="18" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="80" textAnchor="middle" fill="#b392f0" fontSize="12" fontFamily="monospace">Configuration</text>
                <rect x="110" y="88" width="180" height="18" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="100" textAnchor="middle" fill="#b392f0" fontSize="12" fontFamily="monospace">Files</text>
                <path d="M 200 150 L 200 170" stroke="#b392f0" strokeWidth="2" />
                <circle cx="200" cy="170" r="10" fill="#51cf66" />
                <text x="200" y="175" textAnchor="middle" fill="#1e1e1e" fontSize="8" fontWeight="bold">✓</text>
                <rect x="100" y="183" width="200" height="18" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="195" textAnchor="middle" fill="#b392f0" fontSize="12" fontFamily="monospace">terraform validate</text>
            </svg>
        ),
    },
    {
        id: 'fmt',
        command: 'terraform fmt',
        description: 'Format configuration files',
        explanation: 'Rewrites Terraform configuration files to a canonical format and style. It ensures consistent formatting across your codebase. Use -recursive to format all files in subdirectories.',
        example: 'terraform fmt\nterraform fmt -recursive',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="80" y="50" width="120" height="80" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="90" y="63" width="100" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="140" y="75" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">Unformatted</text>
                <rect x="90" y="83" width="100" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="140" y="95" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">Config</text>
                <path d="M 200 90 L 220 90" stroke="#b392f0" strokeWidth="2" />
                <rect x="220" y="50" width="120" height="80" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="230" y="63" width="100" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="280" y="75" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">Formatted</text>
                <rect x="230" y="83" width="100" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="280" y="95" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">Config</text>
                <rect x="100" y="138" width="200" height="18" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="150" textAnchor="middle" fill="#b392f0" fontSize="12" fontFamily="monospace">terraform fmt</text>
            </svg>
        ),
    },
    {
        id: 'state',
        command: 'terraform state <subcommand>',
        description: 'Inspect and modify state',
        explanation: 'Provides advanced state management capabilities. Common subcommands include "list" to show resources, "show" to display a resource, "mv" to move resources, and "rm" to remove resources from state.',
        example: 'terraform state list\nterraform state show aws_instance.web',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="150" y="50" width="100" height="100" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="160" y="63" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="75" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">State</text>
                <rect x="160" y="83" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="95" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">File</text>
                <circle cx="180" cy="120" r="6" fill="#b392f0" />
                <circle cx="200" cy="120" r="6" fill="#b392f0" />
                <circle cx="220" cy="120" r="6" fill="#b392f0" />
                <rect x="100" y="158" width="200" height="18" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="170" textAnchor="middle" fill="#b392f0" fontSize="12" fontFamily="monospace">terraform state</text>
            </svg>
        ),
    },
    {
        id: 'show',
        command: 'terraform show',
        description: 'Show the current state or a saved plan',
        explanation: 'Displays human-readable output from a state or plan file. It shows the current state of all resources managed by Terraform, including their attributes and values.',
        example: 'terraform show',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="150" y="50" width="100" height="80" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="160" y="63" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="75" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">State</text>
                <path d="M 200 130 L 200 160" stroke="#b392f0" strokeWidth="2" />
                <rect x="50" y="160" width="300" height="30" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="60" y="168" width="280" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="180" textAnchor="middle" fill="#b392f0" fontSize="10" fontFamily="monospace">Human-readable output</text>
            </svg>
        ),
    },
    {
        id: 'output',
        command: 'terraform output',
        description: 'Show output values',
        explanation: 'Displays the output values from your Terraform configuration. Outputs are useful for exposing important information like resource IDs, IP addresses, or other computed values.',
        example: 'terraform output\nterraform output instance_ip',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="150" y="50" width="100" height="80" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="160" y="63" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="75" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">Outputs</text>
                <path d="M 200 130 L 200 160" stroke="#b392f0" strokeWidth="2" />
                <rect x="50" y="160" width="300" height="30" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="60" y="168" width="280" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="180" textAnchor="middle" fill="#b392f0" fontSize="10" fontFamily="monospace">Output values</text>
            </svg>
        ),
    },
    {
        id: 'refresh',
        command: 'terraform refresh',
        description: 'Update the state to match remote systems',
        explanation: 'Updates the state file to match the actual infrastructure. It queries the providers and updates the state with any differences found. This does not modify infrastructure, only the state.',
        example: 'terraform refresh',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="100" height="80" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="60" y="63" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="100" y="75" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">Remote</text>
                <rect x="60" y="83" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="100" y="95" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">Infrastructure</text>
                <path d="M 150 90 L 250 90" stroke="#b392f0" strokeWidth="2" strokeDasharray="5,5" />
                <rect x="250" y="50" width="100" height="80" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="260" y="63" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="300" y="75" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">State</text>
                <rect x="260" y="83" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="300" y="95" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">File</text>
                <rect x="100" y="138" width="200" height="18" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="150" textAnchor="middle" fill="#b392f0" fontSize="12" fontFamily="monospace">terraform refresh</text>
            </svg>
        ),
    },
    {
        id: 'import',
        command: 'terraform import <address> <id>',
        description: 'Import existing infrastructure into Terraform',
        explanation: 'Imports existing infrastructure into your Terraform state. This allows you to manage resources that were created outside of Terraform. You need to provide the resource address and the resource ID.',
        example: 'terraform import aws_instance.web i-1234567890abcdef0',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="120" height="80" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="60" y="63" width="100" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="110" y="75" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">Existing</text>
                <rect x="60" y="83" width="100" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="110" y="95" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">Resource</text>
                <path d="M 170 90 L 230 90" stroke="#b392f0" strokeWidth="2" markerEnd="url(#arrowhead3)" />
                <rect x="230" y="50" width="120" height="80" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="240" y="63" width="100" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="290" y="75" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">Terraform</text>
                <rect x="240" y="83" width="100" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="290" y="95" textAnchor="middle" fill="#b392f0" fontSize="11" fontFamily="monospace">State</text>
                <rect x="100" y="138" width="200" height="18" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="150" textAnchor="middle" fill="#b392f0" fontSize="12" fontFamily="monospace">terraform import</text>
                <defs>
                    <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#b392f0" />
                    </marker>
                </defs>
            </svg>
        ),
    },
    {
        id: 'workspace',
        command: 'terraform workspace <subcommand>',
        description: 'Manage workspaces',
        explanation: 'Manages workspaces for managing multiple distinct sets of infrastructure resources. Common subcommands include "list" to show workspaces, "select" to switch workspaces, "new" to create a workspace, and "delete" to remove one.',
        example: 'terraform workspace list\nterraform workspace select production',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="80" height="100" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="60" y="63" width="60" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="90" y="75" textAnchor="middle" fill="#b392f0" fontSize="10" fontFamily="monospace">dev</text>
                <rect x="160" y="50" width="80" height="100" fill="#b392f0" stroke="#b392f0" strokeWidth="2" rx="4" />
                <text x="200" y="75" textAnchor="middle" fill="#1e1e1e" fontSize="10" fontFamily="monospace" fontWeight="bold">prod</text>
                <rect x="270" y="50" width="80" height="100" fill="#2a2a3a" stroke="#b392f0" strokeWidth="2" rx="4" />
                <rect x="280" y="63" width="60" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="310" y="75" textAnchor="middle" fill="#b392f0" fontSize="10" fontFamily="monospace">staging</text>
                <rect x="80" y="158" width="240" height="18" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="170" textAnchor="middle" fill="#b392f0" fontSize="12" fontFamily="monospace">terraform workspace</text>
            </svg>
        ),
    },
];

export default function TerraformCommandsPage() {
    const [openCommands, setOpenCommands] = useState<Record<string, boolean>>({});

    const toggleCommand = (commandId: string) => {
        setOpenCommands((prev) => ({
            ...prev,
            [commandId]: !prev[commandId],
        }));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Terraform Commands Guide" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="container mx-auto max-w-4xl px-4 py-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-foreground mb-4">
                            Terraform Commands Guide
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Master the most useful Terraform commands with visual explanations and examples.
                        </p>
                    </div>

                    <div className="space-y-2">
                        {terraformCommands.map((cmd) => (
                            <Collapsible
                                key={cmd.id}
                                open={openCommands[cmd.id] || false}
                                onOpenChange={() => toggleCommand(cmd.id)}
                            >
                                <CollapsibleTrigger className="w-full">
                                    <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 hover:bg-[#161b22] transition-colors text-left shadow-lg">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                {openCommands[cmd.id] ? (
                                                    <ChevronDown className="h-5 w-5 text-[#b392f0]" />
                                                ) : (
                                                    <ChevronRight className="h-5 w-5 text-[#b392f0]" />
                                                )}
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-[#b392f0] font-mono text-sm font-bold">$</span>
                                                        <code className="text-[#b392f0] font-mono text-sm font-semibold">
                                                            {cmd.command}
                                                        </code>
                                                    </div>
                                                    <p className="text-[#8b949e] text-sm font-mono">{cmd.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <div className="bg-card border border-t-0 rounded-b-lg p-6 space-y-4">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">Explanation</h3>
                                            <p className="text-muted-foreground">{cmd.explanation}</p>
                                        </div>

                                        {cmd.example && (
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2">Example</h3>
                                                <div className="bg-[#0d1117] border border-[#30363d] rounded p-3 shadow-inner">
                                                    <code className="text-[#b392f0] font-mono text-sm whitespace-pre block">
                                                        <span className="text-[#b392f0]">$ </span>{cmd.example}
                                                    </code>
                                                </div>
                                            </div>
                                        )}

                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">Visual Representation</h3>
                                            <div className="bg-[#0d1117] border border-[#30363d] rounded p-4 flex items-center justify-center shadow-inner">
                                                {cmd.svg}
                                            </div>
                                        </div>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

