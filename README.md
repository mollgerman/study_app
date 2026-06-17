# SL Study Web App

Practice app for the Script Languages question banks in this folder.

## Features

- Simple username/password login.
- Course selector ready for more courses; currently seeded with `SL`.
- Practice by topic, mixed slide questions, missed questions, or Thomas past-exam questions.
- Ultimate mode with the 200 priority explained questions.
- Question sets of 10, 15, or 20.
- Immediate answer feedback with explanations.
- Session scores, topic accuracy, and missed-question review.
- Local JSON storage for development.
- Postgres storage on Render when `DATABASE_URL` is set.

## Run Locally

```bash
npm start
```

Open `http://localhost:4173`.

Local data is written to `data/local-store.json`, which is ignored by Git. The seed questions come from `sl_exam_master_question_bank.json` and `sl_exam_200_priority_app_import_explained.json`.

## Render Deployment

This repo includes `render.yaml`. Push the folder to GitHub, then create a new Blueprint on Render from that repository. Render will provision the web service and Postgres database, set `DATABASE_URL`, install `pg`, and run:

```bash
npm start
```

The app seeds the database automatically on first boot.
