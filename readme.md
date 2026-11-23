# Reflection answers
**How did push() and filter() help?**
`push()` added items to the end of the array in one line, and `pop()` took them back off just as easily. `filter()` made search simple because it returns a brand new array of only the matches without touching the original list, so the full list is never lost while searching.

**What challenges came up with filtering and searching?**
Case was the main one. "milk" didn't match "Milk" until both sides were converted with `toLowerCase()`. The duplicate check had the same problem, so I switched from `includes()` to `some()` with a lowercase comparison. Empty input and extra spaces also caused junk entries until I added `trim()`.

**How would you make it more efficient or user friendly?**
I'd save the list in `localStorage` so it survives a page refresh, add a delete button on each item so you can remove more than just the last one, and store items in a `Set` for faster duplicate checks on very large lists.