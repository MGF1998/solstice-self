# Solstice-Self
## The shitty sibling of Solstice, being all selfish.

**I am not responsible for you getting banned by using this bot. It's all your fault if you do.**

penis penis penis penis penis penis penis penis penis penis penis 


This is the selfbot, loosely based on [Solstice](https://github.com/MGF1998/SolsticeBot). Mainly because I didn't want to rewrite the entire framework that we established.

A huge thanks to [Discord.js](https://discord.js.org/#/) for making all of this possible.

## Important!
To have this bot work properly, you need to use your User token. This bot ONLY listens to itself - just like every selfbot should.

So, you need to get your user token.
**Be very careful with your user token. Never. Ever. Distribute the usertoken to someone else. If someone else gets hold of it, they can impersonate you. Not just that, if you administrate servers, they have the same access rights as you.**

[Follow this link](https://eslachance.gitbooks.io/discord-js-bot-guide/content/samples/selfbots_are_awesome.html#the-token) to learn how to get your user token.

## Required Setup
Sometimes, npm is not happy with installing all necessary packages.
Currently, we only use the Discord.js npm package, with Opusscript. No, this bot doesn't have voice functionality (yet).

In case your bot instance crashes on startup saying things like Discord is undefined or not available or something, use `npm install -s discord.js opusscript` in the discord bot folder to install the npm dependencies.

Rename example.settings.js  to settings.js and enter all the stuff. If you want to fork this repo, **make sure this file is gitignored. It will contain your user token. And that's bad, as we already established.**

If you want to use the avatar change function, take a look at `data/avys`. This folder should contain an example.avylist.js.

Rename this file to avylist.js and fill out all the necessary data. It should be pretty straightforward.
