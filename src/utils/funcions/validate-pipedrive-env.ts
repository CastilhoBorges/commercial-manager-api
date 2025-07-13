export function validatePipedriveEnv(baseUrl: string, apiKey: string) {
  if (!baseUrl || !apiKey) {
    throw new Error(
      'PIPEDRIVE_BASE_URL_V2 and PIPEDRIVE_API_KEY must be provided',
    );
  }

  return;
}
