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
        title: 'Kubectl Commands Guide',
        href: route('kubectl-commands'),
    },
];

type KubectlCommand = {
    id: string;
    command: string;
    description: string;
    explanation: string;
    example?: string;
    svg: React.ReactElement;
};

const kubectlCommands: KubectlCommand[] = [
    {
        id: 'get',
        command: 'kubectl get <resource>',
        description: 'List resources in the cluster',
        explanation: 'Retrieves and displays one or many resources from the Kubernetes cluster. You can get pods, services, deployments, nodes, and other resources. Use -A or --all-namespaces to see resources across all namespaces.',
        example: 'kubectl get pods\nkubectl get pods -A\nkubectl get services',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="300" height="100" fill="#2a2a3a" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <rect x="110" y="68" width="180" height="18" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="80" textAnchor="middle" fill="#79c0ff" fontSize="14" fontFamily="monospace">Kubernetes</text>
                <rect x="110" y="88" width="180" height="18" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="100" textAnchor="middle" fill="#79c0ff" fontSize="14" fontFamily="monospace">Cluster</text>
                <path d="M 200 150 L 200 170" stroke="#79c0ff" strokeWidth="2" />
                <rect x="50" y="170" width="300" height="20" fill="#2a2a3a" stroke="#79c0ff" strokeWidth="1" rx="2" />
                <rect x="60" y="178" width="280" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="185" textAnchor="middle" fill="#79c0ff" fontSize="10" fontFamily="monospace">Resource List</text>
            </svg>
        ),
    },
    {
        id: 'describe',
        command: 'kubectl describe <resource> <name>',
        description: 'Show detailed information about a resource',
        explanation: 'Displays detailed information about a specific resource, including events, status, labels, and annotations. This is useful for debugging and understanding the current state of a resource.',
        example: 'kubectl describe pod my-pod\nkubectl describe node node-1',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <circle cx="200" cy="100" r="30" fill="#79c0ff" stroke="#79c0ff" strokeWidth="2" />
                <text x="200" y="105" textAnchor="middle" fill="#1e1e1e" fontSize="10" fontFamily="monospace" fontWeight="bold">Resource</text>
                <path d="M 200 130 L 200 160" stroke="#79c0ff" strokeWidth="2" />
                <rect x="50" y="160" width="300" height="30" fill="#2a2a3a" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <rect x="60" y="168" width="280" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="175" textAnchor="middle" fill="#79c0ff" fontSize="10" fontFamily="monospace">Detailed Info</text>
                <rect x="60" y="183" width="280" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="190" textAnchor="middle" fill="#79c0ff" fontSize="10" fontFamily="monospace">Events, Status, Labels</text>
            </svg>
        ),
    },
    {
        id: 'apply',
        command: 'kubectl apply -f <file>',
        description: 'Apply a configuration to a resource',
        explanation: 'Applies configuration changes to resources. It can create new resources or update existing ones. The configuration is typically provided via a YAML or JSON file. This is the declarative way to manage Kubernetes resources.',
        example: 'kubectl apply -f deployment.yaml\nkubectl apply -f .',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="100" height="80" fill="#2a2a3a" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <rect x="60" y="63" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="100" y="75" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">YAML</text>
                <rect x="60" y="83" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="100" y="95" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">File</text>
                <path d="M 150 90 L 250 90" stroke="#79c0ff" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <rect x="250" y="50" width="100" height="80" fill="#79c0ff" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="300" y="75" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">Cluster</text>
                <text x="200" y="150" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">kubectl apply</text>
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#79c0ff" />
                    </marker>
                </defs>
            </svg>
        ),
    },
    {
        id: 'delete',
        command: 'kubectl delete <resource> <name>',
        description: 'Delete resources from the cluster',
        explanation: 'Deletes one or more resources from the Kubernetes cluster. You can delete by resource type and name, or use -f to delete resources defined in a file. Use --force --grace-period=0 for immediate deletion.',
        example: 'kubectl delete pod my-pod\nkubectl delete -f deployment.yaml',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="150" y="50" width="100" height="80" fill="#79c0ff" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="200" y="75" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">Resource</text>
                <path d="M 200 130 L 200 160" stroke="#ff6b6b" strokeWidth="3" />
                <circle cx="200" cy="160" r="8" fill="#ff6b6b" />
                <text x="200" y="185" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">kubectl delete</text>
            </svg>
        ),
    },
    {
        id: 'logs',
        command: 'kubectl logs <pod>',
        description: 'Print logs from a container in a pod',
        explanation: 'Retrieves and displays logs from a container running in a pod. Use -f to follow logs in real-time, -c to specify a container name in multi-container pods, and --previous to get logs from a previous container instance.',
        example: 'kubectl logs my-pod\nkubectl logs my-pod -f\nkubectl logs my-pod -c container-name',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="150" y="50" width="100" height="80" fill="#79c0ff" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="200" y="75" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">Pod</text>
                <path d="M 200 130 L 200 160" stroke="#79c0ff" strokeWidth="2" />
                <rect x="50" y="160" width="300" height="30" fill="#2a2a3a" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <rect x="60" y="168" width="280" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="175" textAnchor="middle" fill="#79c0ff" fontSize="10" fontFamily="monospace">Container Logs</text>
                <rect x="60" y="183" width="280" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="190" textAnchor="middle" fill="#79c0ff" fontSize="10" fontFamily="monospace">Output Stream</text>
            </svg>
        ),
    },
    {
        id: 'exec',
        command: 'kubectl exec -it <pod> -- <command>',
        description: 'Execute a command in a container',
        explanation: 'Executes a command in a running container. Use -it for interactive terminal access. This is useful for debugging, running commands inside containers, or accessing shell environments.',
        example: 'kubectl exec -it my-pod -- /bin/bash\nkubectl exec my-pod -- ls -la',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="120" height="100" fill="#2a2a3a" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <rect x="60" y="63" width="100" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="110" y="75" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">Terminal</text>
                <path d="M 170 100 L 230 100" stroke="#79c0ff" strokeWidth="2" markerEnd="url(#arrowhead2)" />
                <rect x="230" y="50" width="120" height="100" fill="#79c0ff" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="290" y="75" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">Container</text>
                <text x="200" y="170" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">kubectl exec</text>
                <defs>
                    <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#79c0ff" />
                    </marker>
                </defs>
            </svg>
        ),
    },
    {
        id: 'port-forward',
        command: 'kubectl port-forward <pod> <local-port>:<pod-port>',
        description: 'Forward one or more local ports to a pod',
        explanation: 'Forwards local ports to a pod, allowing you to access services running in the pod from your local machine. This is useful for debugging, testing, or accessing services that are not exposed externally.',
        example: 'kubectl port-forward my-pod 8080:80\nkubectl port-forward service/my-service 3000:8080',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="100" height="80" fill="#2a2a3a" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <rect x="60" y="63" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="100" y="75" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">Local</text>
                <rect x="60" y="83" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="100" y="95" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">Port</text>
                <path d="M 150 90 L 250 90" stroke="#79c0ff" strokeWidth="2" strokeDasharray="5,5" />
                <rect x="250" y="50" width="100" height="80" fill="#79c0ff" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="300" y="75" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">Pod</text>
                <text x="300" y="95" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">Port</text>
                <text x="200" y="150" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">kubectl port-forward</text>
            </svg>
        ),
    },
    {
        id: 'scale',
        command: 'kubectl scale <resource> --replicas=<count>',
        description: 'Set a new size for a deployment or replica set',
        explanation: 'Scales a deployment, replica set, or stateful set to a specified number of replicas. This allows you to increase or decrease the number of running pods based on demand.',
        example: 'kubectl scale deployment my-app --replicas=5\nkubectl scale statefulset my-db --replicas=3',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="100" y="50" width="60" height="60" fill="#79c0ff" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="130" y="80" textAnchor="middle" fill="#1e1e1e" fontSize="9" fontFamily="monospace" fontWeight="bold">Pod 1</text>
                <path d="M 160 80 L 240 80" stroke="#79c0ff" strokeWidth="2" />
                <rect x="240" y="50" width="60" height="60" fill="#79c0ff" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="270" y="80" textAnchor="middle" fill="#1e1e1e" fontSize="9" fontFamily="monospace" fontWeight="bold">Pod 2</text>
                <rect x="240" y="120" width="60" height="60" fill="#79c0ff" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="270" y="150" textAnchor="middle" fill="#1e1e1e" fontSize="9" fontFamily="monospace" fontWeight="bold">Pod 3</text>
                <text x="200" y="195" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">kubectl scale</text>
            </svg>
        ),
    },
    {
        id: 'create',
        command: 'kubectl create <resource>',
        description: 'Create a resource from a file or stdin',
        explanation: 'Creates a new resource in the Kubernetes cluster. Unlike apply, create is imperative and will fail if the resource already exists. You can create resources from files or by providing configuration via stdin.',
        example: 'kubectl create deployment my-app --image=nginx\nkubectl create -f deployment.yaml',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="100" height="80" fill="#2a2a3a" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="100" y="75" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">Config</text>
                <path d="M 150 90 L 250 90" stroke="#79c0ff" strokeWidth="2" markerEnd="url(#arrowhead3)" />
                <circle cx="250" cy="90" r="20" fill="#79c0ff" />
                <text x="250" y="95" textAnchor="middle" fill="#1e1e1e" fontSize="9" fontFamily="monospace" fontWeight="bold">New</text>
                <text x="250" y="105" textAnchor="middle" fill="#1e1e1e" fontSize="9" fontFamily="monospace" fontWeight="bold">Resource</text>
                <text x="200" y="150" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">kubectl create</text>
                <defs>
                    <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#79c0ff" />
                    </marker>
                </defs>
            </svg>
        ),
    },
    {
        id: 'edit',
        command: 'kubectl edit <resource> <name>',
        description: 'Edit a resource on the server',
        explanation: 'Opens the resource configuration in your default editor, allowing you to make changes directly. When you save and exit, the changes are applied to the cluster. This is useful for quick edits without modifying YAML files.',
        example: 'kubectl edit deployment my-app\nkubectl edit pod my-pod',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="150" y="50" width="100" height="80" fill="#79c0ff" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="200" y="75" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">Resource</text>
                <path d="M 200 130 L 200 160" stroke="#79c0ff" strokeWidth="2" />
                <rect x="50" y="160" width="300" height="30" fill="#2a2a3a" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <rect x="60" y="168" width="280" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="175" textAnchor="middle" fill="#79c0ff" fontSize="10" fontFamily="monospace">Editor</text>
                <rect x="60" y="183" width="280" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="190" textAnchor="middle" fill="#79c0ff" fontSize="10" fontFamily="monospace">Edit & Save</text>
            </svg>
        ),
    },
    {
        id: 'namespace',
        command: 'kubectl get namespaces',
        description: 'List or switch namespaces',
        explanation: 'Namespaces provide a way to divide cluster resources between multiple users or projects. Use "kubectl get namespaces" to list all namespaces, and "kubectl config set-context --current --namespace=<name>" to switch to a different namespace.',
        example: 'kubectl get namespaces\nkubectl config set-context --current --namespace=production',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="80" height="100" fill="#2a2a3a" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <rect x="60" y="63" width="60" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="90" y="75" textAnchor="middle" fill="#79c0ff" fontSize="10" fontFamily="monospace">default</text>
                <rect x="160" y="50" width="80" height="100" fill="#79c0ff" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="200" y="75" textAnchor="middle" fill="#1e1e1e" fontSize="10" fontFamily="monospace" fontWeight="bold">prod</text>
                <rect x="270" y="50" width="80" height="100" fill="#2a2a3a" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <rect x="280" y="63" width="60" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="310" y="75" textAnchor="middle" fill="#79c0ff" fontSize="10" fontFamily="monospace">dev</text>
                <text x="200" y="170" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">kubectl namespace</text>
            </svg>
        ),
    },
    {
        id: 'config',
        command: 'kubectl config <subcommand>',
        description: 'Modify kubeconfig files',
        explanation: 'Manages kubeconfig files that store cluster authentication and configuration information. Common subcommands include "view" to display current config, "use-context" to switch contexts, and "get-contexts" to list available contexts.',
        example: 'kubectl config view\nkubectl config use-context my-cluster\nkubectl config get-contexts',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="150" y="50" width="100" height="100" fill="#2a2a3a" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="200" y="75" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">kubeconfig</text>
                <circle cx="180" cy="120" r="6" fill="#79c0ff" />
                <circle cx="200" cy="120" r="6" fill="#79c0ff" />
                <circle cx="220" cy="120" r="6" fill="#79c0ff" />
                <text x="200" y="170" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">kubectl config</text>
            </svg>
        ),
    },
];

export default function KubectlCommandsPage() {
    const [openCommands, setOpenCommands] = useState<Record<string, boolean>>({});

    const toggleCommand = (commandId: string) => {
        setOpenCommands((prev) => ({
            ...prev,
            [commandId]: !prev[commandId],
        }));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Kubectl Commands Guide" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="container mx-auto max-w-4xl px-4 py-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-foreground mb-4">
                            Kubectl Commands Guide
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Master the most useful kubectl commands with visual explanations and examples.
                        </p>
                    </div>

                    <div className="space-y-2">
                        {kubectlCommands.map((cmd) => (
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
                                                    <ChevronDown className="h-5 w-5 text-[#79c0ff]" />
                                                ) : (
                                                    <ChevronRight className="h-5 w-5 text-[#79c0ff]" />
                                                )}
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-[#79c0ff] font-mono text-sm font-bold">$</span>
                                                        <code className="text-[#79c0ff] font-mono text-sm font-semibold">
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
                                                    <code className="text-[#79c0ff] font-mono text-sm whitespace-pre block">
                                                        <span className="text-[#79c0ff]">$ </span>{cmd.example}
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

