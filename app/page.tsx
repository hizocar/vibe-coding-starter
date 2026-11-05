"use client";

import { useState } from "react";
import { CUSTOMERS, EXAMPLE_MESSAGE } from "@/lib/customers";

// QuoteDesk v0: a rep pastes a customer's message, picks the customer and saves the request.
// The list below lives in this page only. Refresh the page and it is gone.
// That is on purpose: Class 2 replaces it with a database and a login.

type QuoteRequest = {
  id: number;
  customer: string;
  message: string;
  receivedAt: string;
};

export default function Home() {
  const [message, setMessage] = useState("");
  const [customer, setCustomer] = useState("");
  const [requests, setRequests] = useState<QuoteRequest[]>([]);
  const [problem, setProblem] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  function save(event: React.FormEvent) {
    event.preventDefault();
    if (!message.trim()) {
      setProblem("Paste the customer's message before saving.");
      return;
    }
    if (!customer) {
      setProblem("Pick the customer this message came from.");
      return;
    }
    const now = new Date();
    setRequests((current) => [
      {
        id: now.getTime(),
        customer,
        message: message.trim(),
        receivedAt: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
      ...current,
    ]);
    setMessage("");
    setCustomer("");
    setProblem("");
  }

  function remove(id: number) {
    setRequests((current) => current.filter((request) => request.id !== id));
  }

  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h1 className="text-3xl font-semibold tracking-tight">QuoteDesk</h1>
        <p className="rounded-full border border-line px-2.5 py-0.5 text-sm text-muted">
          v0 prototype
        </p>
        <p className="w-full text-muted">
          Paste a quote request, pick the customer, save it. One request, one line in today&apos;s list.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <form onSubmit={save} className="flex flex-col gap-4" noValidate>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-baseline justify-between gap-3">
              <label htmlFor="message" className="font-medium">
                Customer&apos;s message
              </label>
              <button
                type="button"
                onClick={() => {
                  setMessage(EXAMPLE_MESSAGE);
                  setProblem("");
                }}
                className="-my-2 py-2 text-sm text-accent underline-offset-4 hover:underline"
              >
                Use an example
              </button>
            </div>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={7}
              placeholder="Paste the WhatsApp or email text here"
              className="rounded-lg border border-line bg-surface px-3 py-2.5 text-base outline-none focus-visible:ring-2 focus-visible:ring-accent"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="customer" className="font-medium">
              Customer
            </label>
            <select
              id="customer"
              value={customer}
              onChange={(event) => setCustomer(event.target.value)}
              className="h-11 rounded-lg border border-line bg-surface px-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <option value="">Pick a customer</option>
              {CUSTOMERS.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <p role="alert" className="min-h-6 text-sm text-problem">
            {problem}
          </p>

          <button
            type="submit"
            className="h-12 rounded-lg bg-accent px-5 text-base font-medium text-on-accent transition-transform active:scale-[0.98]"
          >
            Save request
          </button>

          <p className="text-sm text-muted">
            Data rule: use invented or de-identified messages only. No real names, phone numbers or
            addresses.
          </p>
        </form>

        <section aria-labelledby="list-title" className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-3">
            <h2 id="list-title" className="text-xl font-semibold">
              Today&apos;s list
            </h2>
            <p className="text-sm text-muted" aria-live="polite">
              {requests.length === 0
                ? "Nothing saved yet"
                : `${requests.length} ${requests.length === 1 ? "request" : "requests"}`}
            </p>
          </div>

          {requests.length === 0 ? (
            <p className="rounded-lg border border-dashed border-line px-4 py-8 text-center text-muted">
              Saved requests appear here, newest first.
            </p>
          ) : (
            <ul className="flex flex-col gap-2">
              {requests.map((request) => {
                const open = openId === request.id;
                const long = request.message.length > 90;
                return (
                  <li key={request.id} className="rounded-lg border border-line bg-surface px-4 py-3">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-medium">{request.customer}</p>
                      <p className="shrink-0 text-sm tabular-nums text-muted">{request.receivedAt}</p>
                    </div>
                    <p className="mt-1 whitespace-pre-wrap break-words text-muted">
                      {open || !long ? request.message : `${request.message.slice(0, 90)}…`}
                    </p>
                    <div className="-mb-2 flex gap-4 text-sm">
                      {long && (
                        <button
                          type="button"
                          onClick={() => setOpenId(open ? null : request.id)}
                          className="py-2 text-accent underline-offset-4 hover:underline"
                          aria-expanded={open}
                        >
                          {open ? "Show less" : "Show the whole message"}
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => remove(request.id)}
                        className="py-2 text-muted underline-offset-4 hover:text-problem hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          <p className="text-sm text-muted">
            This list lives in this page, on this device. Refresh and it is gone. Session 2 gives it
            a database and a login.
          </p>
        </section>
      </div>
    </div>
  );
}
