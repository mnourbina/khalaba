"use server";

import { z } from "zod";
import { assertSameZone, type SessionContext } from "@/lib/rbac";

const createPatientSchema = z.object({
  name: z.string().min(2),
  surname: z.string().min(1),
  phone: z.string().regex(/^\+[1-9]\d{6,14}$/),
  age: z.number().int().min(12).max(55),
  zoneId: z.string().uuid(),
  facilityId: z.string().uuid(),
});

export async function createPatientAction(ctx: SessionContext, raw: unknown) {
  const data = createPatientSchema.parse(raw);
  assertSameZone(ctx, data.zoneId);
  return { ok: true as const, khalabaId: `KH-${Date.now().toString().slice(-6)}`, data };
}
