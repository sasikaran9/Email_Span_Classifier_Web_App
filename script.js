function classifyEmail() {
  const text = document.getElementById("emailText").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  // List of common spam keywords (for demonstration)
  const spamKeywords = [
    "win", "free", "prize", "winner", "buy now", "click here",
    "urgent", "lottery", "money", "cash", "offer", "limited time",
    "unsubscribe", "act now", "guaranteed", "credit card"
  ];

  let spamScore = 0;

  spamKeywords.forEach(keyword => {
    if (text.includes(keyword)) {
      spamScore++;
    }
  });

  // Basic scoring
  if (spamScore > 3) {
    resultDiv.innerHTML = `<span style="color: red;">⚠️ This email is likely <strong>SPAM</strong>.</span>`;
  } else {
    resultDiv.innerHTML = `<span style="color: green;">✅ This email is likely <strong>NOT Spam</strong>.</span>`;
  }
}
