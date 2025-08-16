I want to build a very simple Chrome extension named Salesforce shortcuts with the following features:
1) The extension should inject a floating icon on the bottom-left corner of any Salesforce page.
2) On clicking the icon, it should show a dropdown menu with shortcut links.
3) Each link, when clicked, should redirect to a specific Salesforce page.
4) The icon and dropdown should only appear on Salesforce domains:
*.lightning.force.com
*.salesforce.com
*.my.salesforce.com

Below are the shortcut links
"Object Manager": "/lightning/setup/ObjectManager/home",
"Profiles": "/lightning/setup/EnhancedProfiles/home",
"Permission Sets": "/lightning/setup/PermSets/home",
"Health Check": "/lightning/setup/HealthCheck/home",
"Feed Tracking": "/lightning/setup/FeedTracking/home",
"Schema Builder": "/lightning/setup/SchemaBuilder/home",
"Apex Classes": "/lightning/setup/ApexClasses/home",
"Apex Triggers": "/lightning/setup/ApexTriggers/home",
"Apex Test Execution": "/lightning/setup/ApexTestQueue/home",
"Apex Test History": "/lightning/setup/ApexTestHistory/home",
"Flows": "/lightning/setup/Flows/home",""
"Developer Console": "/_ui/common/apex/debug/ApexCSIPage"

Behaviour
1) The dropdown menu appears directly above the floating icon
2) When a menu item is clicked, use window.location.hre = currentDomain + shortcutPath to. redirect
3) The menu should auto-hide when clicked outside.
4) Style the icon and menu to look clean and light blue on white, with hover effects.

Now generate all the required code files with comments.