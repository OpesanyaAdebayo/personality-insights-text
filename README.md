# personality-insights-text
An app that returns personaliy results based on text input using IBM Watson Personality Insights API.


## Getting Started

1. You need to have Node.js installed. You can download and install Node.js [here](http://nodejs.org/)

2. You need to create a Personality Insights service instance on IBM Cloud to generate credentials to use the Watson Personality Insights API. There's a short tutorial [here](https://medium.com/ibm-watson-tutorials/getting-started-with-ibm-watson-95b10ca145f6)

3. Clone this repository.

4. Create a `.env` file in the root directory. The `.env` file will look something like the following:

  ```none
    PERSONALITY_INSIGHTS_USERNAME = <username from service credentials>
    PERSONALITY_INSIGHTS_PASSWORD = <password from service credentials>
    PERSONALITY_INSIGHTS_VERSION_DATE=<Check service API ocumentation for most recent date>
  ```

5. Install the dependencies your application needs:

  ```none
  npm install
  ```
6. Start the application locally:

  ```none
  node personalityInsights
  ```