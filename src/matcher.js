function calcScore(origin, similar) {
  if (similar.isHidden) {
    return 0;
  }

  let score = 0;
  if (similar.className === origin.className) {
    score++;
  }

  if (similar.text === origin.text) {
    score++;
  }

  if (similar.title === origin.title) {
    score++;
  }

  if (similar.href === origin.href) {
    score++;
  }

  return score;
}

function match(origin, candidates) {
  let score = 0;
  let matched = null;

  for (const candidate of candidates) {
    let newScore = calcScore(origin, candidate);
    if (score < newScore) {
      score = newScore;
      matched = candidate;
    }
  }

  return {
    score,
    matched,
  };
}

module.exports = {
  match,
};
