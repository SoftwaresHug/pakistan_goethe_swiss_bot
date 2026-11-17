// Auto-generated configuration for Goethe Switzerland Pakistan Portal

export const config = {
  botName: "Goethe Switzerland Pakistan",
  country: "Pakistan",
  provider: "Goethe-Institut",
  destination: "Switzerland",
  loginUrl: "https://www.goethe.de/ins/pk/ar/spr/prf.html",
  centers: [
  "Karachi",
  "Lahore",
  "Islamabad"
],
  visaCategories: [
  "German Exam A1",
  "German Exam A2",
  "German Exam B1",
  "German Exam B2",
  "German Exam C1",
  "German Exam C2"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
