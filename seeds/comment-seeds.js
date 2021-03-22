const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Is anyone surprised China is trying to cover this all up.!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "I am disgusted by these stupid people that blame Asians. Shame on this.!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "I'm a white male. I have always admired and respected Asians. I love you guys man! You guys rock!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "WHO being tied to China is like the sky being blue!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "I asked a doctor when they think this virus will end. He said how should I know, I'm a doctor not a politician.!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Stop racism’s against other minorities in China also!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "The pandemic could have been avoided if world leaders had acted sooner. WHO is also responsible.!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "If, like most ppl, you already have a coton tote bag at home, use that!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;