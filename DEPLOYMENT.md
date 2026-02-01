# Firebase Hosting — Setup & Deploy Guide

This project is deployed using **Firebase Hosting** with **static files** (HTML / CSS / JS).

All deployable assets live in the `public/` directory.

---

## Prerequisites

Before starting, make sure you have:

- Node.js (LTS recommended)  
  Required to run Firebase CLI; LTS ensures stability and long-term support.

- npm (comes with Node.js)  
  Used to install Firebase CLI and manage tooling dependencies.

- Access to the Firebase project: `supersquarepool`  
  Required to deploy; without access, Firebase will block project selection and hosting uploads.


---

## One-Time Setup

These steps only need to be done **once per machine or fresh checkout**.

---

### 1. Install Firebase CLI

Install the Firebase CLI globally:

```bash
npm install -g firebase-tools
```

Verify the installation:

```bash
firebase --version
```

---

### 2. Authenticate with Firebase

Log into your Firebase account:

```bash
firebase login
```

This will open a browser window for authentication.

---

### 3. Verify Firebase Project Access

List available Firebase projects:

```bash
firebase projects:list
```

You should see `supersquarepool` in the output.

Set it as the active project:

```bash
firebase use supersquarepool
```

---

### 4. Initialize Firebase Hosting

Run the Firebase initialization wizard:

```bash
firebase init hosting
```

Use **exactly** the following options when prompted:

- Use a web framework? → No
- Public directory → public
- Configure as a single-page app (rewrite all URLs to /index.html)? → No
- Set up automatic builds and deploys with GitHub? → No
- Overwrite public/index.html? → No

This will create or update:

- `firebase.json`
- `.firebaserc`

---

## Deploying the Site

Once setup is complete, deployment is a **single command**:

```bash
firebase deploy --only hosting
```

Firebase will upload everything inside the `public/` directory and output the live URL.

Example:

```text
https://supersquarepool.web.app
```

---

## Typical Development Workflow

Whenever you make changes:

```bash
# edit files in public/
firebase deploy --only hosting
```

---

## Notes

- Only files inside `public/` are deployed
- No SPA routing
- No GitHub-based deployments
