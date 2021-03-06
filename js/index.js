

const howAndWhy = [
    {
        id: 01,
        heading: `Seeking Systems`,
        image: `img/novel.jpg`,
        description: `Humans want new and novel things all the time.`,
        alt:`image of woman using mobile phone`,
        url: `http://mybrainnotes.com/brain-ocd-dopamine.html`,
    }, {
        id: 02, 
        heading: `Intermittent Rewards:`,
        image: `img/skinner.jpeg`,
        description: `The most effective way to increase the rate of a behaviour is to provide rewards for that behaviour inconsistently and unpredictably. 
        `, 
        alt: `image of poker chips and dice`,
        url: `https://en.wikipedia.org/wiki/Reinforcement`,
    },{
        id: 03, 
        heading: `Social Affective Reinforcement`,
        image: `img/social.jpg`,
        description: `Behaviour is reinforced by the people in your environment. This is sharing, liking, commenting and other peer pressure.`, 
        alt: `Image of a group of friends `,
        url: `https://en.wikipedia.org/wiki/Peer_pressure`,
    },{
        id: 04, 
        heading: `Sunk Cost`,
        image: `img/sunk.jpg`,
        description: `People are more likely to continue a behaviour if they have already invested time, effort and resources.`,
        alt: `image of a hand holding cash`,
        url: `https://en.wikipedia.org/wiki/Sunk_cost`,
    },{
        id: 05, 
        heading: `Zeigarnik Effect`,
        image: `img/zeigarnik.jpg`,
        description: `Incomplete or interrupted tasks are better remembered than complete tasks. An obviously incomplete task creates a tension that can only be relieved by completing that specific task.`,
        alt: `image of a person running up stairs`,
        url: `https://en.wikipedia.org/wiki/Zeigarnik_effect`,
    },{
        id: 06, 
        heading: `Engagement Loops`,
        image: `img/loop.jpg`,
        description: `Pavlov and pavlovian. A cue triggers you to a certain behaviour in the promise of a reward. The cue itself enhances addictive behaviour; it is the anticipation of the reward that is important not the reward itself.`,
        alt: `image of spiral staircase looking down`,
        url: `https://medium.com/@alper/engagement-loops-are-the-best-way-to-motivate-people-using-game-mechanics-a0deeb9a2afc`,
    },{ 
        id: 07, 
        heading: `The ‘Yes’ Ladder`, 
        image: `img/yes.jpg`,
        description: `A persuasion technique which gets a person to say yes to small trivial things as each ‘yes’ increases the likelihood that they will say yes on the next bigger thing.`, 
        alt: `image of a neon yes`,
        url: `https://www.phoneburner.com/blog/how-to-prime-prospects-to-say-yes/`,
    },{
        id: 08, 
        heading: `Flow`, 
        image: `img/flow.jpg`,
        description: `A euphoric hyper focused mental state in which hours can pass in seemingly minutes.`, 
        alt: `image of a person working on the computer`,
        url: `https://en.wikipedia.org/wiki/Flow_(psychology)`,
    }
]

const tools = [
    {
        id: 01,
        heading:`Gamification`,
        description: `Making user experiences more like a game. That means creating and defining a goal, reward, and adding an element of completness like a <strong>percentage or task list</strong>.`,
        image: `img/game.jpg`,
        alt:`arcade`,
    }, {
        id: 02,
        heading:`Timelessness`,
        description:`User interface mechanics and elements that iterally taking notes from slot machines. This includes the variable ratio schedule and a sense of timelessness as instilled through <strong>auto-play and infinite scroll.</strong>`,
        image: `img/auto-play.png`,
        alt: `youtube autoplay`, 
    }, {
        id: 03, 
        heading: `Initiation`,
        description: `Strategic mechanics to encourage people to open and use the app. This is mostly done through <strong>push notifiactions</strong> which initiate interaction and start engagement loops.`,
        image: `img/notifications.jpg`,
        alt: `apps with lots of notifications`, 
    }, {
        id: 04, 
        heading: `Peer Pressure`,
        description: `Applications intentionally structure around <strong>community engagement</strong> so that users feel like they are missing out if they do not engage.`,
        image: `img/fomo.jpg`,
        alt: `person taking picture of their food`,
    }, {
        id: 05, 
        heading: `Roach Motel`,
        description: `Designing an interface to be easy to get into or subscribe in a service but intentionally difficult to exit and unsubscribe.`,
        image: `img/maze.png`, 
        alt:`maze`,
    }, {
        id: 06, 
        heading: `Confirm Shaming`,
        description: `When confirming an action that would be harmful to the business the confirmation is worded in a way to shame the user into compliance.`,
        image: `img/confirm-shaming.jpg`,
        alt: `confirm says count me in and the cancel option reads no! I love being poor!`, 
    }, {
        id: 07, 
        heading: `Default Settings`, 
        description: `Setting the default of the appication to what is optimal for the business even when it is in opposition to user wants and needs. For example: opting into subscription, auto selecting the most expensive option, opting in to the most revealing of personal information sharing and even defaulting to share their entire contact list.`,
        image: `img/default.jpg`,
        alt: `person on iphone`,
    }, {
        id: 08, 
        heading: `Leading Design`,
        description: `Strategic element design and placement that through sequence, herarchy and colour mislead users into clicking to buy products and advertising.`,
        image: `img/design.jpg`,
        alt: `one element is differentiated by colour`,
    },{
        id: 09,
        heading: `Personalization`,
        description: `Encouraging users to invest, even a little bit, so that to delete the application means losing some of their own effort. This is done mainly by encouraging <strong> personalization </strong>. This can be acheived as easily as adding a user profile for them to complete.`,
        image: `img/profile.jpg`,
        alt: `profile elements`,
    }
]

