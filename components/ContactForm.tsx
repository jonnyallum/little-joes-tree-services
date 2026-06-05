"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle, Loader2, Paperclip, X } from "lucide-react";
import {
  contactSchema,
  type ContactInput,
  PHOTO_ACCEPT,
  PHOTO_MAX_BYTES,
  PHOTO_MAX_FILES,
} from "@/lib/contact-schema";
import { trackEvent } from "@/lib/analytics";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/site-config";

type Status = "idle" | "submitting" | "success" | "error";

// Static-site form delivery via Web3Forms (no backend needed). Create a free
// access key at https://web3forms.com, the destination email is set there.
// When the key is absent, the form tells people to call instead of failing.
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const fieldBase =
  "w-full rounded-lg border border-forest-900/15 bg-white px-4 py-3 text-[0.95rem] text-forest-900 shadow-sm transition-colors placeholder:text-bone-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFiles(list: FileList | null) {
    setFileError(null);
    if (!list) return;
    const picked = Array.from(list);
    const next = [...files, ...picked].slice(0, PHOTO_MAX_FILES);

    for (const f of picked) {
      if (f.size > PHOTO_MAX_BYTES) {
        setFileError(`"${f.name}" is over 5MB, please attach a smaller photo.`);
        return;
      }
    }
    if (files.length + picked.length > PHOTO_MAX_FILES) {
      setFileError(`You can attach up to ${PHOTO_MAX_FILES} photos.`);
    }
    setFiles(next);
  }

  function removeFile(idx: number) {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  }

  async function onSubmit(data: ContactInput) {
    // Honeypot tripped → pretend success, send nothing.
    if (data.company) {
      setStatus("success");
      return;
    }

    // No form service configured yet → don't fail silently; ask them to call.
    if (!WEB3FORMS_KEY) {
      setStatus("error");
      setServerError(
        `Our online form isn't connected yet. Please call us on ${siteConfig.phone} and we'll help straight away.`,
      );
      return;
    }

    setStatus("submitting");
    setServerError(null);
    try {
      const body = new FormData();
      body.append("access_key", WEB3FORMS_KEY);
      body.append("subject", `New enquiry from ${data.name}${data.postcode ? ` (${data.postcode})` : ""}`);
      body.append("from_name", siteConfig.businessName);
      body.append("name", data.name);
      body.append("phone", data.phone);
      body.append("email", data.email || "");
      body.append("postcode", data.postcode || "");
      body.append("message", data.message);
      // Web3Forms' own honeypot.
      body.append("botcheck", "");
      files.forEach((f, i) => body.append(`photo_${i + 1}`, f));

      const res = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body });
      const json = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };

      if (!res.ok || !json.success) {
        throw new Error(json.message || "Something went wrong. Please try again or call us.");
      }

      trackEvent("form_submission", { has_photos: files.length > 0 });
      setStatus("success");
      reset();
      setFiles([]);
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-forest-600/20 bg-forest-50 p-8 text-center shadow-soft">
        <CheckCircle2 className="mx-auto h-12 w-12 text-forest-600" aria-hidden />
        <h3 className="mt-4 text-2xl font-semibold text-forest-900">Thanks, message sent</h3>
        <p className="mx-auto mt-2 max-w-md text-bone-700">
          We&rsquo;ve got your details and we&rsquo;ll come back to you as soon as we can.
          If it&rsquo;s urgent, give us a ring and we&rsquo;ll help straight away.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={buttonVariants({ variant: "outline", size: "md", className: "mt-6" })}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot, visually hidden, off-screen, not announced. */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label>
          Company
          <input type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" required error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            className={fieldBase}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </Field>
        <Field label="Phone number" required error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            className={fieldBase}
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
        </Field>
        <Field label="Email" hint="optional" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            className={fieldBase}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
        <Field label="Postcode" hint="optional" error={errors.postcode?.message}>
          <input
            type="text"
            autoComplete="postal-code"
            className={fieldBase}
            aria-invalid={!!errors.postcode}
            {...register("postcode")}
          />
        </Field>
      </div>

      <Field label="What do you need doing?" required error={errors.message?.message}>
        <textarea
          rows={5}
          className={cn(fieldBase, "resize-y")}
          placeholder="Tell us a bit about the job, e.g. a large tree that needs reducing, an overgrown hedge, a stump to grind out…"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </Field>

      {/* Photo upload */}
      <div>
        <span className="mb-1.5 block text-sm font-medium text-forest-900">
          Photos of the job <span className="font-normal text-bone-600">(optional)</span>
        </span>
        <input
          ref={fileInputRef}
          type="file"
          accept={PHOTO_ACCEPT}
          multiple
          className="sr-only"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-forest-900/25 bg-bone-50 px-4 py-4 text-sm font-medium text-bone-700 transition-colors hover:border-emerald-400 hover:text-forest-900"
        >
          <Paperclip className="h-4 w-4" aria-hidden />
          Add photos (up to {PHOTO_MAX_FILES}, 5MB each)
        </button>
        {fileError && <p className="mt-1.5 text-sm text-red-700">{fileError}</p>}
        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((f, i) => (
              <li
                key={`${f.name}-${i}`}
                className="flex items-center justify-between rounded-lg border border-forest-900/10 bg-white px-3 py-2 text-sm"
              >
                <span className="truncate text-bone-700">{f.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="ml-3 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-bone-600 hover:bg-bone-100 hover:text-forest-900"
                  aria-label={`Remove ${f.name}`}
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {status === "error" && serverError && (
        <p className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={buttonVariants({ variant: "accent", size: "lg", className: "w-full" })}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          "Send my enquiry"
        )}
      </button>
      <p className="text-center text-xs text-bone-600">
        We&rsquo;ll only use your details to reply about your enquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  hint,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-forest-900">
        {label}
        {required && <span className="text-emerald-600"> *</span>}
        {hint && <span className="font-normal text-bone-600"> ({hint})</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-sm text-red-700">{error}</span>}
    </label>
  );
}
