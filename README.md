# Food App Mockup

Standalone HTML / CSS / JS UI mockup of the Food App admin layout.

**Not connected** to the main Next.js app or any backend. Uses fake data only.

## Run

Open `index.html` in a browser, or serve the folder:

```bash
npx serve foodapp-mockup
```

## Customer Feedback

### Generate Questions (`#/feedback/questions`)
- Create custom **service categories**
- Add star-rating questions under each category
- Enable / disable questions (no delete — kept for past feedback history)

### Collected Feedback (`#/feedback/collected`)
- List of submitted responses with view-details modal
- Shows services used, star answers by service, and remarks

### Feedback Form (`#/feedback/form`)
- Standalone page (no admin sidebar), similar to mileage-signup
- Customer enters name, email, phone
- Multi-select services → loads enabled questions for those services
- Remarks / comments as a separate field (not a question)
