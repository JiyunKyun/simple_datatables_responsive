# Simple DataTables Responsive Example

This repository demonstrates the integration of DataTables into a simple HTML page with Bootstrap styling. It includes custom pagination buttons, search functionality, and info display.

## Code Explanation

### HTML Structure

The HTML file is structured to include:
- A header with a title and a button.
- Custom divs (`custom-rows`, `search-custom`, `custom-info`, and `custom-pagination`) for placing DataTables elements such as pagination, search input, and info display.
- A responsive table to display data.

### Custom Elements

1. **Custom Pagination Buttons**:
   - Styled to match the Bootstrap theme.
   - Moved to a custom div (`custom-pagination`) for better control over layout.

2. **Custom Search Input**:
   - The search input is placed in a custom div (`search-custom`) and styled using Bootstrap.

3. **Custom Info Display**:
   - The info display, which shows the current page and total number of entries, is moved to a custom div (`custom-info`).

4. **Rows Per Page Selector**:
   - The length menu (rows per page selector) is moved to a custom div (`custom-rows`) for better placement control.

### JavaScript Initialization

- **DataTables Initialization**:
  - The table is initialized using the DataTables library.
  - Custom elements are moved to their respective divs after DataTables initialization is complete.
  - A custom search input is linked to the DataTables search functionality.

### Custom Styles

- The pagination buttons are styled using custom CSS to ensure they integrate seamlessly with the Bootstrap theme.

This example illustrates how to customize DataTables elements and integrate them into a Bootstrap-styled page for a more cohesive and responsive design.
