- [ ] Why would you use class component over function components (removing hooks from the question)?

    Because (possible opinion) they can help pass around a large amount of state, which is why some companies have been using class components for so long, so it is important to learn/understand them. And this might just be an opinion, but it also helps to visualize the react-lifecycle. 

- [ ] Name three lifecycle methods and their purposes.

    componentDidMount- fetches initial data from an API, and can be used to set up event listeners 
    render- allows us to define what we do/don't want to render to the DOM
    componentWillUnmount- provides cleanup for event listeners

- [ ] What is the purpose of a custom hook?

    A custom hook allows for DRYer code, and allows us to create state fro non-visual components (like event listeners)

- [ ] Why is it important to test our apps?

    We test our apps so that issues don't become much bigger later on in the process of building our app. I am loathe to quote directly from TK, but I found that this statement put testing into perspective: 
        "Not writing tests can be thought of as taking out a loan with a very high interest rate."