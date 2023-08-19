import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.API_BASE_URL
  },
});
