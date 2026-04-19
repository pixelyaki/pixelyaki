"use client";

import { sendGTMEvent } from "@next/third-parties/google";

type GtmPrimitive = string | number | boolean;
type GtmPayload = Record<string, GtmPrimitive>;

export function trackGtmEvent(event: string, payload: GtmPayload = {}) {
  if (!event) return;

  try {
    sendGTMEvent({
      event,
      ...payload
    });
  } catch (error) {
    console.error("[gtm] failed to send event", event, error);
  }
}
