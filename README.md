# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![mobile view](image.png)
![deskopt view](image-1.png)
![deskopt active view](image-2.png)

### Links

- Solution URL: [https://github.com/franekbu/Frontend-mentor-base-apparel-coming-soon-master]
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned it to separate letters in h1 first I discover font-strech property but it wasn't what I needed so I found letter-spacing and it was it.  
```css
  letter-spacing: 15px;
  font-strech: expanded;
```

WOW I had so much problem with checking the text in input I had been fighting with things such as INPUT.innerHtml or .innerText or .textContent and nothing had worked out finnally I found the corect one - INPUT.value 

I had problems with this condition too:
```js
    if ( !INPUT.value.includes( '@gmail.com' ) && !INPUT.value.includes( '@o2.pl' ) &&  !INPUT.value.includes( '@poczta.fm' )) 
```
for a long time i had a ||(or) not &&(and) so even if my email contained one of conditions alert went on, but after some time i realized what is going on :) 

### Useful resources

- [stackoverflow/INPUT.value](https://stackoverflow.com/questions/69777038/how-to-detect-what-the-user-have-typed-in-input-box-in-html-javascript) - This helped me for INPUT.value.
- [stackoverflow/keyup](https://stackoverflow.com/questions/5871383/difference-between-the-keydown-event-keypress-event-and-keyup-event-in-visual-s) - This helped me with better(than nothing ) understanding difference between the keydown, keypress, keyup
- [Second site](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) - This website (not particular link) is very helpfull for me in understanding different atribiutes(?)

## Author

- Frontend Mentor - [@franekbu](https://www.frontendmentor.io/profile/franekbu)


