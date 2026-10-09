"use client";

import { FormEvent, useMemo, useState } from "react";
import { company, contact, copy, hasText, whatsappHref } from "@/content/site";
import { buttonClass } from "@/components/ui";

type Fields = {
  name: string;
  phone: string;
  email: string;
  date: string;
  message: string;
  companyWebsite: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  phone: "",
  email: "",
  date: "",
  message: "",
  companyWebsite: "",
};

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) errors.name = "Enter your full name.";
  const digits = fields.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) {
    errors.phone = "Enter a phone number with at least 10 digits.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (fields.date) {
    const chosen = new Date(`${fields.date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(chosen.getTime()) || chosen < today) {
      errors.date = "Choose today or a later date.";
    }
  }
  if (fields.message.length > 1000) errors.message = "Keep the message within 1,000 characters.";
  return errors;
}

function summaryOf(fields: Fields) {
  return [
    "Site visit request",
    `Name: ${fields.name.trim()}`,
    `Phone: ${fields.phone.trim()}`,
    `Email: ${fields.email.trim()}`,
    `Preferred visit date: ${fields.date || "Not specified"}`,
    `Message: ${fields.message.trim() || "None"}`,
  ].join("\n");
}

export function EnquiryForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "unsent" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const whatsapp = whatsappHref();

  const delivery = useMemo(() => {
    if (hasText(contact.enquiryEndpoint)) return "endpoint" as const;
    if (hasText(contact.email)) return "email" as const;
    return "none" as const;
  }, []);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    if (fields.companyWebsite.trim()) {
      setStatus("sent");
      return;
    }

    const payload = {
      name: fields.name.trim(),
      phone: fields.phone.trim(),
      email: fields.email.trim(),
      preferredVisitDate: fields.date,
      message: fields.message.trim(),
      company: company.legalName,
    };

    if (delivery === "endpoint") {
      setStatus("sending");
      try {
        const response = await fetch(contact.enquiryEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("Request failed");
        setStatus("sent");
      } catch {
        setStatus("error");
      }
      return;
    }

    if (delivery === "email") {
      const subject = encodeURIComponent(`Site visit request — ${company.shortName}`);
      const body = encodeURIComponent(summaryOf(fields));
      window.location.href = `mailto:${contact.email.trim()}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("unsent");
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summaryOf(fields));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const inputClass =
    "mt-2 w-full border border-line bg-paper px-3 py-3 text-charcoal outline-none transition-colors focus:border-olive";

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1120px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-[0.72rem] uppercase tracking-[0.22em] text-bronze">Enquiry</p>
          <h2 className="mt-4 font-serif text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl">
            {copy.enquiry.heading}
          </h2>
          <p className="mt-6 text-ink/85">{copy.enquiry.body}</p>

          <div className="mt-10 border-t border-line pt-6 text-sm">
            <p className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">Registered office</p>
            <p className="mt-2">{company.registeredOffice}</p>
            {hasText(contact.phone) ? (
              <p className="mt-4">
                <a className="underline decoration-line underline-offset-4" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                  {contact.phone}
                </a>
              </p>
            ) : null}
            {hasText(contact.email) ? (
              <p className="mt-2">
                <a className="underline decoration-line underline-offset-4" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </p>
            ) : null}
            {whatsapp ? (
              <a href={whatsapp} className={`${buttonClass("secondary")} mt-6`} target="_blank" rel="noopener noreferrer">
                Message on WhatsApp
              </a>
            ) : null}
          </div>
        </div>

        <div className="lg:col-span-7">
          {status === "sent" || status === "unsent" ? (
            <div className="border border-line bg-paper p-8 sm:p-10" role="status">
              <h3 className="font-serif text-4xl font-medium leading-tight">
                {status === "sent" ? "Request received." : "This request was not sent."}
              </h3>
              <p className="mt-4 text-ink/85">
                {status === "sent" && delivery === "endpoint"
                  ? "Thank you. The details have been sent to the office. A visit is confirmed only when someone replies."
                  : status === "sent"
                    ? "Your email application should open with this request prepared. Send that message to reach the office. A visit is confirmed only when someone replies."
                    : "Thank you for writing this out. No email address or enquiry address has been added to the site yet, so the office has not received it. You can copy the details and keep them until a phone number or email is published."}
              </p>
              {status === "unsent" ? (
                <button type="button" className={`${buttonClass("secondary")} mt-8`} onClick={copySummary}>
                  {copied ? "Copied" : "Copy details"}
                </button>
              ) : null}
              <button
                type="button"
                className="mt-6 block text-sm text-muted underline decoration-line underline-offset-4"
                onClick={() => {
                  setStatus("idle");
                  setFields(empty);
                  setCopied(false);
                }}
              >
                Write another request
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="relative border border-line bg-paper p-6 sm:p-8">
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="companyWebsite">Company website</label>
                <input
                  id="companyWebsite"
                  name="companyWebsite"
                  tabIndex={-1}
                  autoComplete="off"
                  value={fields.companyWebsite}
                  onChange={(event) => update("companyWebsite", event.target.value)}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" htmlFor="full-name" error={errors.name} className="sm:col-span-2">
                  <input
                    id="full-name"
                    name="name"
                    autoComplete="name"
                    required
                    value={fields.name}
                    onChange={(event) => update("name", event.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone number" htmlFor="phone" error={errors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    value={fields.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" htmlFor="email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={fields.email}
                    onChange={(event) => update("email", event.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Preferred visit date" htmlFor="visit-date" error={errors.date} optional>
                  <input
                    id="visit-date"
                    name="date"
                    type="date"
                    value={fields.date}
                    onChange={(event) => update("date", event.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Message" htmlFor="message" error={errors.message} optional className="sm:col-span-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={fields.message}
                    onChange={(event) => update("message", event.target.value)}
                    className={inputClass}
                  />
                </Field>
              </div>

              {status === "error" ? (
                <p className="mt-4 text-sm text-danger" role="alert">
                  The request could not be sent. Please try again.
                </p>
              ) : null}

              <button type="submit" className={`${buttonClass("primary")} mt-6 w-full sm:w-auto`} disabled={status === "sending"}>
                {status === "sending" ? "Sending" : "Request a Site Visit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional = false,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
        {label}
        {optional ? <span className="ml-2 normal-case tracking-normal">Optional</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
