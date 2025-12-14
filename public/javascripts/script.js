// Front end JavaScript code goes here
async function GetQuestions() {
    const response = await fetch('/api/questions'); // hit your API
    const questions = await response.json();
    console.log(questions);
}

GetQuestions();