export type ClinicalAlert = {
  code: string;
  label: string;
  severity: "critical" | "warning";
};

export function evaluateCpnAlerts(input: {
  systolic?: number;
  diastolic?: number;
  hemoglobin?: number;
  weightLossPct?: number;
  gestationalAgeSA?: number;
}): ClinicalAlert[] {
  const alerts: ClinicalAlert[] = [];
  if ((input.systolic ?? 0) > 140 || (input.diastolic ?? 0) > 90) {
    alerts.push({ code: "PREECLAMPSIA", label: "Risque de pré-éclampsie / HTA", severity: "critical" });
  }
  if ((input.hemoglobin ?? 99) < 11) {
    alerts.push({ code: "ANEMIA", label: "Anémie (Hb < 11 g/dl)", severity: "critical" });
  }
  if ((input.weightLossPct ?? 0) > 5) {
    alerts.push({ code: "MALNUTRITION", label: "Risque de dénutrition", severity: "warning" });
  }
  if ((input.gestationalAgeSA ?? 0) > 41) {
    alerts.push({ code: "POSTTERM", label: "Terme dépassé", severity: "warning" });
  }
  return alerts;
}
