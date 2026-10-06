const AI_PROMPT_ARTIFACTS = [
  /\s*Let me know if you(?:'|’)d like me to tighten the short description further or draft an alternate version for social sharing\.?\s*$/i,
];

/** Remove known editorial assistant chatter that must never reach public pages. */
export function sanitizeBlogDescription(value?: string | null): string {
  if (!value) return '';

  return AI_PROMPT_ARTIFACTS.reduce(
    (clean, artifact) => clean.replace(artifact, ''),
    value,
  ).trim();
}
