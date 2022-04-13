import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

// const log = (error: string | unknown) => Sentry.captureException(error);

const init = () =>
	Sentry.init({
		dsn: process.env.REACT_APP_SENTRY_DNS,
		integrations: [
			new Integrations.BrowserTracing({
				tracingOrigins: [process.env.REACT_APP_API_URL!],
			}),
		],
		attachStacktrace: true,
		tracesSampleRate: 1.0,
	});

export const logger = {
	// log,
	init,
};
