import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useDomain = routeLoader$((requestEvent) => {
  const url = new URL(requestEvent.request.url);
  return url.hostname; // returns the domain name
});

export const head: DocumentHead = ({ resolveValue }) => {
  const domain = resolveValue(useDomain);
  return {
    title: `Website at ${domain}`,
    meta: [
      {
        name: "domain",
        content: domain,
      },
    ],
  };
};
export default component$(() => {
//  const location = useLocation();
//  const domain = location.url.hostname;
  return (
    <>
      <section class="flex h-screen w-full flex-col items-center justify-center space-y-4">
        <h1 class="text-4xl font-bold">Where do you go?</h1>
        <div class="flex flex-col space-y-4">
          <div class="flex h-16 w-full items-center justify-between space-x-4 rounded-md bg-white px-4 shadow">
            <h2 class="flex-grow text-2xl font-medium">Nostr Bounties</h2>
            <a
              href="/nostr"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-md bg-gray-800 px-4 py-2 text-white"
            >
              Go
            </a>
          </div>
          <div class="flex h-16 w-full items-center justify-between space-x-4 rounded-md bg-white px-4 shadow">
            <h2 class="flex-grow text-2xl font-medium">Palm AI Scraper</h2>
            <a
              href="palmai"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-md bg-gray-800 px-4 py-2 text-white"
            >
              Go
            </a>
          </div>
        </div>
      </section>
    </>
  );
});
