require('dotenv').config();
const readline = require('readline');
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const personality_insights = new PersonalityInsightsV3({
  username: process.env.PERSONALITY_INSIGHTS_USERNAME,
  password: process.env.PERSONALITY_INSIGHTS_PASSWORD,
  version_date: process.env.PERSONALITY_INSIGHTS_VERSION_DATE
});
const PersonalityTextSummaries = require('personality-text-summary');
const v3EnglishTextSummaries = new PersonalityTextSummaries({
  locale: 'en',
  version: 'v3'
});


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a short paragraph for Watson to analyze...', (text) => {

  let params = {
    content: text,
    content_type: 'text/plain',
    raw_scores: true,
    consumption_preferences: true
  };

  personality_insights.profile(params, function (error, response) {
    if (error)
      console.log('Error:', error);
    else
      console.log(getTextSummary(response));
    //console.log(JSON.stringify(response, null, 2));
  });

  rl.close();
});

const getTextSummary = personalityProfile => {
  let textSummary = v3EnglishTextSummaries.getSummary(personalityProfile);
  if (typeof (textSummary) !== 'string') {
    console.log("Could not get summary.");
  } else {
    return textSummary;
  }
};