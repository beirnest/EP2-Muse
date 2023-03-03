# Capstone 1 Project Proposal - Eclipse Phase Compendium App  #

----------

## Introduction ##

[Eclipse Phase](https://eclipsephase.com/) is a far-future tabletop roleplaying game that’s been released under a [Creative Commons Attribution-Noncommercial-Share Alike 4.0 License](https://creativecommons.org/licenses/by-nc-sa/4.0/), making game materials free to use for non-commercial purposes. Tabletop roleplaying games have a large set of rules that covers everything from character attributes to equipment stats, and it can be difficult for players to quickly look up information about the game in the rulebook. For this project, I want to create a compendium app that allows users to quickly look up information and use it to create character sheets.

## Objectives ##

- Create an easy-to-use app that allows users to quickly look up information about game rules or stats.
- Allow users to create character sheets based on the attribute, skills, and equipment data from the game.
- Character sheets will update automatically based on user input and can be saved so that the user can access them in the future.
- Allow users to create character sheets manually or automatically by randomly generating stats and equipment.

## Target Audience ##

- Eclipse Phase Gamemasters - People who create the storylines and enforce the rules of the game. They will need to use the app to look up information and quickly generate characters that their players will interact with.
- Eclipse Phase Players - Players of the game who will need to use the app to create and track changes in their character sheets. They may also need to look up game rule information

## Technology ##

The app will make use of CSS, HTML, JavaScript, Bootstrap, Python, Flask, Postgresql, BCrypt, and WTForms to create the front end and back end. The display will primarily be created using Bootstrap, while the stats, equipment, and character sheets will be saved in the database along with user information.

The app will use the JSON dataset created for Eclipse Phase rules that was created by Arokha and can be found on GitHub the [EP2-Data repository](https://github.com/Arokha/EP2-Data). The JSON files will be called using GitHub as the API.