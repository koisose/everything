import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>
        <section class="w-full py-5 md:py-10 lg:py-20"><div class="container px-4 md:px-6"><div class="flex flex-col items-center space-y-4 text-center"><div class="space-y-2"><h1 class="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none">
            Nostr Bounties
        </h1></div><div class="space-x-4"><button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white h-10 px-4 py-2 transition-all duration-300 hover:shadow-lg">
            Create Bounty
        </button><button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background h-10 px-4 py-2 transition-all duration-300 hover:bg-white hover:text-gray-800 hover:shadow-lg">
            Login with Alby
        </button></div></div></div></section><div class="rounded-lg border bg-card text-card-foreground shadow-sm m-4 hover:shadow-lg cursor-pointer" data-v0-t="card"><div class="flex flex-col items-start gap-2 p-4"><h3 class="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
            Bounty Title Here
        </h3><p class="text-sm text-gray-500 dark:text-gray-400">
            Bounty description here...
        </p><p class="text-sm text-gray-500 dark:text-gray-400">
            Price: $500
        </p></div></div>
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
