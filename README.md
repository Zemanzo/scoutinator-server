# Scoutinator

This project is built in combination with [scoutinator](https://github.com/Zemanzo/scoutinator) which is the frontend that uses this backend.

## Goals

I wanted a simple file browser & image viewer that I could easily deploy on my personal cloud server, with the following requirements:

- Minimalist interface, that can be hidden.
- Good performance, specifically when browsing a folder of images one by one.
- Responsive & mobile support.
- Decent security.
- Ability to share specific folders / files.
  - Optional password protection.
- Generate compressed archive from a folder which can also be shared.
  - Potentially with self-destruct after a set amount of time.

## Setup

- `yarn install`
- Create a `config.json` based on the example json that is in the root of this repository (should be self-explanatory).
- `yarn start`
- Run in in combination with the [frontend](https://github.com/Zemanzo/scoutinator)!
