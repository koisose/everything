import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>
        <section class="w-full py-12 md:py-24 lg:py-32">
            <div class="container px-4 md:px-6">
                <div class="flex flex-col items-center space-y-4 text-center">
                    <div class="space-y-2">
                        <h1 class="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none">Nostr Bounties</h1>
                    </div>
                    <div class="space-x-4">
                        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-10 px-4 py-2 transition-all duration-300 hover:bg-white hover:text-gray-800 hover:shadow-lg">
                            Create Bounty
                        </button>
                        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background h-10 px-4 py-2 transition-all duration-300 hover:bg-white hover:text-gray-800 hover:shadow-lg">
                            Login with Alby
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div class="relative bg-white rounded-md p-6 w-full max-w-md text-center">
              
                <h2 class="text-xl font-bold mb-4">Create Bounty</h2>
                <form>
                    <input class="w-full p-2 border rounded mb-4" placeholder="Bounty Title" type="text" />
                    <textarea class="w-full p-2 h-24 border rounded mb-4" placeholder="Bounty Description"></textarea>
                    <input class="w-full p-2 border rounded mb-4" placeholder="Bounty Price" type="text" />
                    <button
                        class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 w-full py-2 bg-gray-800 text-white rounded"
                        type="submit"
                        >
                        Submit
                    </button>
                    <button
                        class="mt-3 inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 w-full py-2 bg-red-800 text-white rounded"
                        type="submit"
                        >
                        Close
                    </button>
                </form>
            </div>
        </div>
        <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm m-4 hover:shadow-lg cursor-pointer"
            data-v0-t="card"
            >
            <div class="flex flex-col items-start gap-2 p-4">
                <h3 class="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">Bounty Title Here</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">Bounty description here...</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">Price: $500</p>
            </div>
        </div>
        </>
        );
});

export const head: DocumentHead = {
    title: "palm scraper",
    meta: [
        {
            name: "description",
            content: "Scraping using palm 2 api",
        },
        ],
};
