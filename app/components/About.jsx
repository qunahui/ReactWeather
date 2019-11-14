var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather application build on React. I have built this for my journey to become React dev!</p>
            <p>
                Here are some tools i used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> This was the JavaScript framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
                </li>
                <li>
                    <a href="https://facebook.com/quan.hui.81299">Facebook</a> - This is me ._.
                </li>
                <li>
                    <a href="https://github.com/qunahui">Github</a> - And my github too
                </li>
            </ul>
        </div>
    );
}
module.exports = About;