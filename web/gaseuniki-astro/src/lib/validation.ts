const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value);
}

function normalizeGreekPhoneDigits(value: string): string {
  let normalized = value.replace(/[\s\-().]/g, '');

  if (normalized.startsWith('+30')) {
    normalized = normalized.slice(3);
  } else if (normalized.startsWith('0030')) {
    normalized = normalized.slice(4);
  } else if (normalized.startsWith('30') && normalized.length === 12) {
    normalized = normalized.slice(2);
  }

  return normalized.replace(/\D/g, '');
}

export function isValidGreekPhone(value: string): boolean {
  const digits = normalizeGreekPhoneDigits(value);

  if (digits.length !== 10) {
    return false;
  }

  // Geographic (2…) or mobile (69…)
  return /^2\d{9}$/.test(digits) || /^69\d{8}$/.test(digits);
}
