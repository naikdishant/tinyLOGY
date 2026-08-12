# ADR-001: Web-Based Editor

## Status

Accepted

## Context

The product is intended to be accessible in the browser with fast iteration and easy sharing.

## Decision

The editor will be built as a web-first product.

## Alternatives Considered

- Native desktop editor
- Hybrid desktop-plus-web editor
- Code-only workflow

## Consequences

- Easier sharing and onboarding
- Stronger dependency on browser capabilities
- More pressure on performance and asset discipline

## Rules

1. Browser support is the default target.
2. Native exports may exist later, but they do not replace the web editor.
3. New features should preserve the browser-first workflow.
