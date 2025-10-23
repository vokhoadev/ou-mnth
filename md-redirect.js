// Redirect .md files to Markdown Viewer
(function() {
    // Check if current page is a .md file
    if (window.location.pathname.endsWith('.md')) {
        // Extract the file path
        const filePath = window.location.pathname.substring(1); // Remove leading slash
        
        // Redirect to Markdown Viewer with file parameter
        const newUrl = new URL('/index.html', window.location.origin);
        newUrl.searchParams.set('file', filePath);
        
        // Redirect
        window.location.replace(newUrl.toString());
    }
})();
