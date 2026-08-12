# Design Pillars

## 1. Web First

The editor and runtime must work in the browser before any other target matters.

## 2. Template First

Templates define composition. Systems stay reusable. Game-specific behavior belongs in data.

## 3. Low-Poly by Default

The visual language should favor readability, limited geometry, and tight asset budgets.

## 4. AI Maintainable

The repo must be readable by a coding agent without requiring hidden knowledge.

## 5. Small, Testable Slices

Every feature should be buildable in a narrow vertical slice that can be verified on its own.

## 5.1 Black-Box Friendly

Every task should be understandable from a small set of docs, a small set of files, and a clear validation step.

## 6. Data Driven

Game content, rules, and tuning values should live in structured data instead of scattered logic.

## 7. Safe Change Surface

Architecture changes must be explicit and documented so the project does not drift over time.

## 8. Modular by Default

One module should own one job, expose one small contract, and avoid hidden dependencies on unrelated systems.
