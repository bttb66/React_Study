import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);
    const detail = query.detail === 'true';
    console.log(detail);
    return (
        <div>
            <h2>
                About {match.params.name}
                <br></br>
                {detail && 'detail:blah'}
            </h2>
        </div>
    )
}

export default About;