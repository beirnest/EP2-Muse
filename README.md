# Eclipse Phase 2 Muse (EP2-Muse) #

----------
# Description #

**Live:** [https://ep2-muse.herokuapp.com/](https://ep2-muse.herokuapp.com/ "https://ep2-muse.herokuapp.com/")

Eclipse Phase 2 Muse is a tool to allow players of the [Eclipse Phase](https://eclipsephase.com/ "Eclipse Phase") roleplaying game to look up game information and create basic characters sheets for new characters of the game.

This project was initially taken as a capstone project for a software engineering bootcamp, but will be maintained and updated over time.

----------
# Features #

EP2-Muse currently has two main features: 

- **Compendium** - The Compendium is a database of character, gear, skills, and attributes that users can use to look up information as needed. Users can navigate by gear or attribute type and get more information about that item.

- **Character Sheets** - EP2-Muse also allows users to create new characters using the ***Add Character*** option and view their created character sheets using ***My Characters***. The character sheet creation features will automatically populate attributes and stats based on the choices the user makes for their characters.

The compendium lookup and character sheet features are the main focus of the application, as the goal is to provide an easy way for users to find information they need and create character sheets without extensive knowledge of game rules.

EP2-Muse also makes use of BCrypt to hash passwords and store user accounts, which allows characters to be linked to specific users. This lets users both view only their own characters while keeping them safe from other users.

----------
# Technologies #

EP-2 Muse makes use of a [custom API](https://ep2-data-api.herokuapp.com/ "custom API") I built using data from [Arokha's EP-2 Data project](https://github.com/Arokha/EP2-Data "Arokha's EP-2 Data project").

The following technology has been used to create EP2-Muse:

- HTML/CSS/Bootstrap
- Javascript/AJAX
- Python/Flask/SQLAlchemy/WTForms/Requests
- PostgreSQL/Gunicorn

----------
# License/Credits #

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/).

The work is derivative of Eclipse Phase with attribution to Posthuman Studios.

**Credits**

- ECLIPSE PHASE CREATED BY Rob Boyle and Brian Cross

- Writing (Infamy Opening Fiction): Rob Boyle and Davidson Cole
- Writing (Rules): Rob Boyle
- Writing (Source Material): Simon Berman, Rob Boyle, Katherine Cross, Natalia Dean, Jack Graham, Travas Gunnell, Sarah Hood, Marc Huete, Jason Mical, Ross Payton, Evie Smith
- Editing: Rob Boyle, Davidson Cole, Jack Graham, Karen Twelves
- Development: Rob Boyle, Jack Graham
- Art Direction: Rob Boyle, Zoe Robinson
- Graphic Design and Layout: Adam Jury
- Cover Art: Stephan Martiniere
- Interior Art: Jacob Anderson, Christine Bian, Mobo Boehme, Nick Boone, Daniel Brewer, Leanne Buckley, Matt Bulahao, Adam Burn, Jose Cabrera, Daniel Clarke, Trevor Claxton, Christina Davis, Alex Drummond, Danijel Firak, Nathan Geppert, Zach Graves, Alexander Gustafson, Ethan Patrick Harris, Josu Hernaiz, Sam Hogg, Lake Hurwitz, Lili Ibrahim, Anna Ignatieva, Maggie Ivy, Jeff Lee Johnson, Thomas Jung, Julian Kok, Kate Laird, Adam Lane, Ian Llanas, Adrian Majkrzak, Mitchell Malloy, Stephan Martiniere, Marco Mazzoni, Joshua Meehan, Austen Mengler, Brynn Metheny, Aaron Miller, Andre Mina, Mark Molnar, James Mosingo, David Auden Nash, Ben Newman, Will Nichols, Efrem Palacios, Chris Peuler, Pixoloid Studios, Radial Studio, Maciej Rebisz, Lorenz Ruwwe, Lie Setiawan, Andrew Silver, Quinn Simoes, Trevor Storey, Jessada Suthi, Stan Von Medvey, Bruno Werneck, Joe Wilson, Mark Winters, Andy Wright
- Icons: Jim Marcus
- Solar System Map: Tiara Lynn Agresta
- Character Sheet: Thomas Deeny, Adam Jury
- Consultation: Kara Baker, Davidson Cole, Talia Dean, Travas Gunnell, Natalie Jorion, Nora Jury-Last, John Nephew, Bridget Renoux, and Jaqui Wujec
- Special Thanks To: Echo Boyle, Natalie Jorion, Nora Jury-Last, and Jaqui Wujec for their patience, love, and support; Ann Higgins and Russel Last for unending encouragement; Davidson Cole for video awesomeness and pushing our buttons; Sarah Hood for her Drupal-fu; David Cooper for wrangling our Gen Con events; our crowd-pleasing Gen Con GMs; our awesome Gen Con booth staff; Aaron Feustel for some evil ideas; William Wilson for always having our backs numerically; Jeff Eaton for wild enthusiasm in database form; Eric Olson at Process Type Foundry; antifascists everywhere; everyone who contributed to EP’s first edition and sourcebooks; and everyone who participated in our open playtest and supported our kickstarter!
- Original Playtesters: Berianne Bramman, John Brudenell, Nick Caputi, Davidson Cole, Paul Foster, Scott Fox, Eric Geiger, Travas Gunnell, Erin Hankins, Austin Karpola, Seth Larson, Rhett Skubis, Kevin Tyska, Jaqui Wujec
Musical Inspiration: Ancient Methods, Chainreactor, Feindflug, Gary Numan, Holon, Holy Grin, Iszoloscope, iVardensphere/Scott Fox, I Hate Models, Mlada Fronta, My Life with the Thrill Kill Kult, Stendeck
- Dedication: Nancy C. Cole, Richard F. Jury, and Jeff Mackintosh

