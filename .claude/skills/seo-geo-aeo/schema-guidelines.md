# Schema Guidelines

Schema should support visible content, not replace it.

## Common Schema Types

### Organization

Use when:

- the site represents a business or brand
- identity details are clear on the site

Useful for:

- homepage
- about page
- global business entity clarity

### LocalBusiness

Use when:

- the business serves a defined geographic area
- address, service area, or local business details are relevant

Useful for:

- local service businesses
- location aware business pages

### Service

Use when:

- a page clearly describes a service offering
- the service is visible and well explained on the page

Useful for:

- service pages
- offer pages

### FAQPage

Use when:

- the page contains real question and answer pairs
- answers are visible on page
- questions support user understanding

Do not use when:

- FAQ is thin
- questions are fake
- content is duplicated or low value

### Article

Use when:

- the page is a real article or blog post
- headline, body, and publishing context are clear

Useful for:

- blog posts
- article pages
- educational content

### BreadcrumbList

Use when:

- the page has a logical breadcrumb structure
- site hierarchy is visible and useful

Useful for:

- nested site structures
- blogs
- service category hierarchies

---

## Schema Rules

Claude must:

- recommend schema only when content supports it
- keep schema aligned with page intent
- ensure structured data reflects what users can actually see

Claude must NOT:

- recommend every schema type on every page
- use structured data to compensate for poor content
- generate misleading markup

---

## Practical Mapping

### Homepage

Possible schema:

- Organization
- LocalBusiness, if truly relevant

### Service page

Possible schema:

- Service
- FAQPage, if there is a real FAQ
- BreadcrumbList, if applicable

### Blog article

Possible schema:

- Article
- FAQPage, only if justified
- BreadcrumbList, if applicable

### About page

Possible schema:

- Organization

### Contact page

Possible schema:

- Organization or LocalBusiness, depending on business context

Schema should remain precise and minimal, not bloated.
