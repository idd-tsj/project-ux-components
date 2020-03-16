

const howAndWhy = [
    {
        id: 01,
        heading: `Seeking Systems`,
        image: `img/#`,
        description: `Humans want new and novel things all the time.`,
        alt:`description of the image`,
    }, {
        id: 02, 
        heading: `Intermittent Rewards:`,
        image: `img/#`,
        description: `The most effective way to increase the rate of a behaviour is to provide rewards for that behaviour inconsistently and unpredictably. 
        `, 
        alt: `description of the image`,
    },{
        id: 03, 
        heading: `Social Affective Reinforcement`,
        image: `img/#`,
        description: `Behaviour is reinforced by the people in your environment. This is sharing, liking, commenting and other peer pressure.`, 
        alt: `description of the image`,
    },{
        id: 04, 
        heading: `Sunk Cost`,
        image: `img/#`,
        description: `People are more likely to continue a behaviour if they have already invested time, effort and resources.`,
        alt: `description of the image`,
    },{
        id: 05, 
        heading: `Zeigarnik Effect`,
        image: `img/#`,
        description: `Incomplete or interrupted tasks are better remembered than complete tasks. An obviously incomplete task creates a tension that can only be relieved by completing that specific task.`,
        alt: `description of the image`,
    },{
        id: 06, 
        heading: `Engagement Loops`,
        image: `img/#`,
        description: `Pavlov and pavlovian. A cue triggers you to a certain behaviour in the promise of a reward. The cue itself enhances addictive behaviour; it is the anticipation of the reward that is important not the reward itself.`,
        alt: `description of the image`,
    },{ 
        id: 07, 
        heading: `The ‘Yes’ Ladder`, 
        image: `img/#`,
        description: `A persuasion technique which gets a person to say yes to small trivial things as each ‘yes’ increases the likelihood that they will say yes on the next bigger thing.`, 
        alt: `description of the image`,
    },{
        id: 08, 
        heading: `Flow`, 
        image: `img/#`,
        description: `A euphoric hyper focused mental state in which hours can pass in seemingly minutes.`, 
        alt: `description of the image`,
    }
]

const tools = [
    {
        id: 01,
        
    }
]



/************* FUNCTIONS *************/

function gethowAndWhyHtmlString(howAndWhy) {
    return `<section class="howAndWhy" data-howAndWhy="${howAndWhy.id}">
                <h3 class="howAndWhy-heading">${howAndWhy.heading}</h3>
                <p>${howAndWhy.description}</p>
                <img src="${howAndWhy.image}" alt="${howAndWhy.img-alt}" class="howAndWhy-img">
            </section>`;
    }