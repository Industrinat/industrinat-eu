// lib/quote-form.ts
//
// Uppgifter från priskalkylatorerna till /api/quote utöver mått och pris.
// Tomma värden skickas inte, så att mejlet utelämnar raderna.

export type QuoteDetails = {
  quantity?: number;
  article?: string;
  category?: string;
  location?: string;
  environment?: string;
  fallHeight?: string;
  objectWeight?: string;
  doubleNet?: boolean;
  preInspection?: boolean;
  marketingConsent?: boolean;
  fileName?: string;
};

export function appendQuoteDetails(formData: FormData, details: QuoteDetails): void {
  for (const [key, value] of Object.entries(details)) {
    if (value === undefined || value === '' || value === false) continue;
    formData.append(key, value === true ? 'Ja' : String(value));
  }
}

/** Etiketten för ett val i en lista, så att mejlet visar samma text som skärmen. */
export function optionLabel(options: { value: string; label: string }[], value: string): string | undefined {
  return options.find((o) => o.value === value)?.label;
}

/** Namnen på valda filer. Själva filerna skickas inte. */
export function fileNames(files: FileList | null): string | undefined {
  return files ? Array.from(files).map((f) => f.name).join(', ') : undefined;
}
