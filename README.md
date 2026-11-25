# Tunisia site portfolio

Four original, responsive website concepts for pitching local businesses. Every example is fictional. The portfolio is at `index.html`; each preview uses `demo.html?demo=KEY`.

| Key | Starting point | Suitable for |
| --- | --- | --- |
| `cafe` | Warm editorial | Cafés, restaurants, bakeries |
| `service` | Clean architectural | Agencies, consultants, trades, professional services |
| `wellness` | Soft editorial | Salons, spas, wellness studios |
| `shop` | Product led | Boutiques, makers, product showcases |

## Make a client version

1. Copy an object in `sites.js` and give it a new key, e.g. `client-name`.
2. Replace all sample text, photos, opening hours, and address. Keep `<em>...</em>` around the highlighted part of `heading`.
3. Set `whatsapp` to a number in international format (example: `216XXXXXXXX`), or `phone` to a dialable number. Set `maps` and `instagram` to full `https://` links if needed. Leave fields empty when unavailable.
4. Share `demo.html?demo=client-name`. The code uses the copied object's `kind` to select its visual style.
5. Change the language or writing to match the client. These examples use French, but any text can be replaced with Arabic or English; an Arabic version also needs `dir="rtl"` and appropriate layout testing.

All sample names and descriptions are invented. Don't present a demo as a completed client project. Contact buttons in the samples scroll to the contact section until real contact details are set.

## Publish with GitHub Pages

Upload these files to a public repository, then open **Settings → Pages → Build and deployment** and select **Deploy from a branch**, `main`, `/(root)`. The portfolio URL will be `https://USERNAME.github.io/REPOSITORY/`. Links in the portfolio use relative paths so they work under a repository path.

Photography is loaded from Unsplash URLs and fonts from Google Fonts. A production client version should use photos supplied by the business or properly licensed assets and optimize them locally. This is an original implementation inspired by broad editorial, service, and product site patterns; it does not contain Kolpu prompts or their restricted assets.
