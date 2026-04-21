# Dentora Security Specification

## Data Invariants
1. A user can only read and write their own private information.
2. Orders must be linked to the authenticated user who created them.
3. Users cannot modify the `userId` or `createdAt` fields after creation.
4. Terminal state locking: Once an order is marked as `delivered`, no further changes are allowed (except by admins).
5. Reviews must be authored by the logged-in user.
6. Identity Integrity: `userId` in any document must match `request.auth.uid`.

## The Dirty Dozen Payloads (Target: Deny)
1. **P1 (Identity Spoofing)**: Create an order with `userId` of a different user.
2. **P2 (State Shortcut)**: Create an order with status `delivered` directly.
3. **P3 (PII Leak)**: Read `users/otherUser/private/info` as a different user.
4. **P4 (Update Gap)**: Update `total` in an existing order without `subtotal` recalibration (checking `affectedKeys`).
5. **P5 (Resource Poisoning)**: Document ID with 2KB junk string.
6. **P6 (Negative Price)**: Create order with `total: -500`.
7. **P7 (Timestamp Spoofing)**: Use client-side `createdAt` instead of `request.time`.
8. **P8 (Self-Elevated Role)**: Add `isAdmin: true` to user profile document.
9. **P9 (Review Hijacking)**: Delete a review authored by another user.
10. **P10 (PII Blanket Read)**: Query `users` collection for all emails.
11. **P11 (Orphaned Order)**: Create order for a non-existent `productId`.
12. **P12 (Terminal Lock Break)**: Change `items` in an order already marked as `delivered`.

## Test Runner (TDD)
(See firestore.rules.test.ts for full implementation)
