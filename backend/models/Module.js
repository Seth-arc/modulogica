// backend/models/Module.js
const moduleSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    title: String,
    discipline: {
      type: String,
      enum: ['Arts', 'Commerce', 'Health', 'Law', 'STEM', 'Social Sciences', 'Environmental Studies', 'Humanities', 'Other']
    },
    academicLevel: {
      type: String,
      enum: ['First Year', 'Second Year', 'Third Year', 'Fourth Year', 'Postgraduate', 'Other']
    },
    learningObjectives: [{
      level: String,
      description: String
    }],
    challenges: [String],
    pedagogicGoals: [String]
  });