import { type IncomingMessage, type ServerResponse } from "http";
import { type ServerBuild } from "@remix-run/node";
export declare let createRequestHandler: (build: ServerBuild, { mode, criticalCss, }: {
    mode?: string | undefined;
    criticalCss?: string | undefined;
}) => (req: IncomingMessage, res: ServerResponse) => Promise<void>;
