// Salesforce Shortcuts Chrome Extension
// Content script that injects floating icon and dropdown menu

(function() {
    'use strict';
    
    // Shortcut links configuration
    const shortcuts = [
        { name: "Object Manager", path: "/lightning/setup/ObjectManager/home" },
        { name: "Profiles", path: "/lightning/setup/EnhancedProfiles/home" },
        { name: "Permission Sets", path: "/lightning/setup/PermSets/home" },
        { name: "Health Check", path: "/lightning/setup/HealthCheck/home" },
        { name: "Feed Tracking", path: "/lightning/setup/FeedTracking/home" },
        { name: "Schema Builder", path: "/lightning/setup/SchemaBuilder/home" },
        { name: "Apex Classes", path: "/lightning/setup/ApexClasses/home" },
        { name: "Apex Triggers", path: "/lightning/setup/ApexTriggers/home" },
        { name: "Apex Test Execution", path: "/lightning/setup/ApexTestQueue/home" },
        { name: "Apex Test History", path: "/lightning/setup/ApexTestHistory/home" },
        { name: "Flows", path: "/lightning/setup/Flows/home" },
        { name: "Developer Console", path: "/_ui/common/apex/debug/ApexCSIPage" }
    ];
    
    // Get current domain for URL construction
    const currentDomain = window.location.origin;
    
    // Create floating icon element
    function createFloatingIcon() {
        const icon = document.createElement('div');
        icon.id = 'sf-shortcuts-icon';
        icon.innerHTML = '⚡'; // Lightning bolt icon for Salesforce
        icon.title = 'Salesforce Shortcuts';
        
        // Add click event to toggle dropdown
        icon.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleDropdown();
        });
        
        return icon;
    }
    
    // Create dropdown menu element
    function createDropdownMenu() {
        const dropdown = document.createElement('div');
        dropdown.id = 'sf-shortcuts-dropdown';
        dropdown.className = 'sf-shortcuts-hidden';
        
        // Create menu items
        shortcuts.forEach(shortcut => {
            const menuItem = document.createElement('div');
            menuItem.className = 'sf-shortcuts-menu-item';
            menuItem.textContent = shortcut.name;
            
            // Add click event to navigate to shortcut
            menuItem.addEventListener('click', function(e) {
                e.stopPropagation();
                navigateToShortcut(shortcut.path);
            });
            
            dropdown.appendChild(menuItem);
        });
        
        return dropdown;
    }
    
    // Toggle dropdown visibility
    function toggleDropdown() {
        const dropdown = document.getElementById('sf-shortcuts-dropdown');
        if (dropdown.classList.contains('sf-shortcuts-hidden')) {
            dropdown.classList.remove('sf-shortcuts-hidden');
            dropdown.classList.add('sf-shortcuts-visible');
        } else {
            hideDropdown();
        }
    }
    
    // Hide dropdown menu
    function hideDropdown() {
        const dropdown = document.getElementById('sf-shortcuts-dropdown');
        dropdown.classList.remove('sf-shortcuts-visible');
        dropdown.classList.add('sf-shortcuts-hidden');
    }
    
    // Navigate to shortcut URL
    function navigateToShortcut(path) {
        const fullUrl = currentDomain + path;
        window.location.href = fullUrl;
    }
    
    // Handle clicks outside dropdown to auto-hide
    function handleOutsideClick(event) {
        const icon = document.getElementById('sf-shortcuts-icon');
        const dropdown = document.getElementById('sf-shortcuts-dropdown');
        
        if (!icon.contains(event.target) && !dropdown.contains(event.target)) {
            hideDropdown();
        }
    }
    
    // Initialize the extension
    function init() {
        // Check if elements already exist (prevent duplicate injection)
        if (document.getElementById('sf-shortcuts-icon')) {
            return;
        }
        
        // Create and inject floating icon
        const floatingIcon = createFloatingIcon();
        document.body.appendChild(floatingIcon);
        
        // Create and inject dropdown menu
        const dropdownMenu = createDropdownMenu();
        document.body.appendChild(dropdownMenu);
        
        // Add event listener for outside clicks
        document.addEventListener('click', handleOutsideClick);
        
        console.log('Salesforce Shortcuts extension loaded');
    }
    
    // Wait for DOM to be ready and initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
