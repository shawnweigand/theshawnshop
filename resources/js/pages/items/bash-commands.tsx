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
        title: 'Bash Commands Guide',
        href: route('bash-commands'),
    },
];

type BashCommand = {
    id: string;
    command: string;
    description: string;
    explanation: string;
    example?: string;
    svg: React.ReactElement;
};

const bashCommands: BashCommand[] = [
    {
        id: 'ls',
        command: 'ls',
        description: 'List directory contents',
        explanation: 'Lists files and directories in the current directory. Use -l for detailed view, -a to show hidden files, and -h for human-readable file sizes. Combine flags like -lah for a comprehensive listing.',
        example: 'ls\nls -l\nls -a\nls -lah',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="300" height="100" fill="#2a2a3a" stroke="#51cf66" strokeWidth="2" rx="4" />
                <rect x="60" y="68" width="280" height="18" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="80" textAnchor="middle" fill="#51cf66" fontSize="14" fontFamily="monospace">Directory</text>
                <path d="M 200 150 L 200 170" stroke="#51cf66" strokeWidth="2" />
                <rect x="50" y="170" width="300" height="20" fill="#2a2a3a" stroke="#51cf66" strokeWidth="1" rx="2" />
                <rect x="60" y="178" width="280" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="185" textAnchor="middle" fill="#51cf66" fontSize="10" fontFamily="monospace">File List</text>
            </svg>
        ),
    },
    {
        id: 'cd',
        command: 'cd <directory>',
        description: 'Change the current directory',
        explanation: 'Changes your current working directory. Use cd .. to go up one level, cd ~ to go to home directory, and cd - to go to the previous directory. Without arguments, cd takes you to your home directory.',
        example: 'cd /home/user\ncd ..\ncd ~\ncd -',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="100" height="80" fill="#2a2a3a" stroke="#51cf66" strokeWidth="2" rx="4" />
                <rect x="60" y="63" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="100" y="75" textAnchor="middle" fill="#51cf66" fontSize="11" fontFamily="monospace">Current</text>
                <text x="100" y="95" textAnchor="middle" fill="#51cf66" fontSize="11" fontFamily="monospace">Dir</text>
                <path d="M 150 90 L 250 90" stroke="#51cf66" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <rect x="250" y="50" width="100" height="80" fill="#51cf66" stroke="#51cf66" strokeWidth="2" rx="4" />
                <text x="300" y="75" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">New</text>
                <text x="300" y="95" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">Dir</text>
                <text x="200" y="150" textAnchor="middle" fill="#51cf66" fontSize="12" fontFamily="monospace">cd</text>
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#51cf66" />
                    </marker>
                </defs>
            </svg>
        ),
    },
    {
        id: 'pwd',
        command: 'pwd',
        description: 'Print working directory',
        explanation: 'Displays the full path of the current working directory. This is useful when you need to know exactly where you are in the filesystem, especially when working with relative paths.',
        example: 'pwd',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="150" y="50" width="100" height="80" fill="#51cf66" stroke="#51cf66" strokeWidth="2" rx="4" />
                <text x="200" y="75" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">Current</text>
                <text x="200" y="95" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">Directory</text>
                <path d="M 200 130 L 200 160" stroke="#51cf66" strokeWidth="2" />
                <rect x="50" y="160" width="300" height="30" fill="#2a2a3a" stroke="#51cf66" strokeWidth="2" rx="4" />
                <rect x="60" y="168" width="280" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="175" textAnchor="middle" fill="#51cf66" fontSize="10" fontFamily="monospace">/home/user/documents</text>
            </svg>
        ),
    },
    {
        id: 'mkdir',
        command: 'mkdir <directory>',
        description: 'Create a new directory',
        explanation: 'Creates a new directory with the specified name. Use -p to create parent directories as needed and avoid errors if directories already exist. Use -m to set permissions during creation.',
        example: 'mkdir new-folder\nmkdir -p path/to/new/folder\nmkdir -m 755 mydir',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="100" height="80" fill="#2a2a3a" stroke="#51cf66" strokeWidth="2" rx="4" />
                <text x="100" y="75" textAnchor="middle" fill="#51cf66" fontSize="11" fontFamily="monospace">Command</text>
                <path d="M 150 90 L 250 90" stroke="#51cf66" strokeWidth="2" markerEnd="url(#arrowhead2)" />
                <rect x="250" y="50" width="100" height="80" fill="#51cf66" stroke="#51cf66" strokeWidth="2" rx="4" />
                <text x="300" y="75" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">New</text>
                <text x="300" y="95" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">Folder</text>
                <text x="200" y="150" textAnchor="middle" fill="#51cf66" fontSize="12" fontFamily="monospace">mkdir</text>
                <defs>
                    <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#51cf66" />
                    </marker>
                </defs>
            </svg>
        ),
    },
    {
        id: 'rm',
        command: 'rm <file>',
        description: 'Remove files or directories',
        explanation: 'Deletes files or directories. Use -r or -R for recursive deletion of directories, -f to force deletion without prompts, and -i for interactive mode. Be careful with rm -rf as it permanently deletes files.',
        example: 'rm file.txt\nrm -r directory\nrm -rf folder',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="150" y="50" width="100" height="80" fill="#51cf66" stroke="#51cf66" strokeWidth="2" rx="4" />
                <text x="200" y="75" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">File</text>
                <path d="M 200 130 L 200 160" stroke="#ff6b6b" strokeWidth="3" />
                <circle cx="200" cy="160" r="8" fill="#ff6b6b" />
                <text x="200" y="185" textAnchor="middle" fill="#51cf66" fontSize="12" fontFamily="monospace">rm</text>
            </svg>
        ),
    },
    {
        id: 'cp',
        command: 'cp <source> <destination>',
        description: 'Copy files or directories',
        explanation: 'Copies files or directories from source to destination. Use -r or -R to copy directories recursively, -p to preserve file attributes, and -v for verbose output showing what is being copied.',
        example: 'cp file.txt backup.txt\ncp -r folder/ new-folder/\ncp -rv source/ dest/',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="100" height="80" fill="#2a2a3a" stroke="#51cf66" strokeWidth="2" rx="4" />
                <rect x="60" y="63" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="100" y="75" textAnchor="middle" fill="#51cf66" fontSize="11" fontFamily="monospace">Source</text>
                <path d="M 150 90 L 250 90" stroke="#51cf66" strokeWidth="2" markerEnd="url(#arrowhead3)" />
                <rect x="250" y="50" width="100" height="80" fill="#2a2a3a" stroke="#51cf66" strokeWidth="2" rx="4" />
                <rect x="260" y="63" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="300" y="75" textAnchor="middle" fill="#51cf66" fontSize="11" fontFamily="monospace">Copy</text>
                <text x="200" y="150" textAnchor="middle" fill="#51cf66" fontSize="12" fontFamily="monospace">cp</text>
                <defs>
                    <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#51cf66" />
                    </marker>
                </defs>
            </svg>
        ),
    },
    {
        id: 'mv',
        command: 'mv <source> <destination>',
        description: 'Move or rename files and directories',
        explanation: 'Moves files or directories from source to destination, or renames them if the destination is in the same directory. This operation removes the source file after moving. Use -v for verbose output.',
        example: 'mv old.txt new.txt\nmv file.txt /tmp/\nmv -v folder/ new-name/',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="100" height="80" fill="#2a2a3a" stroke="#51cf66" strokeWidth="2" rx="4" />
                <rect x="60" y="63" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="100" y="75" textAnchor="middle" fill="#51cf66" fontSize="11" fontFamily="monospace">Source</text>
                <path d="M 150 90 L 250 90" stroke="#51cf66" strokeWidth="2" markerEnd="url(#arrowhead4)" />
                <rect x="250" y="50" width="100" height="80" fill="#51cf66" stroke="#51cf66" strokeWidth="2" rx="4" />
                <text x="300" y="75" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">New</text>
                <text x="300" y="95" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">Location</text>
                <text x="200" y="150" textAnchor="middle" fill="#51cf66" fontSize="12" fontFamily="monospace">mv</text>
                <defs>
                    <marker id="arrowhead4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#51cf66" />
                    </marker>
                </defs>
            </svg>
        ),
    },
    {
        id: 'grep',
        command: 'grep <pattern> <file>',
        description: 'Search for patterns in files',
        explanation: 'Searches for a pattern in files and displays matching lines. Use -i for case-insensitive search, -r for recursive directory search, -n to show line numbers, and -v to invert the match (show non-matching lines).',
        example: 'grep "error" log.txt\ngrep -i "warning" *.log\ngrep -rn "function" src/',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="140" height="100" fill="#2a2a3a" stroke="#51cf66" strokeWidth="2" rx="4" />
                <text x="120" y="75" textAnchor="middle" fill="#51cf66" fontSize="11" fontFamily="monospace">File</text>
                <text x="120" y="95" textAnchor="middle" fill="#51cf66" fontSize="11" fontFamily="monospace">Content</text>
                <path d="M 190 100 L 210 100" stroke="#51cf66" strokeWidth="2" />
                <text x="200" y="105" textAnchor="middle" fill="#51cf66" fontSize="12" fontFamily="monospace">→</text>
                <rect x="210" y="50" width="140" height="100" fill="#2a2a3a" stroke="#51cf66" strokeWidth="2" rx="4" />
                <text x="280" y="75" textAnchor="middle" fill="#51cf66" fontSize="11" fontFamily="monospace">Matching</text>
                <text x="280" y="95" textAnchor="middle" fill="#51cf66" fontSize="11" fontFamily="monospace">Lines</text>
                <rect x="60" y="105" width="120" height="15" fill="#51cf66" opacity="0.3" />
                <text x="200" y="170" textAnchor="middle" fill="#51cf66" fontSize="12" fontFamily="monospace">grep</text>
            </svg>
        ),
    },
    {
        id: 'find',
        command: 'find <path> -name <pattern>',
        description: 'Search for files and directories',
        explanation: 'Searches for files and directories matching specified criteria. Use -name for filename patterns, -type to filter by file type (f for files, d for directories), -size to filter by size, and -exec to execute commands on found files.',
        example: 'find . -name "*.txt"\nfind /home -type f -name "*.log"\nfind . -size +100M',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="300" height="100" fill="#2a2a3a" stroke="#51cf66" strokeWidth="2" rx="4" />
                <rect x="60" y="68" width="280" height="18" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="80" textAnchor="middle" fill="#51cf66" fontSize="14" fontFamily="monospace">Directory Tree</text>
                <circle cx="150" cy="110" r="8" fill="#51cf66" />
                <circle cx="200" cy="110" r="8" fill="#51cf66" />
                <circle cx="250" cy="110" r="8" fill="#51cf66" />
                <path d="M 200 150 L 200 170" stroke="#51cf66" strokeWidth="2" />
                <rect x="50" y="170" width="300" height="20" fill="#2a2a3a" stroke="#51cf66" strokeWidth="1" rx="2" />
                <rect x="60" y="178" width="280" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="185" textAnchor="middle" fill="#51cf66" fontSize="10" fontFamily="monospace">Found Files</text>
            </svg>
        ),
    },
    {
        id: 'chmod',
        command: 'chmod <permissions> <file>',
        description: 'Change file permissions',
        explanation: 'Changes the permissions of files or directories. Permissions can be specified in octal (755, 644) or symbolic (u+x, g-w) format. Use -R for recursive changes. Common permissions: 755 for executables, 644 for regular files.',
        example: 'chmod 755 script.sh\nchmod +x file.sh\nchmod -R 644 directory/',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="150" y="50" width="100" height="80" fill="#2a2a3a" stroke="#51cf66" strokeWidth="2" rx="4" />
                <rect x="160" y="63" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="75" textAnchor="middle" fill="#51cf66" fontSize="11" fontFamily="monospace">File</text>
                <path d="M 200 130 L 200 160" stroke="#51cf66" strokeWidth="2" />
                <rect x="150" y="160" width="100" height="30" fill="#51cf66" stroke="#51cf66" strokeWidth="2" rx="4" />
                <text x="200" y="175" textAnchor="middle" fill="#1e1e1e" fontSize="10" fontFamily="monospace" fontWeight="bold">rwxr-xr-x</text>
                <text x="200" y="190" textAnchor="middle" fill="#1e1e1e" fontSize="10" fontFamily="monospace" fontWeight="bold">755</text>
            </svg>
        ),
    },
    {
        id: 'cat',
        command: 'cat <file>',
        description: 'Display file contents',
        explanation: 'Displays the contents of one or more files to standard output. Use -n to number lines, -b to number non-blank lines, and -s to squeeze multiple blank lines. Can also concatenate multiple files.',
        example: 'cat file.txt\ncat -n file.txt\ncat file1.txt file2.txt',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="150" y="50" width="100" height="80" fill="#2a2a3a" stroke="#51cf66" strokeWidth="2" rx="4" />
                <rect x="160" y="63" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="75" textAnchor="middle" fill="#51cf66" fontSize="11" fontFamily="monospace">File</text>
                <path d="M 200 130 L 200 160" stroke="#51cf66" strokeWidth="2" />
                <rect x="50" y="160" width="300" height="30" fill="#2a2a3a" stroke="#51cf66" strokeWidth="2" rx="4" />
                <rect x="60" y="168" width="280" height="14" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="200" y="175" textAnchor="middle" fill="#51cf66" fontSize="10" fontFamily="monospace">File Contents</text>
                <text x="200" y="190" textAnchor="middle" fill="#51cf66" fontSize="10" fontFamily="monospace">Output</text>
            </svg>
        ),
    },
    {
        id: 'echo',
        command: 'echo <text>',
        description: 'Display text or variables',
        explanation: 'Prints text or the value of variables to standard output. Use $VAR to expand variables, -e to interpret escape sequences like \\n for newlines, and -n to suppress the trailing newline. Essential for shell scripting.',
        example: 'echo "Hello World"\necho $HOME\necho -e "Line 1\\nLine 2"',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="100" height="80" fill="#2a2a3a" stroke="#51cf66" strokeWidth="2" rx="4" />
                <rect x="60" y="63" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="100" y="75" textAnchor="middle" fill="#51cf66" fontSize="11" fontFamily="monospace">Input</text>
                <path d="M 150 90 L 250 90" stroke="#51cf66" strokeWidth="2" markerEnd="url(#arrowhead5)" />
                <rect x="250" y="50" width="100" height="80" fill="#2a2a3a" stroke="#51cf66" strokeWidth="2" rx="4" />
                <rect x="260" y="63" width="80" height="16" fill="rgba(255,255,255,0.1)" rx="2" />
                <text x="300" y="75" textAnchor="middle" fill="#51cf66" fontSize="11" fontFamily="monospace">Output</text>
                <text x="200" y="150" textAnchor="middle" fill="#51cf66" fontSize="12" fontFamily="monospace">echo</text>
                <defs>
                    <marker id="arrowhead5" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#51cf66" />
                    </marker>
                </defs>
            </svg>
        ),
    },
];

export default function BashCommandsPage() {
    const [openCommands, setOpenCommands] = useState<Record<string, boolean>>({});

    const toggleCommand = (commandId: string) => {
        setOpenCommands((prev) => ({
            ...prev,
            [commandId]: !prev[commandId],
        }));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Bash Commands Guide" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="container mx-auto max-w-4xl px-4 py-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-foreground mb-4">
                            Bash Commands Guide
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Master the most useful Bash commands with visual explanations and examples.
                        </p>
                    </div>

                    <div className="space-y-2">
                        {bashCommands.map((cmd) => (
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
                                                    <ChevronDown className="h-5 w-5 text-[#51cf66]" />
                                                ) : (
                                                    <ChevronRight className="h-5 w-5 text-[#51cf66]" />
                                                )}
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-[#51cf66] font-mono text-sm font-bold">$</span>
                                                        <code className="text-[#51cf66] font-mono text-sm font-semibold">
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
                                                    <code className="text-[#51cf66] font-mono text-sm whitespace-pre block">
                                                        <span className="text-[#51cf66]">$ </span>{cmd.example}
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

