export const tabs = ['fabric', 'size', 'features', 'summary'] as const;

export type Tab = (typeof tabs)[number];
