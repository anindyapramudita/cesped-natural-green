## Description

Please provide a brief description of the changes made in this pull request

## Changes

Please list the changes made in this pull request in bullet points

- Change 1
- Change 2
- etc

## Screenshots (if applicable)

Please provide any relevant screenshots and video capture that showcase the changes in this pull request. For example:

- Screenshot of the UI
- Screenshot of the Postman request and response
- Screenshot of the result in the Terminal

## Checklist

Please ensure that you have completed the following checklist before submitting this pull request:

### General Checklist

- [ ] The code builds clean without any errors or warnings.
- [ ] The code follows the project's coding standards.
- [ ] Tests have been added or updated to reflect the changes.
- [ ] Documentation has been added or updated to reflect the changes.

### Technical Checklist (if applicable)

- [ ] The code has been properly formatted using Prettier.
- [ ] A function doesn't have more that 1,000 lines. Otherwise, it should be broken into multiple modules/functions.
- [ ] Any breaking changes should be separated from the original implementation, e.g. using versioning (api/v2) or feature flags.
- [ ] New environment variables have been documented in the JIRA Release page.
- [ ] Logging has been cleaned up to have only at most 1 (one) call for a single function.
- [ ] Use promises or async/await to handle asynchronous operations, instead of callbacks.
- [ ] Errors have been handled using a proper try/catch or error middleware.
