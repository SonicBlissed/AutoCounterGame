# Auto Counter Game
### Hi there, I'm Dustin a.k.a. SonicBliss!
### Thank you for taking the time to look over my Auto Counter Game!
[![Link](https://img.shields.io/badge/-Live%20Version-red)](https://counterthatkeepsoncounting.netlify.app/)

## Overview
The Auto Counter Game is a game I've made for me, and by me. The thing I'm most proud of is that this game runs almost entirely with React useState. I made this project with the intention to iron out my skills and trial and error different methods. You'll see a wide array of techniques in the code. 

## How To Play
- It's simple! Start out by clicking the big red button a few times!
- You'll notice your points increasing, now you can use them to buy workers that will gather points for you every second! The amount they gather for you per second is right underneath your points and is labeled CPS
- Expand and grow your points, increasing your CPS exponentially overtime as you buy more and more expensive workers

## Dependancies
- Lockr - This was installed with `npm i Lockr` and it makes it easier for me to set data to local storage, as well as retrieve it.
- commaNumber - This was installed with `npm i commaNumber` and offers me a sweet function to automatically input commas to any number I give it. For example if I do commaNumber(7465) it will return 7,465
- React - This was already in my app because I started this project with `npx create-react-app project-name` and it's my framework of choice so that I have access to React Hooks and components
- Axios - This is what I use to make AJAX requests and was installed with `npm i axios`

## Goals Reached
- One useState handles all the state
- useEffect timestamps and saves progress every second
- It counts while you're offline!
- Integrated MaterialUI to make it look better
- Refactored the code drastically to make a smaller, cleaner app
- Added Lockr to securely store and access information with local storage so your progress saves!
- Added anti cheat solutions (beware they punish you forever mwhuahahaha)

## Current Goals
- Convert existing CSS to re-usable styled components
- After converting to re-usable style components, add more CSS to make the app much more appealing to the eyes
- Make my own API to keep track of time instead of worldtimeapi.org
- Add comments to better illustrate how the code flows to others
- Add bosses to slay that consume a random amount of workers in exchange for multipliers!

## FAQ
>Why is there such a lack of comments?

This project's main focus when I started it was to learn more about React and become better with React when it's used in an unconventional way. By not having comments I'm forcing my brain to remember all the steps I had taken to get my code where it is and thus familiarizing with it on a deeper level each time I go back and look. This was not made with the intention to show others. I will be adding comments based on questions I get in the future on my code going forward 
>Is mobile support coming?

Yes! I actually have a previous commit I've made to this project to make it fully functional on any device(See April 3rd). I overwrote it on accident at some point and will re instate mobile support after I finish adding a few more features.
>Why is it so...red?

I'm not the greatest when it comes to art in general. Here's a good analogy: I'm not good at drawing but boy am I good at tracing. That's not to say I'm not striving to get better. One way I've been trying to improve my "art senses" is by learning Photoshop. Here's an example of my work if you're interested: https://i.ibb.co/5r1bpcW/Ekko-Sig-EDITTED.png
>I'm getting an error in the console because the API isn't working

This is an issue I'm working on. If you copy this code to run on your local machine then you wont run into problems with the api. It's caused by the fact that the live website is https but the api is http. I've managed to get it working in the past with a quick work around but I'm currently looking for a more permanent solution.
>I have some feedback/questions about this app, where do I send it?

Forward it to this email: mimirs.spring@gmail.com
I'm also very open to code walkthroughs to explain every nook and cranny of the app if you're a potential employer.