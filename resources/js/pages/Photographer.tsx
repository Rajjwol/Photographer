import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Head } from '@inertiajs/react';
import AppLayout from "@/layouts/AppLayout";

export default function Photographer() {
    return (
        <>
         <AppLayout>
             <Head title="Photographer">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="font-sans text-gray-800">

                {/* Hero */}
                <section className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-12 md:flex-row">
                    <div className="h-40 w-40 rounded-full bg-gray-200" />
                    <div>
                        <h1 className="text-3xl font-bold">Ram</h1>
                        <p className="mt-2 text-gray-500">Fashion & Portrait Photographer</p>
                        <p className="mt-1 text-sm text-gray-400">📍 New York | ✦ 12+ Years Exp | ✦ 50+ Brand Campaigns</p>
                    </div>
                </section>

                {/* About Section */}
                <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
                    <div className="md:col-span-2">
                        <h2 className="mb-4 text-xl font-semibold">About Ram</h2>
                        <p className="leading-relaxed text-gray-600">
                            With over 12 years of experience in fashion photography, Ram has established himself as one of the most sought-after
                            photographers in the industry. His unique style blends contemporary fashion with timeless elegance.
                        </p>
                        <p className="mt-4 leading-relaxed text-gray-600">
                            Ram’s journey began at the Fashion Institute of Technology, where he developed his keen eye for detail and aesthetics. He
                            has since worked with fashion houses, luxury brands, and international magazines.
                        </p>
                    </div>
                    <div className="rounded-xl bg-gray-50 p-6">
                        <h3 className="mb-3 font-semibold">Specialties</h3>
                        <ul className="list-inside list-disc space-y-1 text-gray-600">
                            <li>Fashion Editorial</li>
                            <li>Portrait Photography</li>
                            <li>Commercial Campaigns</li>
                            <li>Beauty Photography</li>
                            <li>Event Photography</li>
                        </ul>
                    </div>
                </section>

                {/* Featured Work */}
                <section className="mx-auto max-w-7xl px-6 py-12 text-center">
                    <h2 className="mb-6 text-xl font-semibold">Featured Work</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 h-32 bg-gray-200" />
                                <h3 className="font-medium">Spring Collection 2025</h3>
                                <p className="text-sm text-gray-500">Editorial shoot for Vogue featuring emerging designers.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 h-32 bg-gray-200" />
                                <h3 className="font-medium">Executive Portraits</h3>
                                <p className="text-sm text-gray-500">Corporate portraits shot for Future 500 executives.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <div className="mb-4 h-32 bg-gray-200" />
                                <h3 className="font-medium">Luxury Cosmetics</h3>
                                <p className="text-sm text-gray-500">Beauty campaign for international cosmetics brand.</p>
                            </CardContent>
                        </Card>
                    </div>
                    <Button className="mt-6">View Full Portfolio</Button>
                </section>

                {/* Testimonials */}
                <section className="mx-auto max-w-7xl px-6 py-12">
                    <h2 className="mb-6 text-center text-xl font-semibold">Client Testimonials</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <Card>
                            <CardContent className="p-6">
                                <p className="mb-4 text-gray-600">
                                    “Ram’s vision exceeded my expectations. He delivered stunning photos that captured our brand’s personality.”
                                </p>
                                <p className="font-semibold">Sarah Johnson</p>
                                <p className="text-sm text-gray-500">Marketing Director, Vogue</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <p className="mb-4 text-gray-600">
                                    “Working with Ram was seamless and enjoyable. His expertise in fashion photography helped us achieve an incredible
                                    campaign.”
                                </p>
                                <p className="font-semibold">Michael Chen</p>
                                <p className="text-sm text-gray-500">CEO, Future 500</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
         </AppLayout>

        </>
    );
}
