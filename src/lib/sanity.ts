import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "dvtasqxf",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-08-07",
});
