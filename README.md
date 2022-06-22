# Day and Night Mode, tailwind css variables, custom theme hook, Theme-ScrollBar

this app will show the day and night mode according to the user(client) window preferences or the saved preferences and the scrollbar is also changing accroding to the theme

## Features / About

-   here we used the tailwind css varibles so it will be very easy to write the css only one time and it changes the color according to the variables and the variables changes itself on the theme changes,
-   here we used the useTheme() hook which have the event listener so it will render the component when ever the theme is changed from any of the component / routes

    --> firstly we check the theme from the user saved preferences(browser local storage) and if there is nothing there means the user comes first time to the website so we check from the windows preferences if we didnt get the dark theme from there so we reflect the light them to the user as a default theme

-   here we used of the smooth scrolling also of the <ahref/> tags so it will move to the specific position with the help of css property and the scroll-padding property to give the top padding for the header if there is any fixed header in the website
-   here we also used the scrollbar design according to the theme and for the chrome and mozilla firefox

-   --> we can use the themeprovider context api insted of the useTheme() hook
-   working demo video
    https://drive.google.com/file/d/1-ZjGaRIADuqFeV1mBK-MxKhmWCRDKtKc/view
