import classes from './Post.module.css'

// const names = ['Ren','Nuggy'];
// Notes: Will make the name that appear random every time the page-re-renders
function Post ({author,body}) {
    // const chosenName = Math.random() > 0.5 ? names [0] : names [1]; 
    // Notes: Logic that will give the component to pick a random name 
    // Math.random - builtin random method in browsers
    return (
        <li className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
        </li>
    );
}
//Note: Curly braces will execute anything put inside it and show result
export default Post;