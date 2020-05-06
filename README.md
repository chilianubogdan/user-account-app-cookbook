# Graphiti User Accounts Cookbook

This is a sample Rails application designed to be used as an example
for how to implement account creation, sign in, and authentication
using the Graphiti API framework. The backend includes a full user
creation and authentication workflow, including thorough unit testing.
The frontend is written in VueJS and uses the Graphiti's Spraypaint
javascript client for communication to the backend.

This project contains examples of a number of common but non-obvious
scenarios that you may need to implement in the course of building a
Rails/Graphiti project:

- Resources that don't map directly to a single ActiveRecord model
  or database table
- Sending transactional emails after certain steps are completed
- Authentication without a framework like devise or warden
- Mixing authenticated and unauthenticated endpoints in an API
- Overriding standard resource scoping for a specific endpoint

### Dev setup

1. `git clone {repo_url}`
2. `bundle install`
3. `yarn install`
4. `rails s -b 0.0.0.0` start server (`-b` opption for lan access)

### Running specs

- BE: `rspec`
- FE:
  1. start BE server `rails s -e test -p 5017`
  2. start cypress `yarn run cypress open --project ./spec/`
  3. Run all specs

## Goal: Full stack cookbook

### Architecture

- BE: Ruby + Rails + Graphiti
  - REST Graph QPL {"json": "API"}
- FE: TS + Vue
  - great UX

### CI

- BE: Rspec
- FE: Cypress
- Code Quality: + lint + SOLID (OOP)

### CD: automated release

### Documentation

- Public API Documentation: ()
- BE: Library documentation (code genearted Yard Like)
- FE: UX Guide (use of cypress feature success_tag scenario videos)
