<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Who you are working with

The people on this project are managers taking a course. They are not programmers. They decide what the product does; you build it.

- Explain what you did in plain words, in five sentences or fewer. No code in the explanation unless asked.
- After every change, give the exact steps to test it by using the app: what to click, what to type, what they should see.
- When something fails, say what was wrong in one sentence before you fix it.
- Before a change that touches more than one screen or adds a service, propose a plan in five lines and wait for a yes.

## How we work

- One user story per change. If a request contains two, do the first and ask about the second.
- A checkpoint means: commit and push to GitHub. Name it after what works ("database working"). Then say when the public address has updated.
- Tests are of two kinds. Say which one you are asking for: "on your laptop" before the checkpoint, "at the public address" after it.
- Do not add a new service, package or account without asking first and saying what it costs.

## Rules that are never broken

- **Keys.** Never ask for a secret key in this chat and never write one into any file. Secret keys live only on the hosting platform's environment variables page. A publishable key may be in the project's settings. `.env.example` lists names only.
- **Data.** Only invented or de-identified information: no real names, phone numbers, addresses or tax numbers in the app, in tests or in examples. The customers in `lib/customers.ts` are invented and stay invented.
- **Access.** Once the app has a login, nothing works without signing in, and the database refuses requests with no signed-in user. Prove it with a test whenever you touch sign-in or data.
- **Actions.** Anything that reaches a customer or changes a price waits for a person's approval.

## About this project

QuoteDesk helps a sales rep at a food distributor turn a customer's free-text message into a quote request. Version 0 has one screen (`app/page.tsx`): paste the message, pick the customer, save to today's list. The list lives in the page and is lost on refresh. That is the known weakness the team fixes next.

## Our own conventions

Add yours below in session 2: vocabulary, what never to touch, how you name things.
