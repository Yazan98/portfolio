/// <reference types="vite/client" />

// Data modules are authored in plain JS (see src/data/*). Allow importing them
// from TS without per-import @ts-ignore.
declare module '*.js';
