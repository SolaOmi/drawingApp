## Getting Started
No changes to how you run the code, what worked in the original readme of the
challenge should work here. The `npm test` command might give some trouble, you
can either just run `npm run cypress:run` or open up the cypress GUI to run the
tests.

a. I'd say I'm most proud of the optional color swatches feature for several
   reasons. First just getting it working involved a lot of moving parts, it's
   probably the most complex panel out of the 4. Second, I caught a bug before I
   made it; if the currently selected color is not in the swatches it should
   change not just when you change colors with the color picker, but also when
   you select a color from the swatches. (Get rid of line 21 and the preceding
   comma on line 20 of pen.js to see what I mean)

b. I would have liked to make a custom cursor for when a user is drawing or 
   changing settings. There's also some code that definitely could be refactored, 
   as well as adding some more testing.

c. I'd say the most helpful/used resource for me personally was the React
   official docs. I'm familiar with React, but this was my first time using
   hooks (hooray learning experiences!); it took a while to see a way to connect 
   the buttons (clear all & download) in the Panels directly to the canvas reference.