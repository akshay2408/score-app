const mockData = {
  home_team: {
    name: "PERTH KNIGHTS",
    score: 55,
  },

  away_team: {
    name: "SYDNEY SHARKS",
    score: 59,
  },
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ scores: mockData });  
  }
  return res.status(500).json({ error: 'This route only support get request for now.'})
}
