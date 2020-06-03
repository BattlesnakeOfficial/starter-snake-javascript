# A simple [Battlesnake](http://play.battlesnake.com) written in JavaScript for Node.js.

This is a basic implementation of the [Battlesnake API](https://docs.battlesnake.com/references/api). It's a great starting point for anyone wanting to program their first Battlesnake using JavaScript. It comes ready to deploy to [Heroku](https://heroku.com), although you can use other cloud providers if you'd like.

### Technologies

This Battlesnake uses [JavaScript](https://www.javascript.com/), [Node.js](https://nodejs.dev/), [Express](https://expressjs.com/), and [Heroku](https://heroku.com).

### Prerequisites

* [GitHub Account](https://github.com/) and [Git Command Line](https://www.atlassian.com/git/tutorials/install-git)
* [Heroku Account](https://signup.heroku.com/) and [Heroku Command Line](https://devcenter.heroku.com/categories/command-line)
* [Battlesnake Account](https://play.battlesnake.com)



## Deploying Your First Battlesnake

1. [Fork this repo](https://github.com/BattlesnakeOfficial/starter-snake-node/fork) into your GitHub Account.

2. [Clone your forked repo](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) into your local environment.
    ```shell
    git clone git@github.com:[YOUR-GITHUB-USERNAME]/starter-snake-node.git
    ```

3. [Create a new Heroku app](https://devcenter.heroku.com/articles/creating-apps) to run your Battlesnake.
    ```shell
    heroku create [YOUR-APP-NAME]
    ```

4. [Deploy your Battlesnake code to Heroku](https://devcenter.heroku.com/articles/git#deploying-code).
    ```shell
    git push heroku master
    ```

5. Open your new Heroku app in your browser.
    ```shell
    heroku open
    ```
    If everything was successful, you should see the following text:
    ```
    {"apiversion": "1", "author": "", "color": "#888888", "head": "default", "tail": "default"}
    ```

6. Optionally, you can view your server logs using the [Heroku logs command](https://devcenter.heroku.com/articles/logging#log-retrieval) `heroku logs --tail`. The `--tail` option will show a live feed of your logs in real-time.

**At this point your Battlesnake is live and ready to enter games!**


## Registering Your Battlesnake and Creating Your First Game

1. Log in to [play.battlesnake.com](https://play.battlesnake.com/login/).

2. [Create a new Battlesnake](https://play.battlesnake.com/account/snakes/create/). Give it a name and complete the form using the URL for your Heroku app.

3. Once your Battlesnake has been saved you can [create a new game](https://play.battlesnake.com/account/games/create/) and add your Battlesnake to it. Type your Battlesnake's name into the search field and click "Add" to add it to the game. Then click "Create Game" to start the game.

4. You should see a brand new Battlesnake game with your Battlesnake in it! Yay! Press "Play" to start the game and watch how your Battlesnake behaves. By default your Battlesnake should move randomly around the board.

5. Optionally, open your [Heroku logs](https://devcenter.heroku.com/articles/logging#log-retrieval) while the game is running to see your Battlesnake receiving API calls and responding with its moves.

Repeat steps 3 and 4 every time you want to see how your Battlesnake behaves. It's common for Battlesnake developers to repeat these steps often as they make their Battlesnake smarter.

**At this point you should have a registered Battlesnake and be able to create games!**



## Customizing Your Battlesnake

Now you're ready to start customizing your Battlesnake and improving its algorithm.

### Changing Appearance

Locate the `handleIndex` function inside [index.js](index.js#L17). You should see a line that looks like this:
```javascript
var battlesnakeInfo = {
  apiversion: '1',
  author: '',
  color: '#888888',
  head: 'default',
  tail: 'default'
}
```

This function is called by the game engine to make sure your Battlesnake is healthy and responding correctly. Your response determines what your Battlesnake will look like in that game. See [Battlesnake Personalization](https://docs.battlesnake.com/references/personalization) for how to customize your Battlesnake's appearance using these values.

### Changing Behavior

On every turn of each game your Battlesnake receives information about the game board and must decide its next move.

Locate the `handleMove` function inside [index.js](index.js#L35). Possible moves are "up", "down", "left", or "right". To start your Battlesnake will choose a move randomly. Your goal as a developer is to read information sent to you about the board (available in the `gameData` variable) and make an intelligent decision about where your Battlesnake should move next.

See the [Battlesnake Game Rules](https://docs.battlesnake.com/references/rules) for more information on playing the game, moving around the board, and improving your algorithm.

### Updating Your Battlesnake

After making changes, commit them using git and deploy your changes to Heroku.
```shell
git add .
git commit -m "update my battlesnake's appearance"
git push heroku master
```

Once Heroku has updated you can [create a new game](https://play.battlesnake.com/account/games/create/) with your Battlesnake to view your latest changes in action.

**At this point you should feel comfortable making changes to your code and deploying those changes to Heroku!**



## Developing Your Battlesnake Further

Now you have everything you need to start making your Battlesnake super smart! Here are a few more helpful tips:

* Keeping your logs open in a second window (using `heroku logs --tail`) is helpful for watching server activity and debugging any problems with your Battlesnake.

* You can use the JavaScript [console.log](https://nodejs.org/api/console.html) to output information to your server logs. This is very useful for debugging logic in your code during Battlesnake games.

* Review the [Battlesnake API Docs](https://docs.battlesnake.com/references/api) to learn what information is provided with each command.

* When viewing a Battlesnake game you can pause playback and step forward/backward one frame at a time. If you review your logs at the same time, you can see what decision your Battlesnake made on each turn.



## Joining a Battlesnake Arena

Once you've made your Battlesnake behave and survive on its own, you can enter it into the [Global Battlesnake Arena](https://play.battlesnake.com/arena/global) to see how it performs against other Battlesnakes worldwide.

Arenas will regularly create new games and rank Battlesnakes based on their results. They're a good way to get regular feedback on how well your Battlesnake is performing, and a fun way to track your progress as you develop your algorithm.



## (Optional) Running Your Battlesnake Locally

Eventually you might want to run your Battlesnake server locally for faster testing and debugging. You can do this by installing [Node.js](https://nodejs.dev/) and [npm](https://docs.npmjs.com/getting-started/).

Once installed, run this to install all of the client dependencies.

```shell
npm install
```

Than run the server:

```shell
npm start
```

**Note:** You cannot create games on [play.battlesnake.com](https://play.battlesnake.com) using a locally running Battlesnake unless you install and use a port forwarding tool like [ngrok](https://ngrok.com/).


---


### Questions?

All documentation is available at [docs.battlesnake.com](https://docs.battlesnake.com), including detailed Guides, API References, and Tips.

You can also join the [Battlesnake Developer Community on Slack](https://play.battlesnake.com/slack). We have a growing community of Battlesnake developers of all skill levels wanting to help everyone succeed and have fun with Battlesnake :)
