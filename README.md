# Comet Auto-Focus Chrome Extension

🎯 A simple Chrome extension that automatically focuses the prompt input field when you open a new Perplexity Comet tab.

## The Problem

When opening a new Comet tab, the prompt input field doesn't automatically receive focus. This means you have to manually click into the field every time before you can start typing - a small but annoying friction that adds up over time.

## The Solution

This lightweight extension automatically focuses the input field as soon as the page loads, so you can start typing immediately after opening a new tab.

## Installation

### Method 1: Install from Source (Developer Mode)

1. **Download the extension**
   - Clone this repository or download it as a ZIP file
   ```bash
   git clone https://github.com/int32at/comet-autofocus-extension.git
   ```
   - Or download ZIP: Click "Code" → "Download ZIP" and extract it

2. **Open Chrome Extensions page**
   - Navigate to `chrome://extensions/`
   - Or: Menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top right corner

4. **Load the extension**
   - Click "Load unpacked"
   - Select the folder containing the extension files
   - The extension should now appear in your extensions list

5. **Test it out**
   - Open a new Comet tab
   - The input field should automatically be focused and ready for typing

## How It Works

The extension uses a content script that:
- Runs when a Comet new tab page loads (`comet://newtab/*`)
- Searches for the textarea or input field on the page
- Automatically focuses it using JavaScript's `.focus()` method
- Retries a few times if the element isn't immediately available

## Files

- `manifest.json` - Extension configuration
- `content.js` - Script that handles the auto-focus logic

## Technical Details

- **Manifest Version**: 3 (latest)
- **Permissions**: None required (no special permissions needed)
- **Performance**: Minimal impact, only runs on Comet new tab pages

## Compatibility

- Works with Google Chrome and Chromium-based browsers
- Compatible with Perplexity Comet extension

## Contributing

Feel free to open issues or submit pull requests if you have suggestions for improvements!

## License

MIT License - feel free to use and modify as needed.

## Author

Created by [int32at](https://github.com/int32at)

---

**Note**: This is an unofficial extension and is not affiliated with Perplexity AI.
