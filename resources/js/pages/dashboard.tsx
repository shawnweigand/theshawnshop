import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

type ProjectItem = {
    id: string;
    title: string;
    description: string;
    difficulty: string;
    duration: string;
    tags: string[];
    image: string | null;
    status: string;
    link: string;
    price?: string;
};

export default function Dashboard() {
    const [items, setItems] = useState<ProjectItem[]>([]);
    const [certifications, setCertifications] = useState<ProjectItem[]>([]);
    const [guides, setGuides] = useState<ProjectItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load all JSON files from the items folder
        const loadItems = async () => {
            try {
                // Use Vite's import.meta.glob to dynamically import all JSON files
                // With eager: true, modules are pre-loaded and JSON files return the object directly
                const itemModules = import.meta.glob('../items/*.json', { eager: true });

                const loadedItems: ProjectItem[] = Object.values(itemModules).map(
                    (module: any) => module.default || module
                ) as ProjectItem[];

                // Filter to only show active items
                const activeItems = loadedItems.filter((item) => item.status === 'active');

                // Separate certifications, guides, and projects
                const certificationItems = activeItems.filter((item) =>
                    item.tags && item.tags.some(tag => tag.toLowerCase() === 'certification')
                );
                const guideItems = activeItems.filter((item) =>
                    item.tags && item.tags.some(tag => tag.toLowerCase() === 'guide') &&
                    !item.tags.some(tag => tag.toLowerCase() === 'certification')
                );
                const projectItems = activeItems.filter((item) =>
                    (!item.tags || !item.tags.some(tag => tag.toLowerCase() === 'certification')) &&
                    (!item.tags || !item.tags.some(tag => tag.toLowerCase() === 'guide'))
                );

                // Sort by title alphabetically
                certificationItems.sort((a, b) => a.title.localeCompare(b.title));
                guideItems.sort((a, b) => a.title.localeCompare(b.title));
                projectItems.sort((a, b) => a.title.localeCompare(b.title));

                setCertifications(certificationItems);
                setGuides(guideItems);
                setItems(projectItems);
            } catch (error) {
                console.error('Error loading items:', error);
            } finally {
                setLoading(false);
            }
        };

        loadItems();
    }, []);

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case 'beginner':
                return 'bg-green-500/20 text-green-900 dark:text-green-600 hover:bg-green-500/20 hover:text-green-900 dark:hover:text-green-600';
            case 'intermediate':
                return 'bg-yellow-500/20 text-yellow-900 dark:text-yellow-600 hover:bg-yellow-500/20 hover:text-yellow-900 dark:hover:text-yellow-600';
            case 'advanced':
                return 'bg-red-500/20 text-red-900 dark:text-red-600 hover:bg-red-500/20 hover:text-red-900 dark:hover:text-red-600';
            default:
                return 'bg-gray-500/20 text-gray-900 dark:text-gray-600 hover:bg-gray-500/20 hover:text-gray-900 dark:hover:text-gray-600';
        }
    };

    const renderCardGrid = (itemsToRender: ProjectItem[]) => (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 items-stretch">
            {itemsToRender.map((item) => (
                <div key={item.id} className="flex flex-col gap-2 h-full">
                    <div className="flex items-center gap-2 flex-wrap px-6">
                        <Badge className={`${getDifficultyColor(item.difficulty)} font-semibold px-2.5 py-1`}>
                            {item.difficulty}
                        </Badge>
                        <Badge variant="outline" className="font-semibold px-2.5 py-1">
                            ⏱️ {item.duration}
                        </Badge>
                        {item.price === 'free' && (
                            <Badge className="font-semibold px-2.5 py-1 bg-purple-500/20 text-purple-900 dark:text-purple-400 hover:bg-purple-500/20 hover:text-purple-900 dark:hover:text-purple-400 border-purple-500/30">
                                FREE
                            </Badge>
                        )}
                    </div>
                    <Link href={route(item.link)} className="flex-1 flex flex-col">
                        <Card className="hover:shadow-md transition-shadow overflow-hidden flex-1 flex flex-col cursor-pointer h-full">
                            {item.image && (
                                <div className="relative w-full h-40 bg-muted flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            )}
                            <CardContent className="flex flex-col flex-1">
                                <CardTitle className="text-base mb-3">{item.title}</CardTitle>
                                <p className="text-sm text-muted-foreground flex-1">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            ))}
        </div>
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
                            <p className="text-muted-foreground">Browse available learning projects and resources</p>
                        </div>

                        {loading ? (
                            <div className="grid auto-rows-min gap-4 md:grid-cols-2 xl:grid-cols-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <Card key={i} className="animate-pulse">
                                        <CardHeader>
                                            <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                                            <div className="h-3 bg-muted rounded w-1/2"></div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="h-3 bg-muted rounded w-full mb-2"></div>
                                            <div className="h-3 bg-muted rounded w-5/6"></div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : items.length === 0 ? (
                            <Card>
                                <CardContent className="pt-6">
                                    <p className="text-center text-muted-foreground">No items found.</p>
                                </CardContent>
                            </Card>
                        ) : (
                            renderCardGrid(items)
                        )}
                    </div>

                    {guides.length > 0 && (
                        <div className="space-y-4">
                            <div>
                                <h1 className="text-2xl font-bold tracking-tight">Guides</h1>
                                <p className="text-muted-foreground">Step-by-step guides and learning resources</p>
                            </div>
                            {renderCardGrid(guides)}
                        </div>
                    )}

                    {certifications.length > 0 && (
                        <div className="space-y-4">
                            <div>
                                <h1 className="text-2xl font-bold tracking-tight">Certifications</h1>
                                <p className="text-muted-foreground">Guides to help pass your certification exams</p>
                            </div>
                            {renderCardGrid(certifications)}
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
