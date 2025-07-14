import { defineConfig } from "orval";

export default defineConfig({
  hopae: {
    input: { target: "https://esports-api.furo.one/api-json" },
    output: {
      target: "./src/api/index.ts",
      schemas: "./src/api/model",
      mock: false,
      override: {
        mutator: {
          path: "src/lib/axios.ts",
          name: "customInstance",
        },
      },
      clean: true,
    },
  },
});
