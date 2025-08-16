# Salesforce Shortcuts Chrome Extension

A simple and efficient Chrome extension that provides quick access to commonly used Salesforce setup pages through a floating shortcut menu.

## Features

- **Floating Icon**: A lightning bolt icon appears in the bottom-left corner of Salesforce pages
- **Quick Access Menu**: Click the icon to reveal a dropdown menu with 12 essential Salesforce shortcuts
- **Smart Domain Detection**: Only appears on Salesforce domains (*.lightning.force.com, *.salesforce.com, *.my.salesforce.com)
- **Clean Design**: Light blue theme with smooth hover effects and animations
- **Auto-hide**: Menu automatically closes when clicking outside
- **Responsive**: Adapts to different screen sizes

## Available Shortcuts

The extension provides quick access to these Salesforce pages:

- **Object Manager** - Manage custom objects and fields
- **Profiles** - Configure user profiles and permissions
- **Permission Sets** - Manage permission sets
- **Health Check** - Review org security settings
- **Feed Tracking** - Configure Chatter feed tracking
- **Schema Builder** - Visual schema design tool
- **Apex Classes** - Manage Apex classes
- **Apex Triggers** - Manage Apex triggers
- **Apex Test Execution** - Run Apex tests
- **Apex Test History** - View test execution history
- **Flows** - Manage Flow automation
- **Developer Console** - Access the Developer Console

## Installation

### Method 1: Load Unpacked Extension (Recommended for Development)

1. **Download the Extension Files**
   - Download all files from this repository
   - Ensure you have: `manifest.json`, `content.js`, `styles.css`, and the icon files

2. **Generate Icon Files**
   - Open `create-icons.html` in your web browser
   - Click each download button to save the required icon files:
     - `icon16.png`
     - `icon48.png` 
     - `icon128.png`
   - Place these PNG files in the same directory as the other extension files

3. **Load the Extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" using the toggle in the top right
   - Click "Load unpacked" button
   - Select the folder containing all your extension files
   - The extension should now appear in your extensions list

4. **Test the Extension**
   - Visit any Salesforce page (e.g., your Salesforce org)
   - Look for the lightning bolt icon in the bottom-left corner
   - Click the icon to see the shortcuts menu

### Method 2: Create Extension Package (For Distribution)

1. Follow steps 1-2 from Method 1 to prepare all files
2. Zip all extension files together
3. Upload to Chrome Web Store (requires developer account)

## File Structure

```
salesforce-shortcuts/
├── manifest.json          # Extension configuration
├── content.js            # Main functionality script
├── styles.css            # Styling for icon and menu
├── create-icons.html     # Icon generator utility
├── icon16.png           # 16x16 extension icon
├── icon48.png           # 48x48 extension icon
├── icon128.png          # 128x128 extension icon
└── README.md            # This file
```

## How It Works

1. **Domain Detection**: The extension only activates on Salesforce domains specified in the manifest
2. **Content Script Injection**: When a Salesforce page loads, the content script injects the floating icon and dropdown menu
3. **Event Handling**: Click events on the icon toggle the dropdown, while clicks outside auto-hide it
4. **Navigation**: Clicking a menu item constructs the full URL using the current domain and navigates to the target page

## Customization

### Adding New Shortcuts

To add new shortcuts, edit the `shortcuts` array in `content.js`:

```javascript
const shortcuts = [
    // Existing shortcuts...
    { name: "Your New Shortcut", path: "/lightning/setup/YourPath/home" }
];
```

### Styling Changes

Modify `styles.css` to customize:
- Icon appearance and position
- Menu styling and colors
- Hover effects and animations
- Responsive breakpoints

### Domain Configuration

Update `manifest.json` to change which domains the extension works on:

```json
"matches": [
    "*://*.lightning.force.com/*",
    "*://*.salesforce.com/*",
    "*://*.my.salesforce.com/*"
]
```

## Browser Compatibility

- **Chrome**: Fully supported (Manifest V3)
- **Edge**: Compatible with Chromium-based Edge
- **Firefox**: Requires manifest conversion for Firefox extensions

## Security & Privacy

- **No Data Collection**: The extension doesn't collect or transmit any user data
- **Local Operation**: All functionality runs locally in the browser
- **Minimal Permissions**: Only requires `activeTab` permission for the current page
- **Domain Restricted**: Only operates on specified Salesforce domains

## Troubleshooting

### Extension Not Appearing
- Verify you're on a Salesforce domain
- Check that the extension is enabled in `chrome://extensions/`
- Refresh the Salesforce page after installing

### Icon Not Visible
- Check browser zoom level (extension is responsive)
- Ensure no other extensions are conflicting
- Verify all CSS files loaded correctly

### Menu Not Working
- Check browser console for JavaScript errors
- Ensure `content.js` loaded properly
- Verify click event handlers are attached

### Navigation Issues
- Confirm you have proper permissions in your Salesforce org
- Check that the target pages exist in your org
- Verify URL construction is correct for your domain

## Development

### Local Development Setup

1. Clone or download the extension files
2. Make your changes to the source files
3. Reload the extension in `chrome://extensions/`
4. Test on Salesforce pages

### Debugging

- Use Chrome DevTools to inspect the extension elements
- Check the Console tab for any JavaScript errors
- Use the Elements tab to verify CSS styling

## Contributing

Feel free to submit issues and enhancement requests! When contributing:

1. Test your changes thoroughly on different Salesforce orgs
2. Ensure compatibility with various screen sizes
3. Follow the existing code style and commenting patterns
4. Update documentation as needed

## License

This project is open source and available under the MIT License.

## Version History

- **v1.0** - Initial release with 12 Salesforce shortcuts and floating menu interface
