//Modifies the bot's game

module.exports = function(bot,game) {
    if (typeof game === "string") {
        bot.user.setGame(game)
            .then(() => console.log("success!"))
            .catch(console.error);
        console.log("Attempting to change game presence to " + game);
    }
};