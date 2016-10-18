# TinFoil
A light weight password generator that you can run via the command line.

## Usage
- Clone the repo and run `npm i`
- Generate passwords with `npm run password`
- You can pass in Node env vars to change the length or require special characters. E.g. `PASSWORD_LENGTH=16 PASSWORD_SPECIAL=false npm run password`

## Notes
These passwords are not stored anywhere and are only output to the console.  I also wrote this code as an example of how to create
lightweight node applications using TDD, linters, and scanning for security vulnerabilities from the start.  There will be an accompanying
blog post and possible screencast shortly.