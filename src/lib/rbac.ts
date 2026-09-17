export type Role = "ADMIN_NATIONAL" | "ADMIN_ZONE" | "SAGE_FEMME" | "GYNECOLOGUE";

export type SessionContext = {
  userId: string;
  role: Role;
  zoneId: string;
  facilityId: string;
};

export function canSeeAllZones(role: Role) {
  return role === "ADMIN_NATIONAL";
}

export function zoneFilter(ctx: SessionContext) {
  if (canSeeAllZones(ctx.role)) return {};
  return { zoneId: ctx.zoneId };
}

export function assertSameZone(ctx: SessionContext, zoneId: string) {
  if (canSeeAllZones(ctx.role)) return;
  if (ctx.zoneId !== zoneId) {
    throw new Error("RBAC: accès hors zone de responsabilité");
  }
}