const changer = [
    `Addictive`,`Sticky`, `Habit Forming`,`Time Suck`,`Gamified`,`Retentive`, 
]

/************* render dynamic content *************/

function gethowAndWhyHtmlString(howAndWhy) {
    return `<section class="howAndWhy" data-howAndWhy="${howAndWhy.id}">
                <div class=box>
                    <h2>${howAndWhy.heading}</h2>
                    <p>${howAndWhy.description}</p>
                    <img src="${howAndWhy.image}" alt="${howAndWhy.alt}">
                    <div class="button">
                        <a href="${howAndWhy.url}" class="button-content">Read More</a>
                    </div>
                </div>
            </section>`;
}

function getToolsHtmlSting(tools) {
    return `<section class="tools" data-tools="${tools.id}">
                <div class=box>
                    <h2>${tools.heading}</h2>
                    <p>${tools.description}</p>
                    <img src="${tools.image}" alt="${tools.alt}">
                    <div class="button">
                        <a href="${tools.url}" class="button-content">Read More</a>
                    </div>
                </div>
            </section>`;
}

function renderhowAndWhy(howAndWhytoRender) {
    const arrOfHtml =  howAndWhytoRender.map(gethowAndWhyHtmlString);
    const strOfHtml = arrOfHtml.join('');
    document.getElementById('howAndWhy').innerHTML = strOfHtml;
}

renderhowAndWhy(howAndWhy);

function renderTools(toolsToRender) {
    const arrOfHtml =  toolsToRender.map(getToolsHtmlSting);
    const strOfHtml = arrOfHtml.join('');
    document.getElementById('tools').innerHTML = strOfHtml;
}

renderTools(tools);

/************** Slot Machine Progress Bar ******************/

function moveSlot(slotId, current, secTop, secBottom) {
    let iconsElement = document.getElementById(slotId);
    let percentDone = ((current-secTop)/(secBottom-secTop));
    while (percentDone < 0) {
        percentDone += 1;
    }
    if (percentDone >= 1) {
        percentDone = 0;
    }
    let iconsHeight = iconsElement.offsetHeight;
    let shift = Math.floor(-(((iconsHeight*7)/9)*percentDone));
    iconsElement.style.marginTop = `${shift}px`;
    // console.log([iconsElement,percentDone,iconsHeight,shift]);
}
window.addEventListener(`scroll`, (e) => {
    let navHeight = document.getElementById('nav').offsetHeight;
    let current = window.scrollY;
    let sec1Y = document.getElementById('intro').offsetTop - navHeight;
    let sec2Y = document.getElementById('psychology').offsetTop - navHeight;
    let sec3Y = document.getElementById('ui-tools').offsetTop - navHeight;
    let sec4Y = document.getElementById('care').offsetTop - navHeight;
    let sec5Y = document.getElementById('resources').offsetTop - navHeight;
    // let topOfFooter = document.getElementById('footer').offsetTop - navHeight;
    // let footerHeight = document.getElementById('footer').offsetHeight;
    // let bottomOfFooter = document.getElementById('footer').clientHeight;
    let contentHeight = document.getElementById('content').offsetHeight;
    let windowBottom = document.documentElement.clientHeight;
    let visibleContentHeight = windowBottom-navHeight;
    let end = contentHeight-visibleContentHeight;

    // console.log([current,sec1Y,sec2Y,sec3Y,sec4Y,sec5Y,contentHeight,windowBottom,visibleContentHeight,end]);
    moveSlot(`slot-1`, current, sec1Y, sec2Y);
    moveSlot(`slot-2`, current, sec2Y, sec3Y);
    moveSlot(`slot-3`, current, sec3Y, sec4Y);
    moveSlot(`slot-4`, current, sec4Y, sec5Y);
    moveSlot(`slot-5`, current, sec5Y, end);  
/**** infinity Scroll *******/
    if (current >= end) {
        window.scrollTo({left:0, top: navHeight, behavior:`smooth`});
    }
});



/***************** Don't let fixed element cover headings **************/
let links = document.getElementById(`tabs`).childNodes;
links.forEach(anchor => {
    anchor.addEventListener(`click`, event=> {
        event.preventDefault();
        let $sec = document.querySelector(anchor.getAttribute(`href`));
        let hFromTop = $sec.offsetTop;
        let navHeight = document.getElementById('nav').offsetHeight;
        let roomForBar = hFromTop - navHeight;
        window.scrollTo({left:0, top: roomForBar, behavior:`smooth`});
        //console.log([hFromTop,navHeight, roomForBar]);
    });
})

/*** Changing Title ***/
let titleWordIndex = 0;
setInterval(()=>{
    titleWordIndex += 1;
    if (titleWordIndex >= changer.length) {
        titleWordIndex = 0;
    }
    document.getElementById('changer').innerText = changer[titleWordIndex];
},2000);