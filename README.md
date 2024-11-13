# AutomationAssessment
QE Automation Assessment

Example project that uses Playwright and Typescript.

## How to Setup

1. Clone project in your local machine

2. Change directory to root directory

3. Install dependencies : npm install

4. Install browsers: npx playwright install

## How to Execute

Execute all test inside Tests folder at the same time in all available browsers
npx playwright test 

Execute specific test and target browser
npx playwright userStory1.spec.ts --project=chromium

