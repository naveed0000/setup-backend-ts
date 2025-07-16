declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    MONGODB_URI: string;
    // Add other variables here as needed
    NODE_ENV: "development" | "production";
  }
}
