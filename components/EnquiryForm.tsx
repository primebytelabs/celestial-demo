"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="border-t border-leaf py-8">
        <p className="type-label-botanical mb-2">Received</p>
        <p className="text-moss text-lg">
          Enquiry received. Our trade team will contact you within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-0">
      <div className="grid gap-0 sm:grid-cols-2">
        <Field label="Full name" name="name" autoComplete="name" required />
        <Field label="Company / firm" name="company" autoComplete="organization" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
        <Field label="City / State" name="location" required />
        <Field label="Years in pharma/FMCG trade" name="experience" />
      </div>
      <div className="pt-6">
        <label htmlFor="message" className="type-label-botanical block mb-4">
          Tell us about your distribution reach
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="input-medical resize-none"
          placeholder="Territory, current brands carried, outlet count..."
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-clay text-sm pt-4">
          {errorMessage}
        </p>
      )}

      <div className="pt-10">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-medical w-full sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Submit enquiry"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className="border-t border-line py-5 pr-8">
      <label htmlFor={name} className="type-label-botanical block mb-3">
        {label}
        {required && <span className="text-clay" aria-hidden="true"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        aria-required={required}
        className="input-medical"
        placeholder={label}
      />
    </div>
  );
}
