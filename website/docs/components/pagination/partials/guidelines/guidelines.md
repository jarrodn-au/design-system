## Usage

### When to use

- To break down large content into pages; usually paired with tables.

### When not to use

- As a navigation control for a flow or to pair with a stepper, e.g., for a guide, tutorial, or setup flow.
- As a controller, to switch between multiple views, consider using [Tabs](/components/tabs/).

## Types of pagination

!!! Warning 

We strongly suggest you talk with your team to determine which pagination type is right for your project.
!!!

We offer two types of pagination: **cursor** and **offset** pagination.

### Cursor pagination

Cursor pagination allows users to navigate to the next or previous set of records no matter where the user is located within the dataset (record 1 or 300). With this type of pagination, the system doesn’t know which page the current page is and, thus, can’t show page numbers (1, 2, 3, etc.).

#### Compact variant

Cursor pagination supports the **Compact** variant only.

![Compact pagination example](/assets/components/pagination/pagination-cursor-example.png =177x*)

### Offset pagination

Offset or page-based pagination allows you to divide datasets into pages, letting users navigate to any particular page. 

Offset pagination supports both the **Numbered** and **Compact** variants.

#### Numbered variant

In most cases, the numbered pagination provides a better user experience. It allows users to jump between pages and always return to the first page or go to the last page without manually navigating the pages.

![Numbered pagination example](/assets/components/pagination/pagination-offset-example.png =311x*)

#### Compact variant

![Compact pagination example](/assets/components/pagination/pagination-cursor-example.png =177x*)

## Spacing

Whether pairing pagination with tables or content which is not contained (e.g., cards, lists), we recommend 16px of space between the pagination and the content it relates to. 

Ensure there’s enough distance between the pagination and unrelated content (e.g., another section) so it’s obvious what content the pagination is paired with.

![Spacing for pagination paired with tables](/assets/components/pagination/pagination-spacing-tables.png =1244x*)

![Spacing for pagination paired with not contained content](/assets/components/pagination/pagination-spacing-not-contained.png =1244x*)

## Alignment

When using Pagination Nav, center-align the component with the content it relates to.

!!! Do

![Proper alignment of pagination nav](/assets/components/pagination/pagination-nav-alignment-do.png =990x*)
!!!

!!! Dont

![Incorrect alignment of pagination nav](/assets/components/pagination/pagination-nav-alignment-dont.png =990x*)
!!!

When using Pagination, the component should fill the same space as the related content.

!!! Do

![Proper alignment of pagination](/assets/components/pagination/pagination-alignment-do.png =924x*)
!!!

!!! Dont

![Incorrect alignment of pagination](/assets/components/pagination/pagination-alignment-dont.png =924x*)
!!!