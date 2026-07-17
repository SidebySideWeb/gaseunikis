import { useState, type FormEvent } from 'react';
import DatePickerField from '../ui/DatePickerField';
import RecaptchaField from '../ui/RecaptchaField';
import { getRecaptchaResponse, resetRecaptcha } from '../../lib/recaptcha-client';

interface Props {
  formHeading: string;
  formDescription: string;
  formSubmitLabel: string;
  privacyCheckboxLabel: string;
  sportOptions: string[];
  experienceOptions: string[];
  recaptchaSiteKey: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function RegistrationForm({
  formHeading,
  formDescription,
  formSubmitLabel,
  privacyCheckboxLabel,
  sportOptions,
  experienceOptions,
  recaptchaSiteKey,
}: Props) {
  const [athleteName, setAthleteName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [guardianPhone, setGuardianPhone] = useState('');
  const [guardianEmail, setGuardianEmail] = useState('');
  const [sportInterest, setSportInterest] = useState<string>(sportOptions[0] ?? '');
  const [previousExperience, setPreviousExperience] = useState<string>(experienceOptions[0] ?? '');
  const [notes, setNotes] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const inputClass =
    'w-full px-5 py-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-primary bg-surface-container-low transition-all';

  const today = new Date().toISOString().slice(0, 10);
  const earliestBirthDate = new Date();
  earliestBirthDate.setFullYear(earliestBirthDate.getFullYear() - 80);
  const minBirthDate = earliestBirthDate.toISOString().slice(0, 10);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage('');

    if (!athleteName.trim() || !birthDate || !guardianName.trim() || !guardianPhone.trim()) {
      setErrorMessage('Συμπληρώστε όλα τα υποχρεωτικά πεδία.');
      return;
    }

    if (!privacyAccepted) {
      setErrorMessage('Πρέπει να αποδεχτείτε την επεξεργασία των δεδομένων σας.');
      return;
    }

    const recaptchaToken = getRecaptchaResponse('registration');
    if (recaptchaSiteKey && !recaptchaToken) {
      setErrorMessage('Επιβεβαιώστε ότι δεν είστε ρομπότ.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          athleteName: athleteName.trim(),
          birthDate,
          guardianName: guardianName.trim(),
          guardianPhone: guardianPhone.trim(),
          guardianEmail: guardianEmail.trim() || undefined,
          sportInterest,
          previousExperience,
          notes: notes.trim() || undefined,
          privacyAccepted,
          recaptchaToken,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? 'Η αποστολή απέτυχε. Δοκιμάστε ξανά.');
      }

      setStatus('success');
      setAthleteName('');
      setBirthDate('');
      setGuardianName('');
      setGuardianPhone('');
      setGuardianEmail('');
      setSportInterest(sportOptions[0] ?? '');
      setPreviousExperience(experienceOptions[0] ?? '');
      setNotes('');
      setPrivacyAccepted(false);
      resetRecaptcha('registration');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Η αποστολή απέτυχε. Δοκιμάστε ξανά.');
      resetRecaptcha('registration');
    }
  }

  return (
    <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-primary relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
      <h2 className="font-display text-headline-lg mb-2">{formHeading}</h2>
      <p className="text-on-surface-variant mb-10">{formDescription}</p>

      {status === 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-green-50 text-green-800 border border-green-200" role="status">
          Η αίτησή σας υποβλήθηκε με επιτυχία! Θα επικοινωνήσουμε μαζί σας σύντομα.
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-error-container text-on-error-container border border-error/20" role="alert">
          {errorMessage}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-label-md text-on-surface-variant" htmlFor="athleteName">
              Ονοματεπώνυμο Αθλητή *
            </label>
            <input
              id="athleteName"
              name="athleteName"
              type="text"
              required
              value={athleteName}
              onChange={(e) => setAthleteName(e.target.value)}
              className={inputClass}
              placeholder="π.χ. Άννα Παπαδοπούλου"
            />
          </div>
          <DatePickerField
            id="birthDate"
            name="birthDate"
            label="Ημερομηνία Γέννησης *"
            required
            value={birthDate}
            min={minBirthDate}
            max={today}
            onChange={(e) => setBirthDate(e.target.value)}
            inputClassName={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-label-md text-on-surface-variant" htmlFor="guardianName">
              Όνομα Κηδεμόνα *
            </label>
            <input
              id="guardianName"
              name="guardianName"
              type="text"
              required
              value={guardianName}
              onChange={(e) => setGuardianName(e.target.value)}
              className={inputClass}
              placeholder="π.χ. Γεώργιος Παπαδόπουλος"
            />
          </div>
          <div className="space-y-2">
            <label className="font-label-md text-on-surface-variant" htmlFor="guardianPhone">
              Τηλέφωνο Επικοινωνίας *
            </label>
            <input
              id="guardianPhone"
              name="guardianPhone"
              type="tel"
              required
              value={guardianPhone}
              onChange={(e) => setGuardianPhone(e.target.value)}
              className={inputClass}
              placeholder="69x xxxx xxx"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-label-md text-on-surface-variant" htmlFor="guardianEmail">
            Διεύθυνση Email
          </label>
          <input
            id="guardianEmail"
            name="guardianEmail"
            type="email"
            value={guardianEmail}
            onChange={(e) => setGuardianEmail(e.target.value)}
            className={inputClass}
            placeholder="your@email.com"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-label-md text-on-surface-variant" htmlFor="sportInterest">
              Άθλημα Ενδιαφέροντος
            </label>
            <select
              id="sportInterest"
              name="sportInterest"
              value={sportInterest}
              onChange={(e) => setSportInterest(e.target.value)}
              className={inputClass}
            >
              {sportOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="font-label-md text-on-surface-variant" htmlFor="previousExperience">
              Προηγούμενη Εμπειρία;
            </label>
            <select
              id="previousExperience"
              name="previousExperience"
              value={previousExperience}
              onChange={(e) => setPreviousExperience(e.target.value)}
              className={inputClass}
            >
              {experienceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-label-md text-on-surface-variant" htmlFor="notes">
            Μήνυμα / Σημειώσεις
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className={inputClass}
            placeholder="Οποιαδήποτε πληροφορία θέλετε να μοιραστείτε..."
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            id="privacyAccepted"
            name="privacyAccepted"
            type="checkbox"
            required
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            className="mt-1 h-5 w-5 text-primary border-outline-variant rounded focus:ring-primary"
          />
          <label className="text-sm text-on-surface-variant" htmlFor="privacyAccepted">
            {privacyCheckboxLabel}
          </label>
        </div>

        <RecaptchaField siteKey={recaptchaSiteKey} widgetKey="registration" />

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-primary-dark text-on-primary font-bold py-5 rounded-2xl shadow-card hover:shadow-card-hover hover:bg-primary transition-all duration-200 active:scale-95 text-body-lg flex justify-center items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <span className="material-symbols-outlined animate-spin">sync</span>
              Αποστολή...
            </>
          ) : (
            <>
              {formSubmitLabel}
              <span className="material-symbols-outlined">send</span>
            </>
          )}
        </button>
      </form>
    </section>
  );
}
