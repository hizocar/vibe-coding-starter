# QuoteDesk starter

A working starting point for the course **Vibe Coding for Business Leaders** (MBA, Universidad Técnica Federico Santa María).
Course site: https://hizocar.github.io/vibe_coding_mba/

It is the app as it stands at the end of session 1: a sales rep pastes a customer's message, picks the customer and saves the
request to today's list. Nothing else. No login, no database, no AI. You add those in sessions 2 and 3, with your assistant.

Use it if you could not get your own app out of the app builder, or if you prefer to start session 2 from a clean base.
You do not need to know how to program to use it.

## Make your own copy (5 minutes, once per team)

1. At the top of this page press **Use this template**, then **Create a new repository**.
2. Name it after your product. Choose **Private**. Press **Create repository**.
3. In your new repository open **Settings**, then **Collaborators**, and invite your teammates.
4. Go back to the [toolkit setup guide](https://hizocar.github.io/vibe_coding_mba/setup.html) and continue from **Part B**.
   Your copy replaces Part A.

It worked when your copy shows a padlock or the word "Private" next to its name and your teammates can open it.

## See it running

Open your copy in your assistant (setup guide, Part B) and ask:

> Describe this project to me in five sentences, then run it on my laptop so I can see it.

A browser tab opens with the app. Paste a message, pick a customer, save. Refresh the page: the list is empty again.
That is expected. Giving the list a database is the first thing you do in session 2.

## Make it yours

The app is about a food distributor's quote requests because that is the running case of the course. To turn it into your own product, ask your assistant, one request at a time:

> This app is a starting point. My product is for [who] and it helps them [do what]. Change the title, the two form fields and the example so they fit. Keep everything else. Tell me what you changed.

## What is inside

| File | What it is, in plain words |
|---|---|
| `app/page.tsx` | The one screen of the app: the form and today's list |
| `lib/customers.ts` | The list of invented customers and the example message |
| `app/globals.css` | The colors. Change them here |
| `AGENTS.md` | The standing instructions your assistant reads every time. Add your own in session 2 |
| `BUILD_LOG.md` | Your build log. Each member keeps one |
| `.env.example` | The names of the settings the app will need later. It holds no keys |

## Two rules

**Data.** Use only invented or de-identified information until your team has completed the session 4 lab, closed every critical
finding, and has the written agreement of the organization that owns the data. No real names, phone numbers, addresses or tax numbers.

**Keys.** A secret key is typed in one place only: your hosting platform's environment variables page. Never in a chat, a file,
a screenshot or this repository.

## For reference

Your assistant runs these for you. They are listed so you recognize them.

```bash
npm install     # download what the app needs, once
npm run dev     # run the app on your laptop
npm run build   # check that the app is ready to be published
```

Built with Next.js and Tailwind CSS. MIT license.
