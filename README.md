# Topic Places · Android (Capacitor wrap)

Tiny Capacitor shell that wraps the live PWA at `https://topic-places.vercel.app`
into an installable Android APK.

## What it is

- ~5 MB APK (mostly the native runtime, no bundled web code)
- Launches as a full-screen native shell
- Loads `topic-places.vercel.app` via WebView
- Same auth, same data, same code as the PWA — just with a launcher icon and no browser chrome

## How to get an APK

GitHub Actions builds on every push to `main`. Pull the APK from the workflow run's Artifacts tab.
Workflow: `.github/workflows/build-apk.yml`

Manual trigger: Actions tab → **Build APK** → Run workflow.

## How to install on an Android phone

1. Download `topic-places-debug.apk` from the Actions artifacts
2. Transfer to phone (email, AirDrop-Android, USB)
3. Tap to install — Android will prompt "Install unknown apps" the first time
4. Launch from app drawer

The APK is **unsigned debug** — fine for sideload, not store-ready. Signing + Play Store submission is a follow-on.

## Local dev (when we want to iterate)

```bash
npm install
npx cap sync android
# Open in Android Studio for emulator
npx cap open android
```

## Roadmap

1. ✅ Wrap mode (this) — remote URL, online-only, instant APK
2. ⬜ Native push notifications via Capacitor's push-notifications plugin
3. ⬜ Offline cache via service worker / Capacitor preferences
4. ⬜ Signing + Play Store listing
5. ⬜ iOS (`npx cap add ios` — requires Xcode on a Mac)
