# PDF use cases — what we cover

A coverage map of the PDF work customers ask for, and where each item stands
for us. Kept so the marketing copy and the sales conversation stay honest and
in step with each other.

Two delivery routes:

- **PodPDF** — the self-serve REST API and web app at
  [podpdf.com](https://podpdf.com). $0.01 per PDF from credit packs.
- **Managed** — XAD Labs pipelines, built per customer, for runs of ten
  thousand to several million documents. This is what xadlabs.com sells.

Status values: **Covered** · **Not offered** · **To confirm**.

Last reviewed: 2026-09-20.

---

## Generation — making PDFs

| Use case | Route | Status |
| --- | --- | --- |
| HTML → PDF (raw HTML, uploaded file, full CSS, custom fonts) | PodPDF | Covered |
| Markdown → PDF (CommonMark + GFM: tables, task lists, code blocks) | PodPDF | Covered |
| Images → PDF (PNG/JPEG, one or many into a single file) | PodPDF | Covered |
| URL → PDF (public HTTPS page, hosted Markdown, hosted image) | PodPDF | Covered |
| JSON → PDF from a template (invoices, receipts, labels, certificates) | PodPDF | Covered |
| Visual template editor (blocks, item tables, totals, barcodes, signatures) | PodPDF | Covered |
| Tax, discount and currency totals calculated in the template | PodPDF | Covered |
| Page setup — A4, US Letter, 4×6 labels, 80 mm receipts, custom sizes | PodPDF | Covered |
| Headers, footers, page breaks, margins, page numbering | PodPDF | Covered |
| Bulk generation — ZIP in, ZIP out, with a manifest | PodPDF | Covered |
| Statements, letters and certificates rendered from customer records at run scale | Managed | Covered |

## Restructuring — changing the shape of documents

| Use case | Route | Status |
| --- | --- | --- |
| Merge several PDFs into one | Both | Covered |
| Split a PDF into parts | Both | Covered |
| Burst a large bundle into documents on barcodes, separator sheets or text markers | Managed | Covered |
| Burst on a fixed page-count rule | Managed | Covered |
| Assemble packets in a defined order, with covers, inserts and bookmarks | Managed | Covered |
| Rotate, reorder and remove pages | PodPDF | Covered |

## Reading — getting data out

| Use case | Route | Status |
| --- | --- | --- |
| Pull the same region of text from every page, as JSON or CSV | PodPDF | Covered |
| Field and table extraction across a whole corpus, as JSON or CSV | Managed | Covered |
| Extraction validated against a customer-approved schema | Managed | Covered |
| Classification by document type, with per-class routing | Managed | To confirm |
| OCR — making scans searchable, with per-page confidence scores | Managed | To confirm |

## Marking up — annotation and stamping

| Use case | Route | Status |
| --- | --- | --- |
| Fill form fields, then flatten so answers cannot be edited | PodPDF | Covered |
| Highlight text, add notes, place a signature (permanent or removable) | PodPDF | Covered |
| Watermarks across a whole corpus | Both | Covered |
| Bates numbering and bundle numbering | Both | Covered |
| Headers and footers applied consistently across a corpus | Managed | Covered |

## Operating a run — the managed-pipeline work

| Use case | Route | Status |
| --- | --- | --- |
| Corpus report — page counts, sizes, encrypted/corrupt files, text-layer presence, layout variants | Managed | Covered |
| Ingest from S3, SFTP, network share or a shipped drive | Managed | Covered |
| Inventory and hash every file; quarantine what will not open | Managed | Covered |
| Validation & QA — page counts, text-layer presence, schema conformance, sampled review | Managed | Covered |
| Delivery to customer storage or API, with a reconciling manifest | Managed | Covered |
| Per-document audit trail from ingest to delivery | Managed | Covered |
| Checkpointed, resumable runs | Managed | Covered |
| Isolated per-customer environment, credentials and retention window | Managed | Covered |
| Webhooks — `job.completed`, `job.failed`, bulk job events, with retries | PodPDF | Covered |
| Job history, API keys and usage dashboard | PodPDF | Covered |

## Not offered

Deliberately out of scope. Say so plainly rather than quoting for it.

| Use case | Note |
| --- | --- |
| Compression & file-size optimisation | Not offered. Removed from the site 2026-09-20. |
| Redaction — removing sensitive text and images | Not offered. |
| Sanitisation — stripping metadata, embedded scripts, attachments | Not offered. |
| Encryption, password protection, permissions, certificate signing | Not offered. |
| PDF/A conversion and archival-format normalisation | Not offered. |

Note that detecting encrypted or corrupt files **is** part of the corpus
report — that is a diagnostic, not a security service, and the distinction is
worth keeping clear in conversation.

---

## Open items

1. **podpdf.com contradicts this document in two places.** Its PDF-editor
   section advertises stripping metadata and JavaScript, and its
   managed-projects section lists compression among the things the team takes
   on. Both are marked Not offered above. Either the PodPDF copy needs
   updating or these belong back in scope — worth settling before a prospect
   finds the gap.
2. **OCR** is listed as a managed capability on xadlabs.com, and the corpus
   report promises to identify which files lack a text layer. Confirm the OCR
   engine and language coverage actually in place, or soften the claim to
   detection only.
3. **Classification & routing** is listed as a managed capability but has no
   equivalent in PodPDF. Confirm what has actually been built.

## Keeping this in step

The live capability list is the `capabilities` array at the top of
`src/pages/index.astro`. When an item moves between Covered and Not offered,
change it in both places.
