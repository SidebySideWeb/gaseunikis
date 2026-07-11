import { useState, type FormEvent } from 'react';

interface Props {
  formHeading: string;
  formSubmitLabel: string;
  subjectOptions: string[];
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm({ formHeading, formSubmitLabel, subjectOptions }: Props) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState<string>(subjectOptions[0] ?? '');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const inputClass =
    'w-full bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary py-4 px-5 transition-all outline-none';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setErrorMessage('Συμπληρώστε όλα τα υποχρεωτικά πεδία.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          subject,
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Η αποστολή απέτυχε. Δοκιμάστε ξανά.');
      }

      setStatus('success');
      setFullName('');
      setEmail('');
      setPhone('');
      setSubject(subjectOptions[0] ?? '');
      setMessage('');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Η αποστολή απέτυχε. Δοκιμάστε ξανά.');
    }
  }

  return (
    <div className="lg:col-span-7">
      <div className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl shadow-2xl relative border-t-4 border-primary">
        <div className="absolute top-0 right-0 p-8" aria-hidden="true">
          <span className="material-symbols-outlined text-primary/20 text-6xl animate-float">edit_square</span>
        </div>
        <h2 className="font-display text-headline-lg text-on-surface mb-8">{formHeading}</h2>

        {status === 'success' && (
          <div className="mb-6 p-4 rounded-xl bg-green-50 text-green-800 border border-green-200" role="status">
            Ευχαριστούμε για το μήνυμα! Θα επικοινωνήσουμε σύντομα μαζί σας.
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
              <label className="block font-label-md text-on-surface-variant" htmlFor="fullName">
                Ονοματεπώνυμο
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={inputClass}
                placeholder="Π.χ. Ιωάννα Παπαδοπούλου"
              />
            </div>
            <div className="space-y-2">
              <label className="block font-label-md text-on-surface-variant" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                placeholder="example@mail.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block font-label-md text-on-surface-variant" htmlFor="phone">
                Τηλέφωνο
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
                placeholder="69x xxxxxxx"
              />
            </div>
            <div className="space-y-2">
              <label className="block font-label-md text-on-surface-variant" htmlFor="subject">
                Θέμα
              </label>
              <select
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={inputClass}
              >
                {subjectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block font-label-md text-on-surface-variant" htmlFor="message">
              Το Μήνυμά σας
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} resize-none`}
              placeholder="Πώς μπορούμε να σας βοηθήσουμε;"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-primary text-on-primary font-display text-label-md py-4 rounded-xl hover:bg-primary-light transition-all duration-200 shadow-card hover:shadow-card-hover flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? (
              <>
                <span className="material-symbols-outlined animate-spin">sync</span>
                Αποστολή...
              </>
            ) : (
              <>
                {formSubmitLabel}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
