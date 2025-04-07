# Nest: Better Ad Blocking

A Chrome extension that provides a cozy, ad-free Twitter/X experience by blocking undisclosed gambling advertisements.

## Features

- Blocks gambling advertisements on Twitter/X
- Lightweight and fast performance
- Clean, modern interface

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the `extension` folder
5. The Nest extension icon should appear in your Chrome toolbar

## Usage

1. By having the extension downloaded and enabled, it will be working in the background on its own

## Development

The extension consists of several key components:

- `manifest.json`: Extension configuration and permissions
- `popup.html` & `popup.js`: Extension popup interface
- `options.html` & `options.js`: Extension options page
- `content.js`: Main content script for ad detection
- `ml/model_inference/model.js`: Machine learning model for image comparison
- `ml/image_database/`: Database of ad images for comparison

## Technologies Used

- HTML/CSS/JavaScript
- Chrome Extension API
- Machine Learning for image comparison

## Contributing

Feel free to submit issues and enhancement requests!

## Authors

- Brint ([@brint](https://x.com/brint))
- Amar ([@amarchandracom](https://x.com/amarchandracom))
