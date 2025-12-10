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
        title: 'Git Commands Guide',
        href: route('git-commands'),
    },
];

type GitCommand = {
    id: string;
    command: string;
    description: string;
    explanation: string;
    example?: string;
    svg: React.ReactElement;
};

const gitCommands: GitCommand[] = [
    {
        id: 'init',
        command: 'git init',
        description: 'Initialize a new Git repository',
        explanation: 'Creates a new Git repository in the current directory. This sets up the necessary Git files and folders (.git directory) to start tracking changes in your project.',
        example: 'git init',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="300" height="100" fill="#1e1e1e" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="200" y="80" textAnchor="middle" fill="#79c0ff" fontSize="14" fontFamily="monospace">Directory</text>
                <circle cx="200" cy="110" r="15" fill="#79c0ff" />
                <text x="200" y="115" textAnchor="middle" fill="#1e1e1e" fontSize="10" fontWeight="bold">.git</text>
                <text x="200" y="145" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">git init</text>
            </svg>
        ),
    },
    {
        id: 'clone',
        command: 'git clone <url>',
        description: 'Clone a repository from a remote location',
        explanation: 'Downloads a complete copy of a remote repository to your local machine. This includes all files, branches, and commit history.',
        example: 'git clone https://github.com/user/repo.git',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="20" y="50" width="120" height="100" fill="#1e1e1e" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="80" y="80" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">Remote</text>
                <text x="80" y="100" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">Repository</text>
                <path d="M 140 100 L 260 100" stroke="#79c0ff" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <rect x="260" y="50" width="120" height="100" fill="#1e1e1e" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="320" y="80" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">Local</text>
                <text x="320" y="100" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">Copy</text>
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#79c0ff" />
                    </marker>
                </defs>
            </svg>
        ),
    },
    {
        id: 'add',
        command: 'git add <file>',
        description: 'Stage files for commit',
        explanation: 'Adds files to the staging area, preparing them to be committed. You can add specific files or use "git add ." to add all changes.',
        example: 'git add index.html\ngit add .',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="30" width="80" height="40" fill="#2d5016" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="90" y="55" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">Working</text>
                <path d="M 130 50 L 200 50" stroke="#79c0ff" strokeWidth="2" markerEnd="url(#arrowhead2)" />
                <rect x="200" y="30" width="80" height="40" fill="#79c0ff" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="240" y="55" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">Staging</text>
                <text x="200" y="100" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">git add</text>
                <defs>
                    <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#79c0ff" />
                    </marker>
                </defs>
            </svg>
        ),
    },
    {
        id: 'commit',
        command: 'git commit -m "message"',
        description: 'Save changes to the repository',
        explanation: 'Creates a snapshot of your staged changes with a descriptive message. This permanently records the changes in the repository history.',
        example: 'git commit -m "Add new feature"',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="200" y="30" width="80" height="40" fill="#79c0ff" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="240" y="55" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">Staging</text>
                <path d="M 280 50 L 350 50" stroke="#79c0ff" strokeWidth="2" markerEnd="url(#arrowhead3)" />
                <circle cx="350" cy="50" r="20" fill="#79c0ff" />
                <text x="350" y="55" textAnchor="middle" fill="#1e1e1e" fontSize="9" fontFamily="monospace" fontWeight="bold">Commit</text>
                <text x="275" y="100" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">git commit</text>
                <defs>
                    <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#79c0ff" />
                    </marker>
                </defs>
            </svg>
        ),
    },
    {
        id: 'push',
        command: 'git push',
        description: 'Upload commits to remote repository',
        explanation: 'Sends your local commits to the remote repository, making them available to others and backing up your work.',
        example: 'git push origin main',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <circle cx="100" cy="100" r="25" fill="#79c0ff" />
                <text x="100" y="105" textAnchor="middle" fill="#1e1e1e" fontSize="9" fontFamily="monospace" fontWeight="bold">Local</text>
                <path d="M 125 100 L 275 100" stroke="#79c0ff" strokeWidth="2" markerEnd="url(#arrowhead4)" />
                <rect x="275" y="75" width="100" height="50" fill="#1e1e1e" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="325" y="95" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">Remote</text>
                <text x="325" y="110" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">Repository</text>
                <text x="200" y="145" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">git push</text>
                <defs>
                    <marker id="arrowhead4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#79c0ff" />
                    </marker>
                </defs>
            </svg>
        ),
    },
    {
        id: 'pull',
        command: 'git pull',
        description: 'Download and merge changes from remote',
        explanation: 'Fetches changes from the remote repository and merges them into your current branch. This keeps your local repository up to date.',
        example: 'git pull origin main',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="25" y="75" width="100" height="50" fill="#1e1e1e" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="75" y="95" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">Remote</text>
                <text x="75" y="110" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">Repository</text>
                <path d="M 125 100 L 275 100" stroke="#79c0ff" strokeWidth="2" markerEnd="url(#arrowhead5)" />
                <circle cx="275" cy="100" r="25" fill="#79c0ff" />
                <text x="275" y="105" textAnchor="middle" fill="#1e1e1e" fontSize="9" fontFamily="monospace" fontWeight="bold">Local</text>
                <text x="200" y="145" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">git pull</text>
                <defs>
                    <marker id="arrowhead5" markerWidth="10" markerHeight="10" refX="1" refY="3" orient="auto">
                        <polygon points="10 0, 0 3, 10 6" fill="#79c0ff" />
                    </marker>
                </defs>
            </svg>
        ),
    },
    {
        id: 'branch',
        command: 'git branch',
        description: 'List, create, or delete branches',
        explanation: 'Shows all local branches. Use "git branch <name>" to create a new branch. Branches allow you to work on different features simultaneously.',
        example: 'git branch\ngit branch feature-x',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <line x1="200" y1="30" x2="200" y2="100" stroke="#79c0ff" strokeWidth="3" />
                <line x1="200" y1="100" x2="100" y2="170" stroke="#79c0ff" strokeWidth="3" />
                <line x1="200" y1="100" x2="300" y2="170" stroke="#79c0ff" strokeWidth="3" />
                <circle cx="200" cy="30" r="8" fill="#79c0ff" />
                <circle cx="200" cy="100" r="8" fill="#79c0ff" />
                <circle cx="100" cy="170" r="8" fill="#79c0ff" />
                <circle cx="300" cy="170" r="8" fill="#79c0ff" />
                <text x="200" y="25" textAnchor="middle" fill="#79c0ff" fontSize="10" fontFamily="monospace">main</text>
                <text x="100" y="185" textAnchor="middle" fill="#79c0ff" fontSize="10" fontFamily="monospace">feature</text>
                <text x="300" y="185" textAnchor="middle" fill="#79c0ff" fontSize="10" fontFamily="monospace">develop</text>
            </svg>
        ),
    },
    {
        id: 'checkout',
        command: 'git checkout <branch>',
        description: 'Switch between branches',
        explanation: 'Switches your working directory to a different branch. This allows you to work on different features or versions of your code.',
        example: 'git checkout feature-x',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="100" height="50" fill="#1e1e1e" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="100" y="75" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">main</text>
                <path d="M 150 75 L 200 75" stroke="#79c0ff" strokeWidth="2" strokeDasharray="5,5" />
                <rect x="200" y="50" width="100" height="50" fill="#79c0ff" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="250" y="75" textAnchor="middle" fill="#1e1e1e" fontSize="11" fontFamily="monospace" fontWeight="bold">feature-x</text>
                <text x="200" y="130" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">git checkout feature-x</text>
            </svg>
        ),
    },
    {
        id: 'merge',
        command: 'git merge <branch>',
        description: 'Combine changes from different branches',
        explanation: 'Integrates changes from one branch into another. This combines the commit history and applies all changes from the source branch.',
        example: 'git merge feature-x',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <line x1="100" y1="50" x2="100" y2="100" stroke="#79c0ff" strokeWidth="3" />
                <line x1="300" y1="50" x2="300" y2="100" stroke="#79c0ff" strokeWidth="3" />
                <line x1="100" y1="100" x2="200" y2="150" stroke="#79c0ff" strokeWidth="3" />
                <line x1="300" y1="100" x2="200" y2="150" stroke="#79c0ff" strokeWidth="3" />
                <line x1="200" y1="150" x2="200" y2="180" stroke="#79c0ff" strokeWidth="3" />
                <circle cx="100" cy="50" r="8" fill="#79c0ff" />
                <circle cx="300" cy="50" r="8" fill="#79c0ff" />
                <circle cx="100" cy="100" r="8" fill="#79c0ff" />
                <circle cx="300" cy="100" r="8" fill="#79c0ff" />
                <circle cx="200" cy="150" r="8" fill="#79c0ff" />
                <circle cx="200" cy="180" r="8" fill="#79c0ff" />
                <text x="100" y="40" textAnchor="middle" fill="#79c0ff" fontSize="10" fontFamily="monospace">main</text>
                <text x="300" y="40" textAnchor="middle" fill="#79c0ff" fontSize="10" fontFamily="monospace">feature</text>
            </svg>
        ),
    },
    {
        id: 'status',
        command: 'git status',
        description: 'Show the working tree status',
        explanation: 'Displays the state of your working directory and staging area. Shows which files are modified, staged, or untracked.',
        example: 'git status',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="120" height="100" fill="#1e1e1e" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="110" y="75" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">Working</text>
                <text x="110" y="95" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">Directory</text>
                <rect x="230" y="50" width="120" height="100" fill="#1e1e1e" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="290" y="75" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">Staging</text>
                <text x="290" y="95" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">Area</text>
                <text x="200" y="170" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">git status</text>
                <circle cx="110" cy="120" r="5" fill="#ff6b6b" />
                <text x="120" y="125" fill="#ff6b6b" fontSize="9" fontFamily="monospace">Modified</text>
                <circle cx="290" cy="120" r="5" fill="#51cf66" />
                <text x="300" y="125" fill="#51cf66" fontSize="9" fontFamily="monospace">Staged</text>
            </svg>
        ),
    },
    {
        id: 'log',
        command: 'git log',
        description: 'Show commit history',
        explanation: 'Displays a list of all commits in the current branch, showing commit messages, authors, and dates. Use "git log --oneline" for a compact view.',
        example: 'git log\ngit log --oneline',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <line x1="200" y1="30" x2="200" y2="170" stroke="#79c0ff" strokeWidth="3" />
                <circle cx="200" cy="50" r="8" fill="#79c0ff" />
                <circle cx="200" cy="90" r="8" fill="#79c0ff" />
                <circle cx="200" cy="130" r="8" fill="#79c0ff" />
                <circle cx="200" cy="170" r="8" fill="#79c0ff" />
                <text x="220" y="55" fill="#79c0ff" fontSize="10" fontFamily="monospace">Commit 1</text>
                <text x="220" y="95" fill="#79c0ff" fontSize="10" fontFamily="monospace">Commit 2</text>
                <text x="220" y="135" fill="#79c0ff" fontSize="10" fontFamily="monospace">Commit 3</text>
                <text x="220" y="175" fill="#79c0ff" fontSize="10" fontFamily="monospace">Commit 4</text>
            </svg>
        ),
    },
    {
        id: 'diff',
        command: 'git diff',
        description: 'Show changes between commits, branches, or files',
        explanation: 'Displays the differences between your working directory and the staging area, or between different commits. Shows what has been added, removed, or modified.',
        example: 'git diff\ngit diff HEAD',
        svg: (
            <svg viewBox="0 0 400 200" className="w-full h-auto">
                <rect x="50" y="50" width="140" height="80" fill="#1e1e1e" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="120" y="75" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">Original</text>
                <text x="120" y="95" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">File</text>
                <path d="M 190 90 L 210 90" stroke="#79c0ff" strokeWidth="2" />
                <text x="200" y="95" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">vs</text>
                <rect x="210" y="50" width="140" height="80" fill="#1e1e1e" stroke="#79c0ff" strokeWidth="2" rx="4" />
                <text x="280" y="75" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">Modified</text>
                <text x="280" y="95" textAnchor="middle" fill="#79c0ff" fontSize="11" fontFamily="monospace">File</text>
                <rect x="120" y="105" width="40" height="15" fill="#ff6b6b" opacity="0.3" />
                <rect x="240" y="105" width="40" height="15" fill="#51cf66" opacity="0.3" />
                <text x="200" y="150" textAnchor="middle" fill="#79c0ff" fontSize="12" fontFamily="monospace">git diff</text>
            </svg>
        ),
    },
];

export default function GitCommandsPage() {
    const [openCommands, setOpenCommands] = useState<Record<string, boolean>>({});

    const toggleCommand = (commandId: string) => {
        setOpenCommands((prev) => ({
            ...prev,
            [commandId]: !prev[commandId],
        }));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Git Commands Guide" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="container mx-auto max-w-4xl px-4 py-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-foreground mb-4">
                            Git Commands Guide
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Master the most useful Git commands with visual explanations and examples.
                        </p>
                    </div>

                    <div className="space-y-2">
                        {gitCommands.map((cmd) => (
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

