import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import IconCast from "../../public/favicon.svg?jsx";

export default component$(() => {
  return (
    <>
      <div class="center">
        <h1><IconCast style={{width: 100, height: 100}} /><br />Unstream</h1>
        <p>A self taught fullstack developer.</p>
        <p><a href="https://i.wont.stream/github" aria-label="GitHub">GitHub</a></p>
      </div>
    </>
  );
});


export const head: DocumentHead = {
  title: "Unstream",
  meta: [
    {
      name: "description",
      content: "A self taught fullstack developer.",
    },
  ],
};
