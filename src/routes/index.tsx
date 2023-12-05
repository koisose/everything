import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
    <section class="w-full h-screen flex flex-col items-center justify-center space-y-4">
      <h1 class="text-4xl font-bold">Where do you go?</h1>
      <div class="flex flex-col space-y-4">
        <div class="w-full h-16 bg-white shadow rounded-md flex items-center justify-between px-4 space-x-4">
          <h2 class="text-2xl font-medium flex-grow">Nostr Bounties</h2>
          <a href="/nostr" target="_blank" rel="noopener noreferrer" class="text-white bg-gray-800 px-4 py-2 rounded-md">
            Go
          </a>
        </div>
        <div class="w-full h-16 bg-white shadow rounded-md flex items-center justify-between px-4 space-x-4">
          <h2 class="text-2xl font-medium flex-grow">Palm AI Scraper</h2>
          <a href="palmai" target="_blank" rel="noopener noreferrer" class="text-white bg-gray-800 px-4 py-2 rounded-md">
            Go
          </a>
        </div>

      </div>
    </section>
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
