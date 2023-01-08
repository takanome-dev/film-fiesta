/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

// const log = (error: string | unknown) => Sentry.captureException(error);

const init = () =>
	Sentry.init({
		dsn: import.meta.env.VITE_SENTRY_DSN,
		integrations: [
			new Integrations.BrowserTracing({
				tracingOrigins: [import.meta.env.VITE_API_URL],
			}),
		],
		attachStacktrace: true,
		tracesSampleRate: 1.0,
	});

export const logger = {
	// log,
	init,
};
