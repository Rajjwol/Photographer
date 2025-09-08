import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AppLayout from '@/layouts/AppLayout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Head } from '@inertiajs/react';
interface SocialMedia {
    id: number;
    platform_name: string;
    icon?: string; // FontAwesome class or image URL (nullable in DB)
}

interface SocialConnection {
    id: number;
    profile_url: string;
    social_media: SocialMedia;
}

interface Album {
    id: number;
    album_name: string;
    album_detail?: string;
}

interface Achievement {
    id: number;
    description: string;
    date_achievement: string;
}

interface Photographer {
    id: number;
    full_name: string;
    about?: string;
    address?: string;
    social_connections: SocialConnection[];
    albums: Album[];
    achievements: Achievement[];
}

type Props = {
    photographer: Photographer;
};

export default function Photographer({ photographer }: Props) {
    return (
        <AppLayout>
            <>
                {/* Fonts + Title */}
                <Head title={photographer.full_name}>
                    <link rel="preconnect" href="https://fonts.bunny.net" />
                    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                </Head>

                <div className="font-sans text-gray-800">
                    {/* Hero */}
                    <section className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-12 md:flex-row">
                        <div className="h-40 w-40 rounded-full bg-gray-200" />
                        <div>
                            <h1 className="text-3xl font-bold">{photographer.full_name}</h1>
                            <p className="mt-2 text-gray-500">{photographer.about}</p>
                            <p className="mt-1 text-sm text-gray-400">
                                📍 {photographer.address} | ✦ {photographer.albums.length}+ Albums
                            </p>
                        </div>
                    </section>

                    {/* About Section */}
                    <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <h2 className="mb-4 text-xl font-semibold">About {photographer.full_name}</h2>
                            <p className="leading-relaxed text-gray-600">{photographer.about}</p>

                            {photographer.achievements.length > 0 && (
                                <div className="mt-4">
                                    <h3 className="mb-2 font-semibold">Achievements</h3>
                                    <ul className="list-inside list-disc space-y-1 text-gray-600">
                                        {photographer.achievements.map((a) => (
                                            <li key={a.id}>
                                                {a.description} <span className="text-sm text-gray-400">({a.date_achievement})</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

              
                        {/* Social Media Bio Data */}
                        <div className="rounded-xl bg-gray-50 p-6">
                            <h3 className="mb-3 font-semibold">Follow Me</h3>
                            <div className="flex flex-col gap-4">
                                {photographer.social_connections.map((sc) => (
                                    <a
                                        key={sc.id}
                                        href={sc.profile_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 rounded-lg border p-3 transition hover:bg-gray-100"
                                    >
                                        {/* Big Icon */}
                                        {sc.social_media.icon?.startsWith('fa') ? (
                                            <i className={`${sc.social_media.icon} text-2xl text-purple-600`} />
                                        ) : (
                                            <img src={sc.social_media.icon} alt={sc.social_media.platform_name} className="h-8 w-8" />
                                        )}
                                        {/* Platform + URL */}
                                        <div>
                                            <p className="font-medium">{sc.social_media.platform_name}</p>
                                            <p className="truncate text-sm text-gray-500">{sc.profile_url}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Featured Work */}
                    <section className="mx-auto max-w-7xl px-6 py-12 text-center">
                        <h2 className="mb-6 text-xl font-semibold">Featured Work</h2>
                        <div className="grid gap-6 md:grid-cols-3">
                            {photographer.albums.map((album) => (
                                <Card key={album.id}>
                                    <CardContent className="p-6">
                                        <div className="mb-4 h-32 bg-gray-200" />
                                        <h3 className="font-medium">{album.album_name}</h3>
                                        <p className="text-sm text-gray-500">{album.album_detail}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <Button className="mt-6">View Full Portfolio</Button>
                    </section>

                    {/* Contact Section */}
                    <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-2">

                        {/* Contact Info */}
                        <div className="rounded-xl bg-gray-50 p-6">
                            <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
                            <p className="text-gray-600">{photographer.full_name.toLowerCase()}@photography.com</p>
                            <p className="text-gray-600"> 9800000000 </p>
                            <p className="text-gray-600">{photographer.address}</p>

                            <h3 className="mt-4 mb-2 font-semibold">Follow Me</h3>
                            <div className="flex flex-wrap gap-3 text-gray-500">
                                {photographer.social_connections.map((sc) => (
                                    <a
                                        key={sc.id}
                                        href={sc.profile_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 rounded-lg border p-3 transition hover:bg-gray-100"
                                    >
                                        {/* Big Icon */}
                                        {sc.social_media.icon?.startsWith('fa') ? (
                                            <i className={`${sc.social_media.icon} text-2xl text-purple-600`} />
                                        ) : (
                                            <img src={sc.social_media.icon} alt={sc.social_media.platform_name} className="h-8 w-8" />
                                        )}
                                        {/* Platform + URL */}
                                        <div>
                                            <p className="font-medium">{sc.social_media.platform_name}</p>
                                            <p className="truncate text-sm text-gray-500">{sc.profile_url}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </>
        </AppLayout>
    );
}
