# Gmail External Sender Warning Variator

This Chrome extension reduces user desensitization to Gmail's default external sender warnings by **randomizing the visual style** of the warning banner shown when replying to non-contacts or addresses outside your organization.

> ⚠️ Intended for Google Workspace environments where users regularly ignore or overlook Gmail's native "Be cautious about sharing sensitive information..." banner.

---

## ✨ What It Does

Gmail displays a yellow warning banner when replying to external recipients. Over time, this visual cue can lose its impact due to repeated exposure. This extension:

- Detects the Gmail external sender warning banner
- Randomizes its **font**, **font size**, **text color**, and **background color**
- Ensures only the **visible, active** warning banner is modified
- Re-applies styles dynamically when the user navigates threads or composes new messages

By changing the visual appearance each time, this plugin helps restore user attention to potentially risky communications.

---

## 🔧 Installation

1. Clone or download this repo:

   ```bash
   git clone https://github.com/YOUR_USERNAME/gmail-external-sender-warning-variator.git
   ```

2. In Chrome, go to `chrome://extensions/`

3. Enable **Developer mode** (top right)

4. Click **Load unpacked** and select the cloned project folder

5. Open Gmail, compose or reply to an external recipient, and watch the banner style change!

---

## 📁 Project Structure

```
gmail-external-sender-warning-variator/
├── manifest.json       # Chrome extension config
├── styles.js           # Contains font/color/style randomization logic
└── content.js          # Main logic to detect and modify Gmail warning banner
```

---

## 🖌️ Example Fonts Used

To maximize visibility and variation, the extension uses an assortment of bold or unconventional fonts such as:

- Comic Sans MS
- Papyrus
- Brush Script MT
- Impact
- Kristen ITC
- Segoe Print
- Arial Black

You can modify `styles.js` to tailor the font pool or color palette to your organization’s preferences.

---

## 📦 Compatibility

- ✅ Works in **Gmail web UI**
- ✅ Supports **Google Workspace accounts**
- ✅ Tested in **Chrome (v114+)**
- ❌ Not currently available on the Chrome Web Store (install via source only)

---

## 🧠 Why This Exists

Security banners only work if users *notice* them. By introducing visual variability, this extension helps reduce banner fatigue and improves the odds that users pause before sharing sensitive information with unknown contacts.

---

## 🙋‍♂️ Feedback & Contributions

Feel free to open issues or submit pull requests. Ideas for dark mode support, admin configuration, or user preferences welcome!

---

## 📄 License

MIT License
