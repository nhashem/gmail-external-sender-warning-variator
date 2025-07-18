// ======== style generation (assumes styles.js is loaded before this) ========
function styleBanner(banner) {
  const style = randomStyle(); // from styles.js
  console.log("[BannerStyler] Applying style to banner:", style);
  Object.assign(banner.style, style);
  banner.dataset.bannerStyled = "true"; // tag to avoid restyling
}

// ======== visibility & ancestry logic ========
function isVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.width > 0 &&
    rect.height > 0 &&
    window.getComputedStyle(element).visibility !== "hidden" &&
    window.getComputedStyle(element).display !== "none"
  );
}

// ======== core logic: find and style only the correct banner ========
function findAndStyleBanner() {
  console.log("[BannerStyler] Scanning for potential warning banners...");

  const banners = document.querySelectorAll("div.aeM");

  if (banners.length === 0) {
    console.log("[BannerStyler] No aeM banners found.");
  }

  for (const banner of banners) {
    const span = banner.querySelector("span.aeX");
    const text = banner.textContent || "";

    const isReallyVisible =
      isVisible(banner) &&
      document.body.contains(banner) &&
      !banner.closest('[aria-hidden="true"], [style*="display: none"], [hidden]');

    if (
      span &&
      span.textContent.includes("Be cautious about sharing sensitive information") &&
      isReallyVisible &&
      !banner.dataset.bannerStyled
    ) {
      console.log("[BannerStyler] Styling banner:", text);
      styleBanner(banner);
      break; // only style the first matching visible banner
    } else {
      console.log(
        "[BannerStyler] Skipping:",
        text.slice(0, 100),
        isReallyVisible ? "(visible)" : "(invisible or detached)"
      );
    }
  }
}

// ======== observe DOM changes inside the Gmail conversation pane ========
function initializeObserver() {
  const mainContainer = document.querySelector('div[role="main"]');

  if (!mainContainer) {
    console.warn("[BannerStyler] Could not find Gmail main content area.");
    return;
  }

  const observer = new MutationObserver(() => {
    findAndStyleBanner();
  });

  observer.observe(mainContainer, {
    childList: true,
    subtree: true
  });

  console.log("[BannerStyler] Observer attached to div[role='main'].");
}

// ======== fallback loop in case Gmail's main container is slow to appear ========
function waitForMainAndInitObserver(retries = 10) {
  const mainContainer = document.querySelector('div[role="main"]');

  if (mainContainer) {
    console.log("[BannerStyler] Found main container, initializing observer...");
    initializeObserver();
  } else if (retries > 0) {
    console.log("[BannerStyler] Waiting for Gmail main container...");
    setTimeout(() => waitForMainAndInitObserver(retries - 1), 500);
  } else {
    console.warn("[BannerStyler] Failed to find main container after retries.");
  }
}

// ======== main entry point ========
window.addEventListener("load", () => {
  console.log("[BannerStyler] Page loaded. Running initial banner scan...");
  findAndStyleBanner();
  setTimeout(findAndStyleBanner, 1500); // buffer for Gmail SPA loading
  waitForMainAndInitObserver(); // scoped observer init
});
