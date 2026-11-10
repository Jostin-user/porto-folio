"use client";
import { useState } from "react";
import { site } from "@/content/site";

type State = "idle" | "sending" | "success" | "error";
const requestTypes = ["Projet freelance", "Opportunité professionnelle (stage, emploi)", "Autre"];
const field =
  "mt-2 w-full rounded-sm border border-line bg-surface px-4 py-3 text-cream placeholder:text-muted focus:border-accent";

export default function ContactForm() {
  const c = site.contact;
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data: Record<string, unknown> = Object.fromEntries(new FormData(form).entries());
    if (data.website) return; // champ piège anti-spam : un humain ne le remplit pas
    delete data.website;
    if (c.formAccessKey) data.access_key = c.formAccessKey;
    setState("sending");
    try {
      const res = await fetch(c.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === false) throw new Error("envoi refusé");
      form.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-12 max-w-xl space-y-5 border-t border-line pt-10">
      <p className="font-serif text-2xl">Ou envoyez-moi un message</p>
      <div>
        <label htmlFor="cf-name">Nom</label>
        <input id="cf-name" name="name" type="text" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="cf-email">E-mail</label>
        <input id="cf-email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="cf-type">Type de demande</label>
        <select id="cf-type" name="type" className={field}>
          {requestTypes.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" rows={5} required className={field} />
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button type="submit" disabled={state === "sending"} className="btn btn-primary disabled:opacity-60">
        {state === "sending" ? "Envoi en cours…" : "Envoyer"}
      </button>
      <p role="status" aria-live="polite" className="text-sm">
        {state === "success" && "Message envoyé. Je vous réponds dès que possible."}
        {state === "error" && "L'envoi a échoué. Écrivez-moi directement par e-mail ou WhatsApp."}
      </p>
    </form>
  );
}
