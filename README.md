Conversation and Computation
==============

**NYU ITP, Spring 2015**

* Lauren McCarthy [laurmccarthy@gmail.com](mailto:laurmccarthy@gmail.com)
* Wednesdays 3:20-6:15, Room 445
* [Office hours signup](http://bit.ly/1hECzFK), Room 455
* [Resident office hours signup](https://itp.nyu.edu/inwiki/)
* [Google group](https://groups.google.com/forum/#!forum/convo-comp)
* [Assignments page](https://github.com/lmccart/itp-convo-comp/wiki/Assignments)
* [Conversation tumblr log](http://convocomp.tumblr.com/)

![](http://payload.cargocollective.com/1/2/88505/1701748/talking_machine.jpg)

####_"And the question is when is the last time that you had a great conversation, a conversation which wasn’t just two intersecting monologues, which is what passes for conversation a lot in this culture. But when had you last a great conversation, in which you overheard yourself saying things that you never knew you knew. That you heard yourself receiving from somebody words that absolutely found places within you that you thought you had lost and a sense of an event of a conversation that brought the two of you on to a different plane. …a conversation that continued to sing in your mind for weeks afterwards?"_ - John O’Donohue

#Description

Technology is becoming a part of every conversation we have. What influence does it have, and how might it be further leveraged to create new possibilities? This class explores various ways conversation may be analyzed, generated, and affected by computation. Specifically, we will study methods of linguistic analysis (LIWC, LSM, sentiment analysis) and body language analysis (face tracking, expression detection, Kinect). We will experiment with conversation automation (markov chains, chatbots, email scripting, social media APIs), and building software apps (Google Hangout apps, browser extensions, Skype API, Twilio API, webRTC) and physical devices (Arduino, RPi) for augmenting and affecting conversation. Finally, we will look at more public interventions, involving performance and text displays. The class will be based around three month-long projects, complemented by readings and shorter research exercises. This will be further contextualized by conversation analysis ideas from sociology and psychology, performance studies, other artists working with these themes.

#Evaluation
Grades will be determined according to the following breakdown:
* Project 1 20%
* Project 2 20%
* Project 3 20%
* Conversation log 15%
* Participation and attendance 25%

Please see ITP's statement on [Pass/Fail](http://help.itp.nyu.edu/academic-policies/pass-fail) which states that a "Pass" is equivalent to an "A" or a "B" while anything less would be considered a "Fail".

###Projects
This class is divided into three "parts" or general areas of inquiry. We will have three 3-4 week projects over the course of the semester, one for each part. You are expected to push your abilities both technically and conceptually to make original, thoughtful work. 

For each project, you will need to check-in either with me in office hours or during class to briefly discuss your idea. The class check-in will happen the week before the project is due. If you haven't met with me in office hours by then, you will be expected to present your idea to the class for feedback.

###Conversation log
As this class is about conversation, we will regularly engage in and push ourselves in conversation. So we are not just working theoretically. Each person will keep a "conversation log". As a class, we will generate prompts for conversations. Each week, we will choose one prompt as a class and you will have a conversation that you reflect on and respond to in a post in the [conversation log](http://convocomp.tumblr.com/).

###Participation
Attendance is mandatory. Please inform me via email if you are going to miss a class. Habitually showing up late for class or an excessive number of absences will adversely affect your grade.

This class will be participatory, you are expected to participate in discussions and give feedback to other students both in class and participate with their projects. There will also be occasional assigned readings. This (along with attendance) is 40% of your grade.



#Syllabus

##Part 1: Language analysis and automation

###Week [1](https://www.youtube.com/watch?v=jB4xlYKAVCQ) (1/28): Introduction
* Intro and syllabus
* [Speaking Code](http://mitpress.mit.edu/books/speaking-code-0), Geoff Cox and Alex McLean
* __[Assignment 1](https://github.com/lmccart/itp-convo-comp/wiki/Assignments#assignment-1-due-24) (DUE 2/4)__
* __[Project 1](https://github.com/lmccart/itp-convo-comp/wiki/Assignments#project-1-due-218) (DUE 2/18)__


###Week 2 (2/4): Linguistic analysis

* Tools
  * [Local server tutorial](https://github.com/shiffman/The-Nature-of-Code-JTerm-2015/wiki/Local-Server-Tutorial)
  * [Language analysis code examples](https://github.com/lmccart/itp-convo-comp/tree/master/Language_Analysis) 
  * [Using APIs code examples](https://github.com/lmccart/itp-convo-comp/tree/master/Using_APIs)
  * [AlchemyAPI](http://www.alchemyapi.com/products/demo/alchemylanguage/) - [developer guide](http://www.alchemyapi.com/developers/getting-started-guide/)
  * [Text-Processing](http://text-processing.com/) - [API on Mashape](https://www.mashape.com/japerk/text-processing/Pricing)
  * [Mashape](https://www.mashape.com/explore?query=language&page=1) -  searchable database of APIs
  * [natural node module](https://github.com/NaturalNode/natural) includes tokenizing, stemming, classification, phonetics, tf-idf, WordNet, string similarity.
  * [RiTa](http://rednoise.org/rita/) - natural language and generative literature toolkit
  * [Chrome speech to text API](http://shapeshed.com/html5-speech-recognition-api/) - [demo](http://www.google.com/intl/en/chrome/demos/speech.html)  
  * [Everything-but-the-Chat](https://github.com/lmccart/everything-but-the-chat) combines LIWC + WebRTC + websockets + facetracking
* References
  * [JS Text Analysis tutorial](http://shiffman.net/teaching/a2z/analysis/), Dan Shiffman - text concordance, TF-IDF, Bayesian filtering
  * [Regex tutorial](http://shiffman.net/teaching/a2z/regex/), Dan Shiffman 
  * [The Secret Life of Pronouns](http://secretlifeofpronouns.com/) 
  * [Metaphors We Live By](http://www.amazon.com/Metaphors-We-Live-George-Lakoff/dp/0226468011), George Lakoff - [clip](https://www.youtube.com/watch?v=vm0R1du1GqA&list=PL7W7QjZ8OBa9Oa5nFHKiGUSJY52rdmoj3&index=2)
  * Noam Chomsky - [clip](https://www.youtube.com/watch?v=PBnahmmz1X4)
  * [Conversation analysis](http://en.wikipedia.org/wiki/Conversation_analysis), [tutorial](http://homepages.lboro.ac.uk/~ssca1/intro1.htm)
* Survey
  * [ReConstitution 2008](http://sosolimited.com/work/reconstitution-2008/), Sosolimited
  * [Prime Numerics](https://vimeo.com/11755205), Sosolimited 
  * [Moveable Type](http://o-c-r.org/portfolio/moveable-type/), The Office for Creative Research
  * [Shuffle](http://o-c-r.org/portfolio/shuffle/), The Office for Creative Research
  * [Shakespeare Machine](http://o-c-r.org/portfolio/shakespeare-machine/), The Office for Creative Research
  * [A More Perfect Union](http://music.columbia.edu/~luke/projects/index.shtml?id=perfect), R. Luke Dubois
  * [MIssed Connections](http://lukedubois.com/), R. Luke Dubois
  * [FB Demetricator ](http://bengrosser.com/projects/facebook-demetricator), Ben Grosser
  * [Samaritan's Radar](https://www.samaritansradar.org/)
  * [Feltron Annual Report](http://feltron.com/FAR13.html), Nicholas Felton - [NYTimes article](http://bits.blogs.nytimes.com/2014/08/19/a-life-in-data-nicholas-feltons-self-surveillance)
  * [Crying to Dragon](http://www.sophiabrueckner.com/dragon.html), Sophia Brueckner
  * [What a Hundred Million Calls to 311 Reveal About New York](http://www.wired.com/2010/11/ff_311_new_york/all/1), Pitch Interactive

###Week 3 (2/11): Scripting and automation
* [Speaking Machine](http://en.wikipedia.org/wiki/Wolfgang_von_Kempelen's_Speaking_Machine), Wolfgang von Kempelen 1769 - [illustration](http://www2.ling.su.se/staff/hartmut/bilder/kempln24.gif), [video](https://www.youtube.com/watch?v=zYRVqrfY3tQ), creator of [The Turk](http://en.wikipedia.org/wiki/The_Turk)
* [Speaking Machine recontruction](http://www2.ling.su.se/staff/hartmut/bilder/sfaber.gif), Sir Charles Wheatstone 1837
* [Voder](http://en.wikipedia.org/wiki/Voder), Homer Dudley 1939 - [video](https://www.youtube.com/watch?v=0rAyrmm7vv0)
* [Computing Machinery and Intelligence](http://www.loebner.net/Prizef/TuringArticle.html), A.M. Turing and [Chinese Room thought experiment](http://en.wikipedia.org/wiki/Chinese_room), John Searle
* [ELIZA](http://en.wikipedia.org/wiki/ELIZA) - [clip](https://www.youtube.com/watch?v=CJWOOTMt4ko) (1964)
* [Almost Human: The Surreal, Cyborg Future of Telemarketing](http://www.theatlantic.com/technology/archive/2013/12/almost-human-the-surreal-cyborg-future-of-telemarketing/282537/) - ["I am a real person!"](http://io9.com/freakishly-realistic-telemarketing-robots-are-denying-t-1481050295)
* Bots
  * [About a Bot: Hoax, Fake, Performance Art](http://journal.media-culture.org.au/index.php/mcjournal/article/viewArticle/814), Tania Bucher 
  * [Closed Bots and Green Bots: Two Archetypes of Computational Media](https://gist.github.com/tullyhansen/7621632), Mark Sample
  * [Taxonomy of Twitter Bots](https://gist.github.com/tullyhansen/7621632) and [Twitter Bot family tree](http://www.samplereality.com/wp-content/uploads/2014/06/hansen-bot-taxonomy.png), Tully Hansen 
  * [Bot Summit 2014](http://tinysubversions.com/botsummit/2014/)
  * [MegaHAL](http://megahal.alioth.debian.org/)
* Tools 
  * [IFTTT](https://ifttt.com/) 
  * [text message via email](http://20somethingfinance.com/how-to-send-text-messages-sms-via-email-for-free/)
  * [Postcard API](https://lob.com/blog/how-to-send-postcards-as-effortlessly-as-email)
  * [Yo](http://dev.justyo.co/)
  * Tinder
	* [Node API](https://www.npmjs.org/package/tinderbot)
	* [Python API](https://github.com/Coriou/py-tinder)
  * [Snapchat](http://gibsonsec.org/snapchat/fulldisclosure/)
    * [Unofficial Python API](https://github.com/niothiel/snapchat-python)
  * [Twilio](https://www.twilio.com/docs/api) lets you work with phones
  * [Gmail scripting](https://developers.google.com/apps-script/reference/gmail/)  
  * [Mechanical Turk](https://www.mturk.com/mturk/welcome)
    * [Kitchen Table Coders workshop resouces](http://kitchentablecoders.com/class/2013/08/10/mturk-workshop/)
    * https://github.com/jefftimesten/mturk - nodejs wrapper for MTurk
    * https://github.com/mdp/rturk - ruby wrapper for MTurk
    * https://github.com/twitter/clockworkraven - webapp for MTurk interface, created by Twitter
    * http://aws.amazon.com/code/Amazon-Mechanical-Turk
  * Markov Chains
  * Wordnik API
  * Twitter Bots
    * [node-twit](https://github.com/ttezel/twit) - Twitter module for nodejs
    * [node-twitterbot](https://www.npmjs.com/package/node-twitterbot) - Twitter bot module for nodejs (uses twit)
  * Chat Bots
    * [Hubot](https://hubot.github.com/) - a many featured, extensible command line bot
    * [A lot of bots](http://meta-guide.com/software-meta-guide/100-best-github-chatbot/)
    * [socket.io](http://socket.io/) - create your own chat application
* Survey
  * [MACH:My Automated Conversation coacH](http://web.media.mit.edu/~mehoque/MACH.htm), Eshan Hoque
  * Conversation prompting
    * [White Christmas](https://www.youtube.com/watch?v=0okH6MsG3eU) - Black Mirror Christmas Special
    * [Social Turkers](http://socialturkers.com)
    * [Auto-Theater](https://www.youtube.com/watch?v=TzKed84hFlM&feature=youtu.be), Daniel Spoerri - [Guggenheim clip](http://instagram.com/p/xc3P79TLjC/?modal=true)
    * [Conversacube](http://lauren-mccarthy.com/conversacube/)
    * [Devices for Mindless Communication](http://www.di10.rca.ac.uk/gerardrallo/), Gerard Rallo
  * Love automation
    * Christopher Strachey's [1952 love letter generator](http://www.alpha60.de/art/love_letters/), [more](http://www.gingerbeardman.com/loveletter/), and more in [Rhizome's Queer History of Computing](http://rhizome.org/editorial/2013/apr/9/queer-history-computing-part-three/))
    * [BreakupText](https://itunes.apple.com/us/app/breakuptext/id674333306?ls=1&mt=8)
    * [MakeupText](https://itunes.apple.com/us/app/makeuptext/id681601569?ls=1&mt=8)
    * [OkCupid auto-spammer](https://github.com/shawn-simon/okspam)
    * [BroApp](http://jezebel.com/i-tried-broapp-and-it-did-not-turn-me-into-an-awesome-b-1536966006)  
    * [Romantimatic](http://romantimatic.com/)
    * [tinderbox](https://github.com/crockpotveggies/tinderbox)
    * [Rejection Line](http://rejectionline.com/), Jonah and Chelsea Peretti
  * Bots
    * [Darius Kazemi](https://twitter.com/dariusbots)
    * [everyword](https://twitter.com/everyword)
    * [On Kawara tribute](https://twitter.com/On_Kawara)
    * [Horse_ebooks](http://www.newyorker.com/magazine/2014/02/10/man-and-machine-2)
    * [Pentametron](http://www.npr.org/2013/02/16/172031066/pentametron-reveals-unintended-poetry-of-twitter-users), Ranjit Bhatnagar
    * [Human Powered Chatbot](http://hadto.net/projects/human-powered-chatbot/), David Elliot
  * Instructions
    * [Fluxus workbook](http://www.deluxxe.com/beat/fluxusworkbook.pdf)
  * [Karaoke Answering Machine](http://archiv.videonale.org/en/video-library/uvw/welty/), Rachel Perry Welty
  * [Game of Phones](http://www.davidlubl.in/game-of-phones/), David Lublin
###Week 4 (2/18): Generation and bots
* **[Darius Kazemi](http://tinysubversions.com/) guest lecture**
* **John Rothenberg ([Sosolimited](http://sosolimited.com)) guest lecture**
* **Review Project 1**


##Part 2: Physical augmentation and alternatives


###Week 5 (2/25): Augmentation apps
* Google Hangout apps
* Browser extensions
* Skype, Twilio, webRTC
* Survey
  * [The Radio as an Apparatus of Communication](http://alltheartever.tumblr.com/post/108065923059/der-lindberghflug-the-lindbergh-flight-by), Bertolt Brecht 1929
  * [A Hole in Space](http://alltheartever.tumblr.com/post/103284895404/a-hole-in-space-kit-galloway-and-sherrie), Kit Galloway and Sherrie Rabinowitz 1980 - [more](http://www.medienkunstnetz.de/works/hole-in-space/)
  * [No Fun](http://0100101110101101.org/no-fun/), Eva and Franco Mattes
* __[Project 2](https://github.com/lmccart/itp-convo-comp/wiki/Assignments#project-2-due-325) (DUE 3/25)__

###Week 6 (3/4): Physical analysis
* Body language
* Face tracking
* Expression detection
* Survey
  * [Pay Per Laugh](https://www.youtube.com/watch?v=V0FowbxEe3w)
  * [Mark and Emily](http://keithlafuente.com/Mark-Emily), Keith LaFuente

###Week 7 (3/11): Physical augmentation 
* Devices / objects
* Physical feedback
* Physical correspondence, [mail art](http://en.wikipedia.org/wiki/Mail_art)
* [What My Hearing Aid Taught Me About the Future of Wearables](http://www.theatlantic.com/technology/archive/2015/02/what-my-hearing-aid-taught-me-about-the-future-of-wearables/385145/#disqus_thread)
* Survey
  * [Krzysztof Wodiczko](http://www.pbs.org/art21/artists/krzysztof-wodiczko/)
  * [I Got Up](http://moca.org/pc/images/artworks/800px/kawara.jpg), On Kawara

####Week 8 (3/25): Alternatives
* **Review Project 2**
* Sign language
* Braille 
* Emoji
* Survey
  * [Let's Chat!](http://fathom.info/latest/8400), Lee Cusack

##Part 3: Public and performance

###Week 9 (4/1): Performing conversation
* Erving Goffman, Harold Garfinkel
* Scripts, cues, prompts, improv
* Survey
  * [Somebody App](http://somebodyapp.com/), Miranda July
  * [Acting Stranger](http://www.actingstranger.com/), Andrew Schneider
  * [Rejection Line](http://rejectionline.com/), Jonah and Chelsea Peretti 2001
  * [Inbox Full](https://www.youtube.com/watch?v=XdfIXkwvU1Y), Molly Soda
* __[Project 3](https://github.com/lmccart/itp-convo-comp/wiki/Assignments#project-3-due-422) (DUE 4/22)__

###Week 10 (4/8): Public conversation
* Online social dynamics
  * [Online abuser dynamics](https://soundcloud.com/eyebeamnyc/new-topics-in-social-computing-online-abuser-dynamics) with Erin Kissane, Sydette Harry and Melissa Gira Grant, moderated by Joanne McNeil
  * [This American Life: If You Don't Have Anything Nice to Say, SAY IT IN ALL CAPS](http://www.thisamericanlife.org/radio-archives/episode/545/if-you-dont-have-anything-nice-to-say-say-it-in-all-caps) and [Feminist Frequency: One Week of Harassment on Twitter](http://femfreq.tumblr.com/post/109319269825/one-week-of-harassment-on-twitter)
  * [How Salon tamed the trolls and saved its online comments](http://digiday.com/publishers/salon-tamed-trolls-saved-online-comments/)
* Anonymity
* Public text displays
* Survey
  * [Graffiti Research Lab](http://www.graffitiresearchlab.com/blog/) 
  * [Vote Auction](http://www.vote-auction.net), Ubermorgen

###Week 11 (4/15): Protest
* Survey
  * [TXTmob](http://www.appliedautonomy.com/txtmob.html)
  * [FireChat](http://www.theverge.com/2014/10/16/6981127/firechat-messaging-app-accidental-protest-app-hong-kong) 
  * [Notes from OWS](https://nplusonemag.com/online-only/occupy/notes-from-an-occupation/)
  * [Occu-bot and Management-bot](http://taeyoonchoi.com/2011/12/occu-bot-and-financier-bot/), Taeyoon Choi

###Week 12 (4/22): Final project presentations
* **Review Project 3**
* Wrap-up
